import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Fragment } from "react";
import HeaderBlogsItem from "./HeaderBlogsGridItem";

export default function HeaderBlogsPaper({ items }) {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <Grid container spacing={2} width="100%" height="300px">
      {groupedItems.map((group, groupIndex) => (
        <Fragment key={groupIndex}>
          <Grid item xs={12} md={3} height="100%">
            {group.slice(0, 2).map((item) => (
              <Grid
                item
                xs={12}
                key={item.id}
                height="50%"
                p={0}
                paddingBottom={item.id%3 === 1 ? "7.5px" : 0}
                paddingTop={item.id%3 === 2 ? "7.5px" : 0}
              >
                <HeaderBlogsItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
          {group[2] && (
            <Grid item xs={12} md={3} height="100%">
              <HeaderBlogsItem
                icon={group[2].icon}
                title={group[2].title}
                description={group[2].description}
              />
            </Grid>
          )}
        </Fragment>
      ))}
    </Grid>
  );
}
