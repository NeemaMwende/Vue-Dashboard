<script setup>
import { ref } from "vue";

const showPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Change Password</label>

    <!-- Current Password -->
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        placeholder="Current password"
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2 pr-10"
      />
      <button
        type="button"
        class="absolute right-3 top-3 text-gray-500"
        @click="showPassword = !showPassword"
      >
        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825a10.95 10.95 0 01-3.75.675c-4.418 0-8.094-2.918-9.84-7.2 1.746-4.282 5.422-7.2 9.84-7.2 4.418 0 8.094 2.918 9.84 7.2a14.653 14.653 0 01-1.296 2.4M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.94 17.94A10.951 10.951 0 0112 20.25c-4.418 0-8.094-2.918-9.84-7.2a14.688 14.688 0 013.417-4.958M3.6 3.6l16.8 16.8"></path>
        </svg>
      </button>
    </div>

    <!-- New Password -->
    <div class="relative">
      <input
        :type="showNewPassword ? 'text' : 'password'"
        placeholder="New password"
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2 pr-10"
      />
      <button
        type="button"
        class="absolute right-3 top-3 text-gray-500"
        @click="showNewPassword = !showNewPassword"
      >
        <svg v-if="showNewPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825a10.95 10.95 0 01-3.75.675c-4.418 0-8.094-2.918-9.84-7.2 1.746-4.282 5.422-7.2 9.84-7.2 4.418 0 8.094 2.918 9.84 7.2a14.653 14.653 0 01-1.296 2.4M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.94 17.94A10.951 10.951 0 0112 20.25c-4.418 0-8.094-2.918-9.84-7.2a14.688 14.688 0 013.417-4.958M3.6 3.6l16.8 16.8"></path>
        </svg>
      </button>
    </div>

    <!-- Confirm New Password -->
    <div class="relative">
      <input
        :type="showConfirmPassword ? 'text' : 'password'"
        placeholder="Confirm new password"
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
      />
      <button
        type="button"
        class="absolute right-3 top-3 text-gray-500"
        @click="showConfirmPassword = !showConfirmPassword"
      >
        <svg v-if="showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825a10.95 10.95 0 01-3.75.675c-4.418 0-8.094-2.918-9.84-7.2 1.746-4.282 5.422-7.2 9.84-7.2 4.418 0 8.094 2.918 9.84 7.2a14.653 14.653 0 01-1.296 2.4M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.94 17.94A10.951 10.951 0 0112 20.25c-4.418 0-8.094-2.918-9.84-7.2a14.688 14.688 0 013.417-4.958M3.6 3.6l16.8 16.8"></path>
        </svg>
      </button>
    </div>
  </div>
</template>
