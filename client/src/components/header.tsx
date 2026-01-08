import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { IFocusLogo } from "@/components/ifocus-logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courseCategories, allCourses } from "@shared/schema";
import {
  Menu,
  X,
  Code2,
  Globe,
  Database,
  Brain,
  Shield,
  Cloud,
  TestTube,
  BarChart3,
  Megaphone,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  Database,
  Brain,
  Shield,
  Cloud,
  TestTube,
  BarChart3,
  Megaphone,
  Palette,
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses", hasMega: true },
  { name: "Services", href: "/services" },
  { name: "Placements", href: "/placements" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <IFocusLogo />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) =>
                item.hasMega ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={location.startsWith("/courses") ? "text-primary" : ""}
                      data-testid="nav-courses-trigger"
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-4" data-testid="mega-menu-courses">
                        <div className="grid grid-cols-5 gap-4">
                          {courseCategories.map((category) => {
                            const Icon = iconMap[category.icon];
                            const categoryCourses = allCourses.filter(
                              (c) => c.category === category.id
                            );
                            return (
                              <div key={category.id} className="space-y-2">
                                <Link
                                  href={`/courses?category=${category.id}`}
                                  className="flex items-center gap-2 font-medium text-sm hover-elevate rounded-md p-1 -ml-1"
                                >
                                  {Icon && <Icon className="h-4 w-4 text-primary" />}
                                  <span>{category.name}</span>
                                </Link>
                                <ul className="space-y-1">
                                  {categoryCourses.slice(0, 4).map((course) => (
                                    <li key={course.id}>
                                      <Link
                                        href={`/courses/${course.id}`}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-0.5"
                                      >
                                        {course.name}
                                      </Link>
                                    </li>
                                  ))}
                                  {categoryCourses.length > 4 && (
                                    <li>
                                      <Link
                                        href={`/courses?category=${category.id}`}
                                        className="text-sm text-primary hover:underline py-0.5 block"
                                      >
                                        +{categoryCourses.length - 4} more
                                      </Link>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Explore all {allCourses.length}+ courses
                          </span>
                          <Link href="/courses">
                            <Button variant="outline" size="sm">
                              View All Courses
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href}>
                      <NavigationMenuLink
                        className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                          location === item.href ? "text-primary" : ""
                        }`}
                        data-testid={`nav-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:block">
              <Button data-testid="button-enquire-now">Enquire Now</Button>
            </Link>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <IFocusLogo size="sm" />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4">
                    <Accordion type="single" collapsible className="w-full">
                      {navItems.map((item) =>
                        item.hasMega ? (
                          <AccordionItem value={item.name} key={item.name}>
                            <AccordionTrigger className="text-base font-medium">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 pl-2">
                                {courseCategories.map((category) => {
                                  const Icon = iconMap[category.icon];
                                  return (
                                    <Link
                                      key={category.id}
                                      href={`/courses?category=${category.id}`}
                                      className="flex items-center gap-2 py-1"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {Icon && (
                                        <Icon className="h-4 w-4 text-primary" />
                                      )}
                                      <span className="text-sm">{category.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <div key={item.name} className="py-3">
                            <Link
                              href={item.href}
                              className={`text-base font-medium ${
                                location === item.href ? "text-primary" : ""
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </div>
                        )
                      )}
                    </Accordion>
                  </nav>
                  <div className="p-4 border-t">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full">Enquire Now</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
