<!-- <template>
    <div class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 class="text-xl font-bold text-center mb-4">Notifications</h2>
  
      <button
        v-if="notifications.length"
        @click="clearNotifications"
        class="w-full mb-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Clear All
      </button>
  
      <div v-if="notifications.length" class="space-y-3">
        <div
          v-for="(notification, index) in notifications"
          :key="index"
          class="p-4 flex justify-between items-center rounded-lg transition"
          :class="notification.read ? 'bg-gray-200' : 'bg-blue-100'"
        >
          <div>
            <p class="text-gray-800">{{ notification.message }}</p>
            <small class="text-gray-500">{{ notification.time }}</small>
          </div>
          <button
            @click="toggleRead(index)"
            class="text-sm px-3 py-1 rounded-md font-medium transition"
            :class="notification.read ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-500 text-white hover:bg-gray-600'"
          >
            {{ notification.read ? 'Mark as Unread' : 'Mark as Read' }}
          </button>
        </div>
      </div>
  
      <p v-else class="text-center text-gray-500">No new notifications</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const notifications = ref([
    { message: 'New message from John', time: '5 mins ago', read: false },
    { message: 'Your order has been shipped', time: '1 hour ago', read: true },
    { message: 'Reminder: Meeting at 3 PM', time: '2 hours ago', read: false },
  ]);
  
  const toggleRead = (index) => {
    notifications.value[index].read = !notifications.value[index].read;
  };
  
  const clearNotifications = () => {
    notifications.value = [];
  };
  </script>
   -->