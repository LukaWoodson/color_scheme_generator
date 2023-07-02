import {
  Card,
  CardButton,
  CardDescription,
  CardsWrapper,
  CardTitle,
  Drawer,
  DrawerDivider,
  DrawerItem,
  DrawerTitle,
  MiniSiteContent,
  MiniSitePreview,
  MiniSiteTitle,
  MiniSiteWrapper,
  Search,
  Selection,
  SelectionWrapper,
} from "./mini-site.styles";

function MiniSiteComponent() {
  return (
    <MiniSiteWrapper>
      <Drawer>
        <DrawerTitle>Navigation Drawer</DrawerTitle>
        <DrawerDivider>_________</DrawerDivider>
        <DrawerItem>Dashboard</DrawerItem>
        <DrawerItem>Analytics</DrawerItem>
        <DrawerItem>Settings</DrawerItem>
        <DrawerItem>Dark - 300</DrawerItem>
      </Drawer>
      <MiniSiteContent>
        <MiniSitePreview>Preview (Primary - 500)</MiniSitePreview>
        <MiniSiteTitle>Dark Theme (Dark - 100)</MiniSiteTitle>
        <Search>Search (Dark - 200)</Search>
        <SelectionWrapper>
          <Selection>Dark - 300</Selection>
          <Selection>Dark - 300</Selection>
          <Selection>Dark - 300</Selection>
          <Selection>Dark - 300</Selection>
        </SelectionWrapper>
        <CardsWrapper>
          <Card>
            <CardTitle>Card Surface (Dark - 200)</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet ipsum ac dui laoreet iaculis ....
            </CardDescription>
            <CardButton>Primary - 500</CardButton>
          </Card>
          <Card>
            <CardTitle>Card Surface (Dark - 200)</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet ipsum ac dui laoreet iaculis ....
            </CardDescription>
            <CardButton>Primary - 500</CardButton>
          </Card>
          <Card>
            <CardTitle>Card Surface (Dark - 200)</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet ipsum ac dui laoreet iaculis ....
            </CardDescription>
            <CardButton>Primary - 500</CardButton>
          </Card>
        </CardsWrapper>
      </MiniSiteContent>
    </MiniSiteWrapper>
  );
}

export default MiniSiteComponent;
