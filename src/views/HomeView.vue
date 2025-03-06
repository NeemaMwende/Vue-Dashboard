<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Home</h1>
      <p class="text-gray-600">Welcome to the Admin Dashboard. Use the sidebar to navigate to different sections.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div class="bg-blue-100 p-4 rounded-lg">
          <h2 class="text-lg font-medium text-blue-800">Quick Stats</h2>
          <p class="text-blue-600 mt-2">Summary of your dashboard metrics</p>
        </div>
        <div class="bg-green-100 p-4 rounded-lg">
          <h2 class="text-lg font-medium text-green-800">Recent Activity</h2>
          <p class="text-green-600 mt-2">Latest actions on your dashboard</p>
        </div>
        <div class="bg-purple-100 p-4 rounded-lg">
          <h2 class="text-lg font-medium text-purple-800">Shortcuts</h2>
          <p class="text-purple-600 mt-2">Quick access to frequently used features</p>
        </div>
      </div>
    </div>
  </template>