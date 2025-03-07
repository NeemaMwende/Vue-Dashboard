<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Settings</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Settings Navigation -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-4 bg-gray-800 text-white">
          <h3 class="font-semibold">Settings Categories</h3>
        </div>
        <div class="p-0">
          <ul>
            <li v-for="(category, index) in settingsCategories" :key="index">
              <button 
                @click="activeCategory = category.id" 
                class="w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                :class="{'bg-blue-50 border-l-4 border-l-blue-500': activeCategory === category.id}"
              >
                <div class="font-medium">{{ category.name }}</div>
                <div class="text-xs text-gray-500">{{ category.description }}</div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Settings Content -->
      <div class="md:col-span-2 bg-white rounded-lg shadow-md p-6">
        <!-- Account Settings -->
        <div v-if="activeCategory === 'account'" class="space-y-6">
          <h3 class="text-xl font-semibold border-b pb-3">Account Settings</h3>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" v-model="settings.account.email" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input type="text" v-model="settings.account.username" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Change Password</label>
              <input type="password" placeholder="Current password" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2" />
              <input type="password" placeholder="New password" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2" />
              <input type="password" placeholder="Confirm new password" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Two-Factor Authentication</label>
              <div class="flex items-center">
                <div class="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" v-model="settings.account.twoFactor" id="toggle" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label for="toggle" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <span class="text-sm text-gray-700">{{ settings.account.twoFactor ? 'Enabled' : 'Disabled' }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Notification Settings -->
        <div v-if="activeCategory === 'notifications'" class="space-y-6">
          <h3 class="text-xl font-semibold border-b pb-3">Notification Settings</h3>
          
          <div class="space-y-4">
            <div v-for="(notification, index) in settings.notifications" :key="index" class="flex items-center justify-between py-2 border-b">
              <div>
                <h4 class="font-medium">{{ notification.name }}</h4>
                <p class="text-sm text-gray-500">{{ notification.description }}</p>
              </div>
              <div class="relative inline-block w-10 align-middle select-none">
                <input type="checkbox" v-model="notification.enabled" :id="`notification-${index}`" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                <label :for="`notification-${index}`" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Appearance Settings -->
        <div v-if="activeCategory === 'appearance'" class="space-y-6">
          <h3 class="text-xl font-semibold border-b pb-3">Appearance Settings</h3>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <div class="grid grid-cols-3 gap-3">
                <button 
                  @click="settings.appearance.theme = 'light'" 
                  class="p-3 border rounded-md flex flex-col items-center justify-center text-center"
                  :class="{'ring-2 ring-blue-500': settings.appearance.theme === 'light'}"
                >
                  <div class="h-10 w-10 bg-white border rounded-full mb-2"></div>
                  <span class="text-sm">Light</span>
                </button>
                <button 
                  @click="settings.appearance.theme = 'dark'" 
                  class="p-3 border rounded-md flex flex-col items-center justify-center text-center"
                  :class="{'ring-2 ring-blue-500': settings.appearance.theme === 'dark'}"
                >
                  <div class="h-10 w-10 bg-gray-800 border rounded-full mb-2"></div>
                  <span class="text-sm">Dark</span>
                </button>
                <button 
                  @click="settings.appearance.theme = 'system'" 
                  class="p-3 border rounded-md flex flex-col items-center justify-center text-center"
                  :class="{'ring-2 ring-blue-500': settings.appearance.theme === 'system'}"
                >
                  <div class="h-10 w-10 bg-gradient-to-r from-white to-gray-800 border rounded-full mb-2"></div>
                  <span class="text-sm">System</span>
                </button>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Sidebar Position</label>
              <select v-model="settings.appearance.sidebarPosition" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Compact Mode</label>
              <div class="flex items-center">
                <div class="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" v-model="settings.appearance.compactMode" id="toggle-compact" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label for="toggle-compact" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <span class="text-sm text-gray-700">{{ settings.appearance.compactMode ? 'Enabled' : 'Disabled' }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Save Button -->
        <div class="mt-6 flex justify-end">
          <button @click="saveSettings" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
  data() {
    return {
      activeCategory: 'account',
      settingsCategories: [
        { id: 'account', name: 'Account', description: 'Manage your account details' },
        { id: 'notifications', name: 'Notifications', description: 'Configure notification preferences' },
        { id: 'appearance', name: 'Appearance', description: 'Customize the interface' },
        { id: 'privacy', name: 'Privacy & Security', description: 'Manage your privacy settings' },
        { id: 'integrations', name: 'Integrations', description: 'Connect with other services' }
      ],
      settings: {
        account: {
          email: 'user@example.com',
          username: 'admin_user',
          twoFactor: false
        },
        notifications: [
          { name: 'Email Notifications', description: 'Receive notifications via email', enabled: true },
          { name: 'Push Notifications', description: 'Receive push notifications', enabled: false },
          { name: 'SMS Notifications', description: 'Receive SMS alerts for critical events', enabled: false },
          { name: 'Weekly Digest', description: 'Receive a weekly summary of activity', enabled: true }
        ],
        appearance: {
          theme: 'light',
          sidebarPosition: 'left',
          compactMode: false
        }
      }
    }
  },
  methods: {
    saveSettings() {
      alert('Settings saved successfully!');
      
    }
  }
}
</script>