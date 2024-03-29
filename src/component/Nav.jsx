import NavItem from "./NavItem";

export default function Nav(){
    return(
        <ul className="flex justify-start opacity-0 sm:opacity-0 md:opacity-0 lg:opacity-100 space-x-10 py-20">
            <NavItem variant="hovered">Home</NavItem>
            <NavItem variant="non-hovered">Features</NavItem>
            <NavItem variant="non-hovered">Blog</NavItem>
            <NavItem variant="non-hovered">About Us</NavItem>
        </ul>
    );
}