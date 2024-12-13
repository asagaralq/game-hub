import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrders: (sortOrders: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrders, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Releveance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date Added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
    { value: "-released", label: "Release Date" },
  ];

  const currentSortOrders = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrders?.label || "Releveance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrders(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
