<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center p-8">
    <!-- Welcome Card -->
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl text-center">
      <h1 class="text-4xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <p class="mt-2 text-gray-600">Manage your data efficiently with ease.</p>
    </div>

    <!-- Quick Stats Section -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
      <div class="bg-white p-4 shadow rounded-lg text-center">
        <h2 class="text-xl font-semibold text-gray-700">Users</h2>
        <p class="text-2xl font-bold text-blue-500">1,245</p>
      </div>

      <div class="bg-white p-4 shadow rounded-lg text-center">
        <h2 class="text-xl font-semibold text-gray-700">Revenue</h2>
        <p class="text-2xl font-bold text-green-500">$34,800</p>
      </div>

      <div class="bg-white p-4 shadow rounded-lg text-center">
        <h2 class="text-xl font-semibold text-gray-700">New Orders</h2>
        <p class="text-2xl font-bold text-red-500">328</p>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex space-x-4 mt-8">
      <button class="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
        View Reports
      </button>
      <button class="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700">
        Settings
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeDashboard",
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
