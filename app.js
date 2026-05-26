// ==========================================
// Y Chat - State Management & Interaction Engine
// ==========================================

const DEFAULT_STATE = {
    activeUserId: "user_sarah",
    users: {
        "user_sarah": {
            id: "user_sarah",
            username: "sarah_artist",
            displayName: "Sarah Chen",
            bio: "Illustrating dreams & coding interactive realities. Digital Artist based in SF. ✨🎨",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            followers: ["user_alex"],
            following: ["user_alex", "user_elena"],
            online: true
        },
        "user_alex": {
            id: "user_alex",
            username: "alex_tech",
            displayName: "Alex Rivera",
            bio: "Building micro-SaaS & exploring futuristic dark-mode UI templates. Hacker mode 24/7. 💻⚡",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            followers: ["user_sarah", "user_elena"],
            following: ["user_sarah"],
            online: true
        },
        "user_elena": {
            id: "user_elena",
            username: "elena_travels",
            displayName: "Elena Rostova",
            bio: "Capturing the architectural geometry of cities. Currently wandering and photographing Tokyo. 📸🗼",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            followers: ["user_sarah"],
            following: ["user_alex"],
            online: false
        }
    },
    posts: [
        {
            id: "post_1",
            authorId: "user_sarah",
            content: "Just finished my latest illustration: 'Neotokyo Glass'. Inspired by cyberpunk color palettes, glassmorphism UI, and ambient synthetic beats. What do you all think? 💜🤖 #YChatExperience #Design",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
            timestamp: "2 hours ago",
            likes: ["user_alex"],
            comments: [
                {
                    id: "c_1",
                    authorId: "user_alex",
                    content: "This is breathtaking, Sarah! The gradient blend is absolutely premium.",
                    timestamp: "1 hour ago"
                }
            ]
        },
        {
            id: "post_2",
            authorId: "user_alex",
            content: "Designing a sleek dark theme glassmorphic dashboard interface. Less is more, especially when you have HSL glowing border lines. 🚀👾 #Glassmorphism #UIDesign",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            timestamp: "5 hours ago",
            likes: ["user_sarah", "user_elena"],
            comments: [
                {
                    id: "c_2",
                    authorId: "user_sarah",
                    content: "Love the glowing cards, Alex! Perfect spacing.",
                    timestamp: "3 hours ago"
                }
            ]
        }
    ],
    stories: [
        { id: "st_sarah", authorId: "user_sarah", media: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", active: true },
        { id: "st_alex", authorId: "user_alex", media: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", active: true },
        { id: "st_elena", authorId: "user_elena", media: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", active: false }
    ],
    messages: [
        // DM history between Sarah and Alex
        {
            id: "msg_1",
            senderId: "user_alex",
            recipientId: "user_sarah",
            text: "Hey Sarah! Have you checked out the new layout designs?",
            timestamp: "Yesterday, 4:15 PM"
        },
        {
            id: "msg_2",
            senderId: "user_sarah",
            recipientId: "user_alex",
            text: "Not yet, Alex. Did you add the files we discussed?",
            timestamp: "Yesterday, 4:18 PM"
        },
        {
            id: "msg_3",
            senderId: "user_alex",
            recipientId: "user_sarah",
            text: "Yes, I just attached the color system specs and our mock layout concept right here! Let me know if you need changes.",
            file: { name: "Design-Color-Specs.pdf", size: "2.4 MB", type: "pdf" },
            timestamp: "Yesterday, 4:20 PM"
        },
        {
            id: "msg_4",
            senderId: "user_alex",
            recipientId: "user_sarah",
            text: "Here is the visual mockup too! 👇",
            photo: "https://images.unsplash.com/photo-1541462608141-2ff030de4a40?auto=format&fit=crop&w=400&q=80",
            timestamp: "Yesterday, 4:21 PM"
        },
        {
            id: "msg_5",
            senderId: "user_sarah",
            recipientId: "user_alex",
            text: "Wow, this looks incredible! Let me send you a voice note explaining my minor adjustment ideas.",
            timestamp: "Yesterday, 4:25 PM"
        },
        {
            id: "msg_6",
            senderId: "user_sarah",
            recipientId: "user_alex",
            audio: { duration: "0:24" },
            timestamp: "Yesterday, 4:26 PM"
        },
        // DM history between Sarah and Elena
        {
            id: "msg_7",
            senderId: "user_elena",
            recipientId: "user_sarah",
            text: "Hi Sarah! Tokyo is beautiful. Check out this shot I captured yesterday!",
            photo: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
            timestamp: "Today, 8:05 AM"
        }
    ],
    notifications: [
        {
            id: "nt_1",
            targetUserId: "user_sarah",
            senderId: "user_alex",
            type: "like",
            text: "liked your post 'Neotokyo Glass'.",
            timestamp: "2 hours ago",
            unread: true
        },
        {
            id: "nt_2",
            targetUserId: "user_sarah",
            senderId: "user_alex",
            type: "comment",
            text: "commented on your post: 'This is breathtaking...'",
            timestamp: "1 hour ago",
            unread: true
        },
        {
            id: "nt_3",
            targetUserId: "user_alex",
            senderId: "user_elena",
            type: "follow",
            text: "started following you.",
            timestamp: "3 hours ago",
            unread: true
        }
    ],
    // Tracks unread counts per thread for each user
    unreadDMs: {
        "user_sarah": {
            "user_alex": 0,
            "user_elena": 1
        },
        "user_alex": {
            "user_sarah": 0
        },
        "user_elena": {
            "user_sarah": 0
        }
    }
};

let state = null;
let currentTab = "feed";
let activeChatUserId = null;
let currentProfileTab = "posts";

// Image presets to offer in composer
const COMPOSER_PRESET_IMAGES = [
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80"
];

// Active attachment state inside Chat Composer
let activeChatAttachment = null;
// Active attachment state in Social Feed Composer
let activeSocialAttachment = null;

// ==========================================
// Initialization & LocalStorage
// ==========================================

function initApp() {
    // Load state
    const savedState = localStorage.getItem("ychat_state_v1");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            // Quick patch to ensure fields exist
            if (!state.unreadDMs) state.unreadDMs = DEFAULT_STATE.unreadDMs;
        } catch (e) {
            state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
    } else {
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    
    // Save to make sure
    saveState();
    
    // Populate Composer Presets
    renderComposerPresets();
    
    // Refresh GUI
    refreshGUI();
}

function saveState() {
    localStorage.setItem("ychat_state_v1", JSON.stringify(state));
}

function refreshGUI() {
    updateActiveUserHeader();
    renderStories();
    renderFeed();
    renderRightSuggestions();
    renderExploreGrid();
    renderNotifications();
    renderProfileView();
    updateBadges();
    
    if (activeChatUserId) {
        renderActiveChatWindow();
    }
    renderChatThreadsList();
}

// ==========================================
// Header / User Switches
// ==========================================

function updateActiveUserHeader() {
    const user = state.users[state.activeUserId];
    if (!user) return;
    
    // Update Sidebar
    document.getElementById("sidebar-user-avatar").src = user.avatar;
    document.getElementById("sidebar-user-dname").textContent = user.displayName;
    document.getElementById("sidebar-user-handle").textContent = `@${user.username}`;
    
    // Update Composer Avatar
    document.getElementById("composer-user-avatar").src = user.avatar;
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("open");
        if (modalId === 'switch-user-modal') {
            renderSwitchProfileList();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("open");
    }
}

function renderSwitchProfileList() {
    const listContainer = document.getElementById("modal-profile-list");
    listContainer.innerHTML = "";
    
    Object.values(state.users).forEach(user => {
        const isActive = user.id === state.activeUserId;
        const item = document.createElement("div");
        item.className = `modal-user-item ${isActive ? 'active' : ''}`;
        item.onclick = () => {
            selectActiveUser(user.id);
            closeModal('switch-user-modal');
        };
        
        item.innerHTML = `
            <div class="user-info-wrapper">
                <img src="${user.avatar}" alt="${user.displayName}" class="modal-user-avatar">
                <div class="modal-user-names">
                    <span class="modal-user-dname">${user.displayName}</span>
                    <span class="modal-user-handle">@${user.username}</span>
                </div>
            </div>
            ${isActive ? '<i class="fa-solid fa-circle-check" style="color: var(--accent-secondary);"></i>' : ''}
        `;
        listContainer.appendChild(item);
    });
}

function selectActiveUser(userId) {
    state.activeUserId = userId;
    activeChatUserId = null; // Close current active conversation thread to avoid issues
    saveState();
    
    // Visual Notification Toast effect
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "var(--brand-gradient)";
    toast.style.color = "white";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "12px";
    toast.style.boxShadow = "var(--shadow-premium)";
    toast.style.zIndex = "10000";
    toast.style.fontWeight = "700";
    toast.style.fontSize = "0.85rem";
    toast.style.animation = "slide-up 0.3s ease";
    toast.innerHTML = `<i class="fa-solid fa-user-astronaut" style="margin-right: 8px;"></i> Switched to <strong>${state.users[userId].displayName}</strong>`;
    
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";
        setTimeout(() => toast.remove(), 500);
    }, 2500);
    
    refreshGUI();
}

function handleCreateProfileSubmit(e) {
    e.preventDefault();
    const username = document.getElementById("profile-username").value.trim().toLowerCase();
    const displayName = document.getElementById("profile-dname").value.trim();
    const bio = document.getElementById("profile-bio").value.trim();
    const avatar = document.getElementById("profile-avatar-select").value;
    
    // Check duplication
    const usernameExists = Object.values(state.users).some(u => u.username === username);
    if (usernameExists) {
        alert("This username handle is already taken. Please choose another!");
        return;
    }
    
    const newUserId = "user_" + Date.now();
    state.users[newUserId] = {
        id: newUserId,
        username: username,
        displayName: displayName,
        bio: bio,
        avatar: avatar,
        followers: [],
        following: [],
        online: true
    };
    
    // Make them follow Sarah Chen by default to start chatting!
    state.users[newUserId].following.push("user_sarah");
    state.users["user_sarah"].followers.push(newUserId);
    
    // Add default welcome notification
    state.notifications.unshift({
        id: "nt_welcome_" + Date.now(),
        targetUserId: newUserId,
        senderId: "user_sarah",
        type: "follow",
        text: "welcomed you to Y Chat! Start sharing posts and messaging.",
        timestamp: "Just now",
        unread: true
    });
    
    // Init unread DM tracker for this user
    if (!state.unreadDMs[newUserId]) {
        state.unreadDMs[newUserId] = {};
    }
    
    saveState();
    
    // Clear Form & Close
    document.getElementById("new-profile-form").reset();
    closeModal('custom-profile-modal');
    
    // Auto switch to new user
    selectActiveUser(newUserId);
}

// ==========================================
// Routing Tabs
// ==========================================

function switchTab(tabId) {
    currentTab = tabId;
    
    // Update active nav items
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    
    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) activeNav.classList.add("active");
    
    // Toggle active display
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    
    // Notifications special: Read all unread
    if (tabId === "notifications") {
        document.getElementById("notifications-section").classList.add("active");
        state.notifications.forEach(nt => {
            if (nt.targetUserId === state.activeUserId) {
                nt.unread = false;
            }
        });
        saveState();
        updateBadges();
        renderNotifications();
    } else {
        const sec = document.getElementById(`${tabId}-section`);
        if (sec) sec.classList.add("active");
    }
}

function updateBadges() {
    // Unread Notifications count
    const unreadNotifCount = state.notifications.filter(nt => nt.targetUserId === state.activeUserId && nt.unread).length;
    const notifBadge = document.getElementById("notif-badge");
    if (unreadNotifCount > 0) {
        notifBadge.textContent = unreadNotifCount;
        notifBadge.style.display = "block";
    } else {
        notifBadge.style.display = "none";
    }
    
    // Unread Direct Message counts across ALL threads for active user
    let unreadDMTotals = 0;
    const userUnreads = state.unreadDMs[state.activeUserId] || {};
    Object.values(userUnreads).forEach(count => {
        unreadDMTotals += count;
    });
    
    const dmBadge = document.getElementById("dm-total-badge");
    if (unreadDMTotals > 0) {
        dmBadge.textContent = unreadDMTotals;
        dmBadge.style.display = "block";
    } else {
        dmBadge.style.display = "none";
    }
}

// ==========================================
// Stories Tray
// ==========================================

function renderStories() {
    const container = document.getElementById("stories-carousel");
    container.innerHTML = "";
    
    // Add "My Story" plus button card
    const myProfile = state.users[state.activeUserId];
    const myStoryCard = document.createElement("div");
    myStoryCard.className = "story-card";
    myStoryCard.onclick = () => alert("Visual stories uploaded by users display here. Make a feed post to share larger content!");
    myStoryCard.innerHTML = `
        <div class="story-ring" style="background: rgba(255, 255, 255, 0.1);">
            <img src="${myProfile.avatar}" alt="My Avatar" class="story-avatar" style="opacity: 0.65;">
        </div>
        <span class="story-name">Add Story</span>
    `;
    container.appendChild(myStoryCard);
    
    // Populate existing
    state.stories.forEach(st => {
        const author = state.users[st.authorId];
        if (!author || st.authorId === state.activeUserId) return;
        
        const card = document.createElement("div");
        card.className = "story-card";
        card.onclick = () => {
            alert(`Viewing ${author.displayName}'s story! Visual story cards are interactive.`);
        };
        card.innerHTML = `
            <div class="story-ring" style="background: ${st.active ? 'var(--brand-gradient)' : 'rgba(255, 255, 255, 0.1)'}">
                <img src="${author.avatar}" alt="${author.displayName}" class="story-avatar">
            </div>
            <span class="story-name">${author.displayName.split(' ')[0]}</span>
        `;
        container.appendChild(card);
    });
}

// ==========================================
// Composer Attachments Grid
// ==========================================

function renderComposerPresets() {
    const grid = document.getElementById("composer-image-options");
    grid.innerHTML = "";
    
    COMPOSER_PRESET_IMAGES.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.className = "grid-image-item";
        img.onclick = () => selectSocialAttachment(url, img);
        grid.appendChild(img);
    });
}

function toggleComposerAttachmentGrid() {
    const grid = document.getElementById("composer-image-options");
    grid.classList.toggle("visible");
}

function selectSocialAttachment(url, element) {
    document.querySelectorAll(".grid-image-item").forEach(el => el.classList.remove("selected"));
    
    if (activeSocialAttachment === url) {
        // Toggle cancel
        activeSocialAttachment = null;
        document.getElementById("composer-preview-container").style.display = "none";
    } else {
        activeSocialAttachment = url;
        element.classList.add("selected");
        
        const preview = document.getElementById("composer-preview-img");
        preview.src = url;
        document.getElementById("composer-preview-container").style.display = "block";
    }
}

function clearComposerAttachment() {
    activeSocialAttachment = null;
    document.getElementById("composer-preview-container").style.display = "none";
    document.querySelectorAll(".grid-image-item").forEach(el => el.classList.remove("selected"));
}

function addTextEmoji() {
    const textComposer = document.getElementById("composer-input");
    const emojis = ["✨", "🚀", "🎨", "👾", "💻", "🔥", "📸", "🗼", "🤖"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    textComposer.value += randomEmoji;
}

// ==========================================
// Feed Posts Logic
// ==========================================

function submitPost() {
    const textarea = document.getElementById("composer-input");
    const content = textarea.value.trim();
    
    if (!content && !activeSocialAttachment) {
        alert("Please write something or attach a beautiful illustration!");
        return;
    }
    
    const newPost = {
        id: "post_" + Date.now(),
        authorId: state.activeUserId,
        content: content,
        image: activeSocialAttachment || null,
        timestamp: "Just now",
        likes: [],
        comments: []
    };
    
    state.posts.unshift(newPost);
    saveState();
    
    // Clear
    textarea.value = "";
    clearComposerAttachment();
    document.getElementById("composer-image-options").classList.remove("visible");
    
    // Refresh GUI
    renderFeed();
}

function renderFeed() {
    const list = document.getElementById("feed-posts-list");
    list.innerHTML = "";
    
    if (state.posts.length === 0) {
        list.innerHTML = `<div class="post-card" style="text-align:center; color: var(--text-secondary)">No posts to show. Share the first vibe!</div>`;
        return;
    }
    
    state.posts.forEach(post => {
        const author = state.users[post.authorId];
        if (!author) return;
        
        const hasLiked = post.likes.includes(state.activeUserId);
        const card = document.createElement("div");
        card.className = "post-card";
        card.id = `card_${post.id}`;
        
        let imageMarkup = "";
        if (post.image) {
            imageMarkup = `
                <div class="post-image-container">
                    <img src="${post.image}" alt="Post attachment image" class="post-image">
                </div>
            `;
        }
        
        // Comment markup builder
        let commentsMarkup = "";
        post.comments.forEach(comment => {
            const commentAuthor = state.users[comment.authorId];
            if (!commentAuthor) return;
            commentsMarkup += `
                <div class="comment-item">
                    <img src="${commentAuthor.avatar}" alt="${commentAuthor.displayName}" class="comment-avatar">
                    <div class="comment-bubble">
                        <div class="comment-user-name">${commentAuthor.displayName}</div>
                        <div class="comment-text">${comment.content}</div>
                    </div>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div class="post-header">
                <div class="post-author" onclick="viewUserProfile('${author.id}')">
                    <img src="${author.avatar}" alt="${author.displayName}" class="post-avatar">
                    <div class="post-meta">
                        <span class="post-author-name">${author.displayName}</span>
                        <span class="post-time">${post.timestamp}</span>
                    </div>
                </div>
                ${author.id !== state.activeUserId ? `
                    <button class="follow-btn ${state.users[state.activeUserId].following.includes(author.id) ? 'following' : ''}" onclick="toggleFollowUser('${author.id}')">
                        ${state.users[state.activeUserId].following.includes(author.id) ? 'Following' : 'Follow'}
                    </button>
                ` : ''}
            </div>
            
            <div class="post-content">${post.content}</div>
            
            ${imageMarkup}
            
            <div class="post-footer">
                <button class="action-btn ${hasLiked ? 'liked' : ''}" onclick="toggleLikePost('${post.id}')">
                    <i class="${hasLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    <span>${post.likes.length} Likes</span>
                </button>
                <button class="action-btn" onclick="toggleCommentsExpansion('${post.id}')">
                    <i class="fa-regular fa-comment"></i>
                    <span>${post.comments.length} Comments</span>
                </button>
            </div>
            
            <!-- Comment Section expanded wrapper -->
            <div class="comments-section" id="comment-wrapper-${post.id}">
                <div class="comments-list" id="comment-list-${post.id}">
                    ${commentsMarkup}
                </div>
                
                <div class="comment-composer">
                    <img src="${state.users[state.activeUserId].avatar}" class="comment-avatar" style="width: 28px; height: 28px;">
                    <div class="comment-input-wrapper">
                        <input type="text" class="comment-input" id="comment-input-${post.id}" placeholder="Write a comment on this post..." onkeypress="handleCommentEnter(event, '${post.id}')">
                        <button class="comment-submit-btn" onclick="submitComment('${post.id}')">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

function toggleLikePost(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;
    
    const userIndex = post.likes.indexOf(state.activeUserId);
    if (userIndex > -1) {
        // Unlike
        post.likes.splice(userIndex, 1);
    } else {
        // Like
        post.likes.push(state.activeUserId);
        
        // Push notification to target user if not active user themselves
        if (post.authorId !== state.activeUserId) {
            state.notifications.unshift({
                id: "nt_" + Date.now(),
                targetUserId: post.authorId,
                senderId: state.activeUserId,
                type: "like",
                text: "liked your post.",
                timestamp: "Just now",
                unread: true
            });
        }
    }
    
    saveState();
    refreshGUI();
}

function toggleCommentsExpansion(postId) {
    const el = document.getElementById(`comment-wrapper-${postId}`);
    if (el) {
        el.classList.toggle("expanded");
    }
}

function handleCommentEnter(e, postId) {
    if (e.key === "Enter") {
        submitComment(postId);
    }
}

function submitComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    if (!text) return;
    
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;
    
    post.comments.push({
        id: "c_" + Date.now(),
        authorId: state.activeUserId,
        content: text,
        timestamp: "Just now"
    });
    
    // Add Notification to post author if not active user
    if (post.authorId !== state.activeUserId) {
        state.notifications.unshift({
            id: "nt_" + Date.now(),
            targetUserId: post.authorId,
            senderId: state.activeUserId,
            type: "comment",
            text: `commented: "${text.substring(0, 20)}${text.length > 20 ? '...' : ''}"`,
            timestamp: "Just now",
            unread: true
        });
    }
    
    saveState();
    
    input.value = "";
    refreshGUI();
    
    // Keep expanded open
    document.getElementById(`comment-wrapper-${postId}`).classList.add("expanded");
}

// ==========================================
// Follow / Unfollow Connections
// ==========================================

function toggleFollowUser(userId) {
    const me = state.users[state.activeUserId];
    const target = state.users[userId];
    if (!me || !target) return;
    
    const followingIdx = me.following.indexOf(userId);
    if (followingIdx > -1) {
        // Unfollow
        me.following.splice(followingIdx, 1);
        const followerIdx = target.followers.indexOf(state.activeUserId);
        if (followerIdx > -1) target.followers.splice(followerIdx, 1);
    } else {
        // Follow
        me.following.push(userId);
        target.followers.push(state.activeUserId);
        
        // Push notification
        state.notifications.unshift({
            id: "nt_follow_" + Date.now(),
            targetUserId: userId,
            senderId: state.activeUserId,
            type: "follow",
            text: "started following you.",
            timestamp: "Just now",
            unread: true
        });
    }
    
    saveState();
    refreshGUI();
}

// ==========================================
// Right Suggestions & Explore Listing
// ==========================================

function renderRightSuggestions() {
    const list = document.getElementById("sidebar-suggestions");
    list.innerHTML = "";
    
    const activeUser = state.users[state.activeUserId];
    
    const unfollowedUsers = Object.values(state.users).filter(u => {
        return u.id !== state.activeUserId && !activeUser.following.includes(u.id);
    });
    
    if (unfollowedUsers.length === 0) {
        list.innerHTML = `<div style="font-size:0.75rem; color:var(--text-muted)">Following everyone! Search in Explore section.</div>`;
        return;
    }
    
    // Take top 3
    unfollowedUsers.slice(0, 3).forEach(user => {
        const card = document.createElement("div");
        card.className = "suggestion-card";
        card.innerHTML = `
            <div class="suggestion-info" onclick="viewUserProfile('${user.id}')">
                <img src="${user.avatar}" alt="${user.displayName}" class="avatar" style="width: 34px; height: 34px;">
                <div class="suggestion-name-wrapper">
                    <span class="suggestion-name">${user.displayName}</span>
                    <span class="suggestion-handle">@${user.username}</span>
                </div>
            </div>
            <button class="follow-btn" onclick="toggleFollowUser('${user.id}')" style="padding: 4px 10px; font-size: 0.7rem;">Follow</button>
        `;
        list.appendChild(card);
    });
}

function renderExploreGrid(filterQuery = "") {
    const grid = document.getElementById("explore-cards-container");
    grid.innerHTML = "";
    
    const query = filterQuery.toLowerCase();
    
    Object.values(state.users).forEach(user => {
        if (user.id === state.activeUserId) return;
        
        // Search filter matching
        if (query && !user.displayName.toLowerCase().includes(query) && !user.username.toLowerCase().includes(query) && !user.bio.toLowerCase().includes(query)) {
            return;
        }
        
        const following = state.users[state.activeUserId].following.includes(user.id);
        const card = document.createElement("div");
        card.className = "user-explore-card";
        
        // Number of posts by this user
        const userPostsCount = state.posts.filter(p => p.authorId === user.id).length;
        
        card.innerHTML = `
            <img src="${user.avatar}" alt="${user.displayName}" class="explore-avatar">
            <div>
                <div class="explore-name">${user.displayName}</div>
                <div class="explore-handle">@${user.username}</div>
            </div>
            <div class="explore-bio">${user.bio}</div>
            
            <div class="explore-stats">
                <div><span class="explore-stat-val">${userPostsCount}</span> posts</div>
                <div><span class="explore-stat-val">${user.followers.length}</span> followers</div>
            </div>
            
            <div style="display: flex; gap: 8px; width:100%; margin-top: auto;">
                <button class="follow-btn ${following ? 'following' : ''}" onclick="toggleFollowUser('${user.id}')" style="flex:1;">
                    ${following ? 'Following' : 'Follow'}
                </button>
                <button class="follow-btn" onclick="directMessageUser('${user.id}')" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleSearch(val) {
    if (currentTab === "feed") {
        // Filter right sidebar
    }
}

// ==========================================
// Notifications
// ==========================================

function renderNotifications() {
    const container = document.getElementById("notifications-container");
    container.innerHTML = "";
    
    const myNotifs = state.notifications.filter(nt => nt.targetUserId === state.activeUserId);
    
    if (myNotifs.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 3rem 0; color: var(--text-muted); font-size: 0.9rem;">
            <i class="fa-regular fa-bell-slash" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-muted); display: block;"></i>
            Inbox clean! No new notifications.
        </div>`;
        return;
    }
    
    myNotifs.forEach(nt => {
        const sender = state.users[nt.senderId];
        if (!sender) return;
        
        let iconHtml = "";
        if (nt.type === "like") iconHtml = `<i class="fa-solid fa-heart" style="color: var(--accent-secondary);"></i>`;
        else if (nt.type === "comment") iconHtml = `<i class="fa-solid fa-comment" style="color: var(--accent-tertiary);"></i>`;
        else if (nt.type === "follow") iconHtml = `<i class="fa-solid fa-user-plus" style="color: #00F2FE;"></i>`;
        
        const item = document.createElement("div");
        item.className = `notification-item ${nt.unread ? 'unread' : ''}`;
        item.innerHTML = `
            <div class="notification-icon">${iconHtml}</div>
            <img src="${sender.avatar}" alt="${sender.displayName}" class="avatar" style="width: 38px; height: 38px;">
            <div class="notification-content">
                <div class="notification-text"><strong>${sender.displayName}</strong> ${nt.text}</div>
                <div class="notification-time">${nt.timestamp}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

function clearAllNotifications() {
    state.notifications = state.notifications.filter(nt => nt.targetUserId !== state.activeUserId);
    saveState();
    refreshGUI();
}

// ==========================================
// User Profile Views
// ==========================================

function renderProfileView() {
    const user = state.users[state.activeUserId];
    if (!user) return;
    
    document.getElementById("profile-view-avatar").src = user.avatar;
    document.getElementById("profile-view-dname").textContent = user.displayName;
    document.getElementById("profile-view-handle").textContent = `@${user.username}`;
    document.getElementById("profile-view-bio").textContent = user.bio;
    
    // Dynamic Stats
    const postCount = state.posts.filter(p => p.authorId === user.id).length;
    document.getElementById("profile-stat-posts").textContent = postCount;
    document.getElementById("profile-stat-followers").textContent = user.followers.length;
    document.getElementById("profile-stat-following").textContent = user.following.length;
    
    // Load Posts & Likes feed inside profile
    renderProfileTabFeeds();
}

function renderProfileTabFeeds() {
    const postsContainer = document.getElementById("profile-tab-posts-container");
    const likesContainer = document.getElementById("profile-tab-likes-container");
    
    postsContainer.innerHTML = "";
    likesContainer.innerHTML = "";
    
    // Own Posts
    const ownPosts = state.posts.filter(p => p.authorId === state.activeUserId);
    if (ownPosts.length === 0) {
        postsContainer.innerHTML = `<div style="text-align:center; padding: 2rem; color: var(--text-secondary)">No feed posts created by you yet. Share something above!</div>`;
    } else {
        renderMiniFeedCards(ownPosts, postsContainer);
    }
    
    // Liked Posts
    const likedPosts = state.posts.filter(p => p.likes.includes(state.activeUserId));
    if (likedPosts.length === 0) {
        likesContainer.innerHTML = `<div style="text-align:center; padding: 2rem; color: var(--text-secondary)">No liked posts. Heart some posts in Home feed!</div>`;
    } else {
        renderMiniFeedCards(likedPosts, likesContainer);
    }
}

function renderMiniFeedCards(postArray, container) {
    postArray.forEach(post => {
        const author = state.users[post.authorId];
        if (!author) return;
        const hasLiked = post.likes.includes(state.activeUserId);
        
        const card = document.createElement("div");
        card.className = "post-card";
        
        let imageMarkup = "";
        if (post.image) {
            imageMarkup = `<div class="post-image-container"><img src="${post.image}" class="post-image" alt="Profile post media"></div>`;
        }
        
        card.innerHTML = `
            <div class="post-header">
                <div class="post-author">
                    <img src="${author.avatar}" alt="${author.displayName}" class="post-avatar">
                    <div class="post-meta">
                        <span class="post-author-name">${author.displayName}</span>
                        <span class="post-time">${post.timestamp}</span>
                    </div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            ${imageMarkup}
            <div class="post-footer" style="border:none; padding-top: 0px;">
                <button class="action-btn ${hasLiked ? 'liked' : ''}" onclick="toggleLikePost('${post.id}')">
                    <i class="fa-solid fa-heart"></i>
                    <span>${post.likes.length}</span>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function switchProfileTab(tab) {
    currentProfileTab = tab;
    
    document.getElementById("profile-tab-posts").classList.remove("active");
    document.getElementById("profile-tab-likes").classList.remove("active");
    
    document.getElementById(`profile-tab-${tab}`).classList.add("active");
    
    if (tab === "posts") {
        document.getElementById("profile-tab-posts-container").style.display = "flex";
        document.getElementById("profile-tab-likes-container").style.display = "none";
    } else {
        document.getElementById("profile-tab-posts-container").style.display = "none";
        document.getElementById("profile-tab-likes-container").style.display = "flex";
    }
}

function viewUserProfile(userId) {
    if (userId === state.activeUserId) {
        switchTab("profile");
    } else {
        switchTab("explore");
        // Scroll explore cards to active user or alert
        renderExploreGrid(state.users[userId].displayName);
    }
}

function openFollowersList() {
    const list = state.users[state.activeUserId].followers.map(fid => state.users[fid]?.displayName || fid).join(", ");
    alert(`Followed by: ${list || 'Nobody yet. Grow your audience!'}`);
}

function openFollowingList() {
    const list = state.users[state.activeUserId].following.map(fid => state.users[fid]?.displayName || fid).join(", ");
    alert(`Following: ${list || 'Nobody yet. Start exploring profiles!'}`);
}

// ==========================================
// DIRECT CHATS ENGINE
// ==========================================

function filterChatList(query) {
    renderChatThreadsList(query);
}

function renderChatThreadsList(searchQuery = "") {
    const container = document.getElementById("chat-threads-list");
    container.innerHTML = "";
    
    const q = searchQuery.toLowerCase();
    
    // Chat threads are other users
    Object.values(state.users).forEach(user => {
        if (user.id === state.activeUserId) return; // Don't chat with self
        
        if (q && !user.displayName.toLowerCase().includes(q) && !user.username.toLowerCase().includes(q)) {
            return;
        }
        
        // Find last message exchange in messages
        const threadMessages = state.messages.filter(msg => {
            return (msg.senderId === state.activeUserId && msg.recipientId === user.id) ||
                   (msg.senderId === user.id && msg.recipientId === state.activeUserId);
        });
        
        // Form last message preview
        let lastMsgText = "No messages yet. Send a wave!";
        let lastMsgTime = "";
        
        if (threadMessages.length > 0) {
            const lastMsg = threadMessages[threadMessages.length - 1];
            if (lastMsg.photo) lastMsgText = "📷 Photo attached";
            else if (lastMsg.file) lastMsgText = `📁 Document: ${lastMsg.file.name}`;
            else if (lastMsg.audio) lastMsgText = "🎙️ Voice note (0:24)";
            else lastMsgText = lastMsg.text || "";
            
            lastMsgTime = lastMsg.timestamp.replace("Yesterday,", "").replace("Today,", "").trim();
        }
        
        // Unread badge for this thread
        const unreadsObj = state.unreadDMs[state.activeUserId] || {};
        const unreadCount = unreadsObj[user.id] || 0;
        
        const threadItem = document.createElement("div");
        threadItem.className = `chat-thread-item ${activeChatUserId === user.id ? 'active' : ''}`;
        threadItem.onclick = () => openChatThread(user.id);
        
        threadItem.innerHTML = `
            <div class="thread-avatar-wrapper">
                <img src="${user.avatar}" alt="${user.displayName}" class="thread-avatar">
                <div class="thread-status ${user.online ? 'online' : 'offline'}"></div>
            </div>
            <div class="thread-details">
                <div class="thread-name-row">
                    <span class="thread-name">${user.displayName}</span>
                    <span class="thread-time">${lastMsgTime}</span>
                </div>
                <div class="thread-message-row">
                    <span class="thread-last-msg">${lastMsgText}</span>
                    ${unreadCount > 0 ? `<span class="thread-unread-badge">${unreadCount}</span>` : ''}
                </div>
            </div>
        `;
        container.appendChild(threadItem);
    });
}

function directMessageUser(userId) {
    switchTab("chat");
    openChatThread(userId);
}

function openChatThread(otherUserId) {
    activeChatUserId = otherUserId;
    
    // Clear unreads for this thread
    if (!state.unreadDMs[state.activeUserId]) state.unreadDMs[state.activeUserId] = {};
    state.unreadDMs[state.activeUserId][otherUserId] = 0;
    saveState();
    updateBadges();
    
    // Hide placeholder, display chat box
    document.getElementById("chat-placeholder").style.display = "none";
    document.getElementById("chat-active-box").style.display = "flex";
    
    // Header Info
    const otherUser = state.users[otherUserId];
    document.getElementById("chat-header-avatar").src = otherUser.avatar;
    document.getElementById("chat-header-dname").textContent = otherUser.displayName;
    
    const statusLbl = document.getElementById("chat-header-status-lbl");
    statusLbl.textContent = otherUser.online ? "Online" : "Offline";
    statusLbl.className = `chat-header-status ${otherUser.online ? '' : 'offline'}`;
    
    // Render Chat Messages
    renderActiveChatWindow();
    
    // Re-render thread list to clear the unread badge visually
    renderChatThreadsList();
}

function renderActiveChatWindow() {
    if (!activeChatUserId) return;
    const container = document.getElementById("chat-messages-container");
    container.innerHTML = "";
    
    // Filter messages between active user and other chat contact
    const chatMsgs = state.messages.filter(msg => {
        return (msg.senderId === state.activeUserId && msg.recipientId === activeChatUserId) ||
               (msg.senderId === activeChatUserId && msg.recipientId === state.activeUserId);
    });
    
    if (chatMsgs.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 2rem; color:var(--text-muted); font-size: 0.8rem;">
            No messages here. Type a message or attach a file below to start chatting!
        </div>`;
        return;
    }
    
    chatMsgs.forEach(msg => {
        const isSent = msg.senderId === state.activeUserId;
        const bubbleWrapper = document.createElement("div");
        bubbleWrapper.className = `message-bubble-wrapper ${isSent ? 'sent' : 'received'}`;
        
        let attachmentMarkup = "";
        
        // 1. Photo attachment message style
        if (msg.photo) {
            attachmentMarkup = `
                <div class="msg-photo-attachment">
                    <img src="${msg.photo}" alt="Chat Photo attachment" onclick="window.open('${msg.photo}', '_blank')">
                </div>
            `;
        }
        
        // 2. Document file message style
        if (msg.file) {
            attachmentMarkup = `
                <div class="msg-file-attachment" onclick="alert('Downloading simulated document: ${msg.file.name} (${msg.file.size})')">
                    <div class="file-icon-box">
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                    <div class="file-meta">
                        <span class="file-name">${msg.file.name}</span>
                        <span class="file-size">${msg.file.size}</span>
                    </div>
                    <i class="fa-solid fa-circle-down file-download-btn"></i>
                </div>
            `;
        }
        
        // 3. Audio Voice note message style
        if (msg.audio) {
            // Generate visual bars for the waveform
            let waveformBars = "";
            for (let i = 0; i < 16; i++) {
                waveformBars += `<div class="waveform-bar"></div>`;
            }
            attachmentMarkup = `
                <div class="msg-audio-attachment">
                    <button class="audio-play-btn" onclick="playVoiceNote(this)">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <div class="audio-waveform">
                        ${waveformBars}
                    </div>
                    <span class="audio-duration">${msg.audio.duration}</span>
                </div>
            `;
        }
        
        let textMarkup = msg.text ? `<div>${msg.text}</div>` : "";
        
        bubbleWrapper.innerHTML = `
            ${attachmentMarkup}
            ${msg.text ? `<div class="message-bubble">${textMarkup}</div>` : ''}
            <span class="message-timestamp">${msg.timestamp}</span>
        `;
        container.appendChild(bubbleWrapper);
    });
    
    // Auto Scroll to Bottom
    setTimeout(() => {
        container.scrollTop = container.scrollHeight;
    }, 100);
}

// Audio Animation trigger
function playVoiceNote(button) {
    const container = button.closest('.msg-audio-attachment');
    const bars = container.querySelectorAll('.waveform-bar');
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('fa-play')) {
        // Play
        icon.className = 'fa-solid fa-pause';
        bars.forEach(bar => bar.classList.add('active'));
        
        // Audio auto end simulation
        setTimeout(() => {
            icon.className = 'fa-solid fa-play';
            bars.forEach(bar => bar.classList.remove('active'));
        }, 4000);
    } else {
        // Pause
        icon.className = 'fa-solid fa-play';
        bars.forEach(bar => bar.classList.remove('active'));
    }
}

// ==========================================
// Select Message Attachments
// ==========================================

function toggleAttachmentMenu() {
    document.getElementById("chat-attachment-menu").classList.toggle("visible");
}

function selectChatAttachment(type) {
    toggleAttachmentMenu(); // Hide menu
    
    const previewPanel = document.getElementById("chat-attachment-preview");
    const thumb = document.getElementById("chat-attachment-thumb");
    const fileIconBox = document.getElementById("chat-attachment-icon-box");
    const filenameLabel = document.getElementById("chat-attachment-filename");
    
    activeChatAttachment = { type: type };
    
    if (type === "photo") {
        activeChatAttachment.url = "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80";
        thumb.src = activeChatAttachment.url;
        thumb.style.display = "block";
        fileIconBox.style.display = "none";
        filenameLabel.textContent = "Photo_Attachment.jpg";
    } else if (type === "file") {
        activeChatAttachment.file = { name: "Project-Wireframe-Grid.pdf", size: "1.8 MB", type: "pdf" };
        thumb.style.display = "none";
        fileIconBox.style.display = "flex";
        fileIconBox.innerHTML = '<i class="fa-solid fa-file-pdf"></i>';
        filenameLabel.textContent = activeChatAttachment.file.name;
    } else if (type === "audio") {
        activeChatAttachment.audio = { duration: "0:45" };
        thumb.style.display = "none";
        fileIconBox.style.display = "flex";
        fileIconBox.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        filenameLabel.textContent = "Voice_Note_045.mp3";
    }
    
    previewPanel.style.display = "flex";
}

function clearChatAttachment() {
    activeChatAttachment = null;
    document.getElementById("chat-attachment-preview").style.display = "none";
}

// ==========================================
// Sending Direct Messages
// ==========================================

function handleChatEnter(e) {
    if (e.key === "Enter") {
        submitChatMessage();
    }
}

function submitChatMessage() {
    const input = document.getElementById("chat-input-box");
    const messageText = input.value.trim();
    
    if (!messageText && !activeChatAttachment) return;
    
    const newMsg = {
        id: "msg_" + Date.now(),
        senderId: state.activeUserId,
        recipientId: activeChatUserId,
        timestamp: "Just now"
    };
    
    if (messageText) newMsg.text = messageText;
    
    if (activeChatAttachment) {
        if (activeChatAttachment.type === "photo") newMsg.photo = activeChatAttachment.url;
        else if (activeChatAttachment.type === "file") newMsg.file = activeChatAttachment.file;
        else if (activeChatAttachment.type === "audio") newMsg.audio = activeChatAttachment.audio;
    }
    
    state.messages.push(newMsg);
    saveState();
    
    // Clear Input and Preview
    input.value = "";
    clearChatAttachment();
    
    // Rerender active window & threads
    renderActiveChatWindow();
    renderChatThreadsList();
    
    // Auto reply simulation after 1.5 seconds for engaging conversation!
    const replyContactId = activeChatUserId;
    setTimeout(() => {
        triggerMockAutoReply(replyContactId, state.activeUserId);
    }, 1500);
}

function triggerMockAutoReply(senderId, recipientId) {
    // Only send auto reply if active chat thread hasn't changed
    const replies = [
        "Received! That looks absolutely beautiful and fits our dark mode grid.",
        "Perfect! Just checked the details you shared.",
        "Could you send me the source vector file too? Thanks!",
        { type: "audio", audio: { duration: "0:12" } },
        { type: "photo", photo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80", text: "Here is what my dashboard screen displays now!" },
        { type: "file", file: { name: "Feed-Design-Feedback.pdf", size: "840 KB", type: "pdf" }, text: "Got it! Check out my feedback file." }
    ];
    
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    const replyMsg = {
        id: "msg_reply_" + Date.now(),
        senderId: senderId,
        recipientId: recipientId,
        timestamp: "Just now"
    };
    
    if (typeof randomReply === "string") {
        replyMsg.text = randomReply;
    } else {
        if (randomReply.text) replyMsg.text = randomReply.text;
        if (randomReply.type === "photo") replyMsg.photo = randomReply.photo;
        if (randomReply.type === "file") replyMsg.file = randomReply.file;
        if (randomReply.type === "audio") replyMsg.audio = randomReply.audio;
    }
    
    state.messages.push(replyMsg);
    
    // Add unread tracker increment if receiver is active user
    if (recipientId === state.activeUserId) {
        if (!state.unreadDMs[recipientId]) state.unreadDMs[recipientId] = {};
        
        // If thread is active, don't increment unread counts
        if (activeChatUserId !== senderId) {
            state.unreadDMs[recipientId][senderId] = (state.unreadDMs[recipientId][senderId] || 0) + 1;
        }
    }
    
    saveState();
    updateBadges();
    
    // Re-render
    if (activeChatUserId === senderId) {
        renderActiveChatWindow();
    }
    renderChatThreadsList();
}

// Window Event Listeners click-outs
window.onclick = function(event) {
    const dropdown = document.getElementById("chat-attachment-menu");
    const trigger = document.getElementById("chat-attachment-trigger");
    if (dropdown && dropdown.classList.contains("visible")) {
        if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("visible");
        }
    }
};

// Start
window.onload = initApp;
