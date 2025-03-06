<template>
  <div class="h-screen w-screen flex text-white">
    <!-- sidebar  -->
    <div class="w-[300px] h-full bg-gray-200 text-white">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">Admin Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-5px)] bg-gray-800">
        <div class="px-[20px] flex flex-col space-y-[10px] py-[15px]">
          <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </router-link>
          
          <router-link to="/dashboard" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            Dashboard
          </router-link>
          
          <router-link to="/users" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            Users
          </router-link>
          
          <router-link to="/reports" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
            </svg>
            Reports
          </router-link>
          
          <router-link to="/settings" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
            </svg>
            Settings
          </router-link>
          
          <router-link to="/analytics" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
            </svg>
            Analytics
          </router-link>
          
          <router-link to="/notifications" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            Notifications
          </router-link>
          
          <router-link to="/logout" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-small font-medium hover:bg-gray-700 rounded-md mt-auto">
            <svg aria-hidden="true" class="mr-3 w-[25px] h-[25px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
            </svg>
            Logout
          </router-link>
        </div>
      </div>
    </div>
    
    <div class="w-full h-full bg-gray-400">
      <div class="h-[50px] bg-gray-800 flex items-center justify-between px-[20px]">
        <h3 class="font-bold text-xl">Admin Dashboard</h3>
        <div class="flex items-center gap-4">
          <div class="relative">
            <svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            <span class="absolute top-0 right-0 h-[10px] w-[10px] bg-red-500 rounded-full"></span>
          </div>
          <div class="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-white text-gray-800 p-[20px]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style></style>