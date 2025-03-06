<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Users</h1>
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="flex justify-between items-center p-4 border-b border-gray-200">
          <div class="flex items-center">
            <input type="text" placeholder="Search users..." class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
          </div>
          <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Add User</button>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
                    {{ user.name.charAt(0) }}
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ user.email }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ user.role }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`">
                  {{ user.active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
                <a href="#" class="text-red-600 hover:text-red-900">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-700">
              Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of <span class="font-medium">20</span> results
            </div>
            <div class="flex space-x-2">
              <button class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-md">Previous</button>
              <button class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-md">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UsersView',
    data() {
      return {
        users: [
          { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', active: true },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', active: true },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', active: false },
          { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', active: true },
          { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', active: true },
        ]
      };
    }
  }
  </script>