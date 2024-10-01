import { Button, CircularProgress } from '@mui/material';

export default function SubmitButton({ isLoading, text , animation=true }) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      disabled={isLoading}
    >
      {!animation ? text : isLoading ? <CircularProgress size={24} /> : text }
    </Button>
  );
}