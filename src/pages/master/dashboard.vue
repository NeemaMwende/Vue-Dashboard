<template>
  <div class="min-h-screen w-full flex text-white">
    <!-- sidebar  -->
    <div :class="[sidebarOpen ? 'w-[300px]' : 'w-0 md:w-[70px]', 'min-h-screen bg-gray-200 text-white flex flex-col transition-all duration-300 overflow-hidden']">
      <div class="h-[60px] bg-gray-900 flex items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl whitespace-nowrap">Admin Dashboard</h3>
        </div>
      </div>
      <div class="flex-1 bg-gray-800 flex flex-col">
        <div class="px-[20px] flex flex-col h-full py-[15px]">
          <div class="flex-1 flex flex-col space-y-[16px]">
            <router-link to="/" class="inline-flex relative items-center py-[12px] px-[12px] w-full text-sm font-medium hover:bg-gray-700 rounded-md transition-colors">
              <svg aria-hidden="true" class="mr-3 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span :class="[!sidebarOpen && 'md:hidden', 'whitespace-nowrap']">Home</span>
            </router-link>
            
            <router-link to="/reports" class="inline-flex relative items-center py-[12px] px-[12px] w-full text-sm font-medium hover:bg-gray-700 rounded-md transition-colors">
              <svg aria-hidden="true" class="mr-3 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span :class="[!sidebarOpen && 'md:hidden', 'whitespace-nowrap']">Reports</span>
            </router-link>
            
            <router-link to="/profile" class="inline-flex relative items-center py-[12px] px-[12px] w-full text-sm font-medium hover:bg-gray-700 rounded-md transition-colors">
              <svg aria-hidden="true" class="mr-3 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <span :class="[!sidebarOpen && 'md:hidden', 'whitespace-nowrap']">Profile</span>
            </router-link>
            
            <!-- <router-link to="/notifications" class="inline-flex relative items-center py-[12px] px-[12px] w-full text-sm font-medium hover:bg-gray-700 rounded-md transition-colors">
              <svg aria-hidden="true" class="mr-3 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <span :class="[!sidebarOpen && 'md:hidden', 'whitespace-nowrap']">Notifications</span>
            </router-link> -->

            <router-link to="/settings" class="inline-flex relative items-center py-[12px] px-[12px] w-full text-sm font-medium hover:bg-gray-700 rounded-md transition-colors">
              <svg aria-hidden="true" class="mr-3 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"></path>
              </svg>
              <span :class="[!sidebarOpen && 'md:hidden', 'whitespace-nowrap']">Settings</span>
            </router-link>
          </div>

          <div class="pt-6">
            <router-link to="/logout" class="inline-flex relative items-center py-[12px] px-[12px] w-full text-sm font-medium hover:bg-gray-700 rounded-md mt-4 transition-colors">
              <svg aria-hidden="true" class="mr-3 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
              </svg>
              <span :class="[!sidebarOpen && 'md:hidden', 'whitespace-nowrap']">Logout</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Content Section -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <div class="h-[60px] bg-gray-800 flex items-center justify-between px-4 md:px-6">
        <!-- Hamburger Menu -->
        <div class="flex items-center relative">
          <button @click="toggleSidebar" class="text-white focus:outline-none relative">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <!-- Hamburger Dropdown Menu -->
          <div v-show="showHamburgerMenu" class="absolute left-0 top-10 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="py-1 text-left" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">Account Settings</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">Support</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">Licenses</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">Help</a>
            </div>
          </div>
        </div>
        
        <!-- Search Bar - Centered -->
        <div class="hidden md:flex items-center justify-center flex-1 mx-4">
          <div class="relative w-full max-w-md">
            <form @submit.prevent="performSearch">
              <input 
                ref="searchInput" 
                v-model="searchQuery" 
                type="text" 
                class="bg-gray-700 text-white w-full pl-10 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Search..." 
                @keyup.enter="performSearch"
              />
            </form>
            
            <!-- Search Icon (Left) -->
            <div class="absolute left-3 top-2.5">
              <svg @click="performSearch" class="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <!-- Voice Search Icon (Right) -->
            <button @click="startVoiceRecognition" class="absolute right-3 top-2.5 cursor-pointer focus:outline-none" :class="{ 'text-blue-400': isListening }">
              <svg class="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14a4 4 0 004-4V6a4 4 0 10-8 0v4a4 4 0 004 4zm5-4a5 5 0 01-10 0H5a7 7 0 0014 0h-2zm-5 7v3m-2 0h4"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Search Toggle -->
        <div class="md:hidden">
          <button @click="toggleSearch" class="text-white focus:outline-none mx-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        
        <!-- User Profile -->
        <div class="relative">
          <div class="flex items-center justify-end space-x-2 md:space-x-4">
            <div class="relative hidden md:block">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </div>
            <img class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-50 object-cover" src="https://i.pravatar.cc/100" alt="Avatar" />
            <div class="hidden md:block font-semibold text-left">
              <div class="text-sm">Angel, Software Developer</div>
              <div class="text-xs text-gray-400">Admin</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Search Bar (Hidden by Default) -->
      <div v-if="showSearch" class="md:hidden bg-gray-700 px-4 py-2">
        <div class="relative">
          <form @submit.prevent="performSearch">
            <input 
              v-model="searchQuery" 
              type="text" 
              class="bg-gray-600 text-white w-full pl-10 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Search..." 
              @keyup.enter="performSearch"
            />
          </form>
          <div @click="performSearch" class="absolute left-3 top-2.5 cursor-pointer">
            <svg class="w-5 h-5 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <!-- Voice Search Icon for Mobile -->
          <button @click="startVoiceRecognition" class="absolute right-3 top-2.5 cursor-pointer focus:outline-none" :class="{ 'text-blue-400': isListening }">
            <svg class="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14a4 4 0 004-4V6a4 4 0 10-8 0v4a4 4 0 004 4zm5-4a5 5 0 01-10 0H5a7 7 0 0014 0h-2zm-5 7v3m-2 0h4"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Main Content Area -->
      <div class="flex-1 bg-gray-100 text-gray-800 p-[24px] overflow-auto">
        <!-- Search Results Section (when search is active) -->
        <div v-if="searchResults.length > 0" class="mb-6">
          <h2 class="text-xl font-bold mb-4">Search Results for "{{ searchQuery }}"</h2>
          <div class="bg-white rounded-lg shadow-md p-4">
            <div v-for="(result, index) in searchResults" :key="index" class="border-b last:border-b-0 py-3">
              <h3 class="font-medium text-lg">{{ result.title }}</h3>
              <p class="text-gray-600 mt-1">{{ result.description }}</p>
              <div class="mt-2 flex items-center">
                <router-link :to="result.path" class="text-blue-600 hover:text-blue-800 text-sm">
                  View details →
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty Search Results Message -->
        <div v-if="searchPerformed && searchResults.length === 0" class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-xl font-bold mb-2">No results found</h2>
          <p class="text-gray-600">No results found for "{{ searchQuery }}". Please try different keywords.</p>
        </div>
        
        <!-- Normal Content (router view) -->
        <router-view v-if="!searchResults.length || !searchPerformed"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showDropDown: false,
      showSearch: false,
      showHamburgerMenu: false,
      sidebarOpen: true,
      searchQuery: '',
      isListening: false,
      recognition: null,
      isSpeechRecognitionSupported: false,
      searchResults: [],
      searchPerformed: false,
      // Sample data for demonstration
      sampleData: [
        { 
          title: "Dashboard Overview", 
          description: "Main dashboard with key performance indicators and analytics.",
          path: "/dashboard"
        },
        { 
          title: "User Profile Settings", 
          description: "Manage your profile information and preferences.",
          path: "/profile"
        },
        { 
          title: "System Notifications", 
          description: "View all system and application notifications.",
          path: "/notifications"
        },
        { 
          title: "Application Settings", 
          description: "Configure application preferences and system settings.",
          path: "/settings"
        }
      ]
    }
  },
  mounted() {
    this.initSpeechRecognition();
  },
  methods: {
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      this.showHamburgerMenu = !this.showHamburgerMenu;
    },
    initSpeechRecognition() {
      // Check if Speech Recognition API is supported
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        this.isSpeechRecognitionSupported = true;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false; 
        this.recognition.interimResults = false; 
        this.recognition.lang = "en-US"; 
        
        // Set up event handlers
        this.recognition.onresult = (event) => {
          const speechResult = event.results[0][0].transcript; 
          this.searchQuery = speechResult; 
          this.isListening = false;
          
          // Automatically perform search when voice input completes
          this.performSearch();
        };
        
        this.recognition.onerror = (event) => {
          console.error("Speech Recognition Error:", event.error);
          this.isListening = false;
        };
        
        this.recognition.onend = () => {
          this.isListening = false; 
        };
      } else {
        console.log("Speech recognition is not supported in this browser.");
      }
    },
    startVoiceRecognition() {
      if (this.isSpeechRecognitionSupported && !this.isListening) {
        try {
          this.recognition.start();
          this.isListening = true;
        } catch (error) {
          console.error("Error starting speech recognition:", error);
        }
      } else if (this.isListening) {
        this.recognition.stop();
        this.isListening = false;
      } else {
        alert("Speech recognition is not supported in this browser.");
      }
    },
    performSearch() {
      // Skip empty searches
      if (!this.searchQuery.trim()) {
        this.searchResults = [];
        this.searchPerformed = false;
        return;
      }
      
      this.searchPerformed = true;
      const query = this.searchQuery.toLowerCase();
      
      this.searchResults = this.sampleData.filter(item => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      });
      
      if (this.showSearch && window.innerWidth < 768) {
        this.showSearch = false;
      }
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  height: 100vh;
  width: 100vw;
}

@media (max-width: 768px) {
  .custom-width {
    width: 240px;
  }
}
</style>