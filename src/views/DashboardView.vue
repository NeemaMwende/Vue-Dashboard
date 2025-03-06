<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Dashboard</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-medium text-gray-800">Total Users</h2>
          <p class="text-3xl font-bold text-blue-600">5,243</p>
          <p class="text-sm text-gray-500">+12% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-medium text-gray-800">Revenue</h2>
          <p class="text-3xl font-bold text-green-600">$24,500</p>
          <p class="text-sm text-gray-500">+8% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-medium text-gray-800">Active Projects</h2>
          <p class="text-3xl font-bold text-purple-600">32</p>
          <p class="text-sm text-gray-500">+3 new this week</p>
        </div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Recent Activity</h2>
        <div class="space-y-3">
          <div class="flex items-center py-2 border-b border-gray-100">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">U</div>
            <div>
              <p class="text-sm font-medium">User John Doe registered</p>
              <p class="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div class="flex items-center py-2 border-b border-gray-100">
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-3">S</div>
            <div>
              <p class="text-sm font-medium">Sales report generated</p>
              <p class="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div class="flex items-center py-2">
            <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3">P</div>
            <div>
              <p class="text-sm font-medium">Project "Marketing Campaign" created</p>
              <p class="text-xs text-gray-500">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>