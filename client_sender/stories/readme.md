## To add Figma to Storybook 

```
export default {
  title: "My stories",
  component: Button,
};

export const myStory = () => <Button>Hello, World!</Button>;

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
};
```