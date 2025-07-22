"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  {
    tittle: "صفحه اصلی",
    href: "/",
  },
  {
    tittle: "دوره های ریکت و نکست",
    href: "/courses",
  },
  {
    tittle: "مطالب و مقالات",
    href: "/blog",
  },
];
export const TopNavigation: React.FC = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathName === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              className={`dark:hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
              href={item.href}
            >
              {item.tittle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
