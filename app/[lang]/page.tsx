"use client";

import { useState, useMemo, use } from "react";
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
import { useUsers } from "@/hooks/useUsers";
import { getDictionary } from "@/app/dictionaries";

export default function UserDashboard({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = use(params);
    const dict = getDictionary(lang);
    const { users, loading, error, retry } = useUsers();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const USERS_PER_PAGE = 5;

    // Filter users based on search query
    const filteredUsers = useMemo(() => {
        if (!searchQuery.trim()) return users;

        const query = searchQuery.toLowerCase();
        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.username.toLowerCase().includes(query) ||
                user.phone.toLowerCase().includes(query)
        );
    }, [users, searchQuery]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(
        startIndex,
        startIndex + USERS_PER_PAGE
    );

    // Reset to page 1 when search query changes
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <div className="text-center">
                    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
                    <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                        {dict.loading}
                    </p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                    <div className="mb-4 text-center">
                        <svg
                            className="mx-auto h-16 w-16 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
                        {dict.error}
                    </p>
                    <button
                        onClick={retry}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {dict.retry}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {dict.title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {dict.showing} {filteredUsers.length} {dict.of} {users.length}
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={dict.search}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-12 text-gray-900 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-indigo-400"
                        />
                        <svg
                            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* User Table */}
                {paginatedUsers.length === 0 ? (
                    <div className="rounded-lg bg-white p-12 text-center shadow-md dark:bg-gray-800">
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            {dict.noResults}
                        </p>
                    </div>
                ) : (
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                                <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15 bg-white p-4 rounded-lg shadow-md">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 dark:text-white"
                                            >
                                                Name
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                                Contact
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                                Company
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                                Location
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-white/10 dark:bg-gray-900 rounded-lg mb-5">
                                        {paginatedUsers.map((user) => {
                                            return (
                                                <tr key={user.id}>
                                                    <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap">
                                                        <div className="font-medium text-gray-900 dark:text-white">
                                                            {user.name}
                                                        </div>
                                                        <div className="mt-1 text-blue-500 dark:text-blue-400 cursor-pointer">
                                                            @{user.username}
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
                                                        <div className="text-gray-900 dark:text-white flex items-center gap-2">
                                                            <EnvelopeIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                                                            {user.email}
                                                        </div>
                                                        <div className="mt-1 text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                            <PhoneIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                                                            {user.phone}
                                                        </div>
                                                        <div className="mt-1 text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                            <GlobeAltIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                                                            <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">{user.website}</a>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
                                                        <div className="text-gray-900 dark:text-white">
                                                            {user.company.name}
                                                        </div>
                                                        <div className="mt-1 text-gray-500 dark:text-gray-400">
                                                            {user.company.catchPhrase}
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-5 text-sm text-gray-500 dark:text-gray-400 relative group">
                                                        <div className="text-gray-900 dark:text-white">
                                                            {user.address.city}
                                                        </div>
                                                        <div className="mt-1 text-gray-500 dark:text-gray-400">
                                                            {user.address.street}, {user.address.suite}
                                                        </div>
                                                        <div className="mt-1 text-gray-500 dark:text-gray-400">
                                                            {user.address.zipcode}
                                                        </div>
                                                        {/* Tooltip */}
                                                        <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block z-10 w-max">
                                                            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg dark:bg-gray-700">
                                                                <div className="font-mono">
                                                                    <div>Lat: {user.address.geo.lat}</div>
                                                                    <div className="mt-1">Lng: {user.address.geo.lng}</div>
                                                                </div>
                                                                {/* Arrow */}
                                                                <div className="absolute left-4 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Pagination */}
                {filteredUsers.length > 0 && (
                    <div className="mt-6 flex items-center justify-between">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:shadow-md shadow-md"
                        >
                            {dict.prev}
                        </button>

                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                            }
                            disabled={currentPage === totalPages}
                            className="rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:shadow-md shadow-md"
                        >
                            {dict.next}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
