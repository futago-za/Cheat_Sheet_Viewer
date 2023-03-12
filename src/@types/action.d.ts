interface ActionList {
  header: string;
  items: {
      description: string;
      actions: {
        type: string;
        value: string;
      }[];
  }[];
}