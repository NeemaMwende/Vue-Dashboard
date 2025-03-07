<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">User Profile</h2>
    
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <!-- Profile Header -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
        <div class="flex flex-col md:flex-row items-center">
          <div class="relative mb-4 md:mb-0 md:mr-6">
            <img class="w-24 h-24 rounded-full border-4 border-white object-cover" :src="profile.avatar || 'https://i.pravatar.cc/200'" alt="Profile Picture" />
            <button class="absolute bottom-0 right-0 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </button>
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-xl font-bold">{{ profile.name }}</h3>
            <p>{{ profile.title }}</p>
            <div class="flex items-center justify-center md:justify-start mt-2">
              <span class="bg-green-400 rounded-full w-2 h-2 mr-1"></span>
              <span class="text-sm">Online</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Profile Content -->
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Profile Info -->
          <div class="md:col-span-2 space-y-6">
            <div>
              <h4 class="text-lg font-semibold mb-4">Personal Information</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" v-model="profile.name" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input type="text" v-model="profile.title" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Activity & Stats -->
          <div class="space-y-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="text-lg font-semibold mb-3">Connected Accounts</h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.61.58-2.46.69a4.41 4.41 0 0 0 1.92-2.42 8.56 8.56 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.92-4.28 4.29 0 .34.04.67.11 1A12.07 12.07 0 0 1 3 5.15a4.29 4.29 0 0 0 1.33 5.72c-.6-.02-1.18-.18-1.67-.46v.05c0 2.06 1.46 3.78 3.38 4.18-.36.1-.75.15-1.15.15-.28 0-.56-.03-.83-.07.56 1.74 2.17 3 4.08 3.04A8.65 8.65 0 0 1 2 19.54 12.2 12.2 0 0 0 7.29 21c5.89 0 9.1-4.89 9.1-9.14 0-.14 0-.28-.01-.42A6.5 6.5 0 0 0 22.46 6z" />
                    </svg>
                    <span class="ml-2">Twitter</span>
                    
                  </div>
                  <button class="text-blue-500 hover:underline">Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      profile: {
        avatar: '',
        name: 'John Doe',
        title: 'Software Engineer',
        email: '',
        phone: '',
        location: '',
        department: '',
        bio: '',
        skills: [],
      },
      recentActivity: [
        { description: 'Completed a project', time: '2 hours ago' },
        { description: 'Updated profile information', time: 'Yesterday' },
      ],
    };
  },
};
</script>


<style scoped>
/* Additional styles if needed */
</style>