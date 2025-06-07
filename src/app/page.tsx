"use client";
import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  User,
  BookOpen,
  Home,
  PlusCircle,
  XCircle,
  CheckCircle,
} from "lucide-react";

const gradeOptions = [ "1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9",
    "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9",
    "3.0", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9",
    "4.0", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.6", "4.8", "4.9", "5.0", "INC", "DROP" 
];

const WelcomeCard = ({ studentData }: { studentData: any }) => (
  <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8 transition-colors duration-300">
    <div className="flex items-center space-x-4">
      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
        <User className="w-8 h-8 text-blue-500 dark:text-blue-300" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Welcome, {studentData.name || "Student"}!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Let's make this semester count.
        </p>
      </div>
    </div>
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-700/50 rounded-lg">
        <span className="font-semibold text-gray-600 dark:text-gray-300">Student ID:</span>
        <span className="text-gray-800 dark:text-white font-medium">{studentData.studentId || "Not Set"}</span>
      </div>
      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-700/50 rounded-lg">
        <span className="font-semibold text-gray-600 dark:text-gray-300">Program:</span>
        <span className="text-gray-800 dark:text-white font-medium">{studentData.course || "Not Set"}</span>
      </div>
      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-700/50 rounded-lg">
        <span className="font-semibold text-gray-600 dark:text-gray-300">Year Level:</span>
        <span className="text-gray-800 dark:text-white font-medium">{studentData.year || "Not Set"}</span>
      </div>
    </div>
  </div>
);

const StudentInfo = ({ studentData, setStudentData }: { studentData: any; setStudentData: any }) => {
  const [formData, setFormData] = useState(studentData);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
    setIsSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentData(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Profile Information</h2>
      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Student ID</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your student ID (XX-XXXX-XXX)"
          />
        </div>
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Program</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your program"
          />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year Level</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-gray-900/50 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter your year level"
          />
        </div>
        <div className="flex items-center justify-end space-x-4">
          {isSaved && (
            <div className="flex items-center text-green-500 dark:text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Saved!</span>
            </div>
          )}
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-transform transform hover:scale-105">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const Courses = ({ courses, setCourses }: { courses: any[]; setCourses: any }) => {
  const addCourse = () => {
    const newCourse = { id: Date.now(), subject: "", grade: "1.00" };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleCourseChange = (id: number, field: string, value: string) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8 transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Subjects and Grades</h2>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Total: <span className="font-bold text-blue-600 dark:text-blue-400">{courses.length}</span>
          </span>
          <button
            onClick={addCourse}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110"
          >
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {courses.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">No subjects added yet. Click '+' to add a subject.</p>
        ) : (
          courses.map((course, index) => (
            <div
              key={course.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-3 bg-slate-50 dark:bg-gray-700/50 rounded-lg animate-fade-in"
            >
              <div className="md:col-span-1 text-center font-semibold text-gray-500 dark:text-gray-400">
                {index + 1}.
              </div>
              <div className="md:col-span-7">
                <label htmlFor={`subject-${course.id}`} className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  id={`subject-${course.id}`}
                  value={course.subject}
                  onChange={(e) => handleCourseChange(course.id, "subject", e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-900/50 border border-slate-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g., Programming Logic and Design"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor={`grade-${course.id}`} className="sr-only">
                  Grade
                </label>
                <select
                  id={`grade-${course.id}`}
                  value={course.grade}
                  onChange={(e) => handleCourseChange(course.id, "grade", e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-900/50 border border-slate-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-1 flex justify-center">
                <button
                  onClick={() => removeCourse(course.id)}
                  className="p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 transition"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default function StudentPortal() {
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [studentData, setStudentData] = useState({
    name: "Trixie Dolera",
    studentId: "23-3403-881",
    course: "BS Computer Engineering",
    year: "2nd Year",
  });
  const [courses, setCourses] = useState([
    { id: 1, subject: "Data Structures and Algorithms", grade: "4.4" },
    { id: 2, subject: "Object Oriented Programming 2", grade: "4.6" },
  ]);

  useEffect(() => {
    setIsMounted(true);
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <WelcomeCard studentData={studentData} />;
      case "profile":
        return <StudentInfo studentData={studentData} setStudentData={setStudentData} />;
      case "courses":
        return <Courses courses={courses} setCourses={setCourses} />;
      default:
        return <WelcomeCard studentData={studentData} />;
    }
  };

  const NavButton = ({ tabName, icon: Icon, label }: { tabName: string; icon: any; label: string }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
        activeTab === tabName
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] opacity-50 dark:opacity-30 transition-opacity"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative z-10">
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <img src="icon.svg" alt="Logo" className="h-10 w-10" />
                <span className="text-xl font-bold text-gray-800 dark:text-white">SyncED</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <NavButton tabName="home" icon={Home} label="Home" />
                <NavButton tabName="profile" icon={User} label="Profile" />
                <NavButton tabName="courses" icon={BookOpen} label="Courses" />
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </main>
        <footer className="text-center py-6 mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} SyncED by Trixie Dolera. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
