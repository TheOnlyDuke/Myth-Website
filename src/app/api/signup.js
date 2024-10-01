import { validatePassword, validatePhoneNumber } from '../../utils/validation';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { username, email, password, phoneNumber, universityId } = req.body;

  if (!username || !password || !phoneNumber) {
    return res.status(400).json({ error: 'Required fields are missing' });
  }

  if (!validatePhoneNumber(phoneNumber)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return res.status(400).json({ error: 'Password does not meet security requirements' });
  }

  try {
    const backendResponse = await fetch('http://127.0.0.1:8000/accounts/register_serializers/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({ username, email, password, phoneNumber }),
    });

    if (backendResponse.ok) {
      const data = await backendResponse.json();
      return res.status(200).json(data);
    } else {
      const errorData = await backendResponse.json();
      return res.status(backendResponse.status).json(errorData);
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}