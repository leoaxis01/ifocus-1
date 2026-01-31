import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "@/components/course-card";
import { courseCategories, allCourses } from "@shared/schema";
import {
  Search,
  Filter,
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

export default function Courses() {
  const searchParams = useSearch();
  const urlCategory = new URLSearchParams(searchParams).get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    urlCategory || "all"
  );
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevel("all");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "all" ||
    selectedLevel !== "all";

  return (
    <div className="flex flex-col min-h-screen" data-testid="page-courses">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                All Courses
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Explore Our <span className="text-gradient">Courses</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                50+ industry-relevant courses across 10 technology domains.
                Find the perfect program to accelerate your career.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-card sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-courses"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger
                className="w-full sm:w-[200px]"
                data-testid="select-category"
              >
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {courseCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger
                className="w-full sm:w-[150px]"
                data-testid="select-level"
              >
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="gap-2"
                data-testid="button-clear-filters"
              >
                <X className="h-4 w-4" />
                Clear
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
              data-testid="filter-all"
            >
              All
            </Button>
            {courseCategories.map((category) => {
              const Icon = iconMap[category.icon];
              const isActive = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                  data-testid={`filter-${category.id}`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-8 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {filteredCourses.length}
              </span>{" "}
              courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <AnimateOnScroll>
              <div
                className="text-center py-20"
                data-testid="no-courses-message"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  No courses found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            </AnimateOnScroll>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <AnimateOnScroll key={course.id} delay={index * 30}>
                  <CourseCard course={course} />
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
