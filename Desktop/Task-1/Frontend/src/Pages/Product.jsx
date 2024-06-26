import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "../components/ProductCard";
import { Form } from "react-bootstrap";
import { IoFilter } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const sortOptions = [
  { name: " Low to High", href: "#", current: false },
  { name: " High to Low", href: "#", current: false },
  { name: "Ratings", href: "", current: false },
  { name: "Discount", href: "", current: false },
];

const filters = [
  // {
  //   id: "sort",
  //   name: "Sort",
  //   options: [
  //     { value: "Low to high", label: "Price:Low to High", checked: false },
  //     { value: "High to low", label: "Price:High to Low", checked: false },
  //     { value: "Rating", label: "Rating", checked: false },
  //     { value: "Discount", label: "Discount", checked: false },
  //   ],
  // },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  //   {
  //     id: 'category',
  //     name: 'Category',
  //     options: [
  //       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
  //       { value: 'sale', label: 'Sale', checked: false },
  //       { value: 'travel', label: 'Travel', checked: true },
  //       { value: 'organization', label: 'Organization', checked: false },
  //       { value: 'accessories', label: 'Accessories', checked: false },
  //     ],
  //   },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);

    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item != value);

      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValue.push(value);
    }

    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
   <div className="grid grid-cols-5">
   <div>

   </div>
   <div className="col-span-4">

    <ProductCard />
   </div>
   </div>
  );
}
