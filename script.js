// 页面切换功能
function showPage(pageId) {
  // 隐藏所有页面
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // 显示选定的页面
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // 更新导航栏活动状态
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  
  const activeNavItem = document.querySelector(`.nav-item[onclick="showPage('${pageId}')"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
  // 设置默认页面
  showPage('profile');
  
  // 添加页面内导航事件
  setupInPageNavigation();
  
  // 添加交互效果
  setupInteractions();
});

// 页面内导航
function setupInPageNavigation() {
  // 个人资料页面到学习页面
  const learnMenuItem = document.querySelector('.menu-item:nth-child(1)');
  if (learnMenuItem) {
    learnMenuItem.addEventListener('click', function() {
      showPage('learn');
    });
  }
  
  // 学习页面到学习进度页面
  const slangHeader = document.querySelector('.slang-header');
  if (slangHeader) {
    slangHeader.addEventListener('click', function() {
      document.getElementById('learn-page').classList.remove('active');
      document.getElementById('learning-progress-page').classList.add('active');
    });
  }
  
  // 学习进度页面返回
  const learningBackButton = document.querySelector('#learning-progress-page .back-button');
  if (learningBackButton) {
    learningBackButton.addEventListener('click', function() {
      document.getElementById('learning-progress-page').classList.remove('active');
      document.getElementById('learn-page').classList.add('active');
    });
  }
  
  // 学习页面返回
  const learnBackButton = document.querySelector('#learn-page .back-button');
  if (learnBackButton) {
    learnBackButton.addEventListener('click', function() {
      showPage('profile');
    });
  }
  
  // 挑战页面到题目页面
  const levelButtons = document.querySelectorAll('.level-button');
  levelButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (!this.parentElement.classList.contains('locked')) {
        document.getElementById('challenge-page').classList.remove('active');
        document.getElementById('quiz-page').classList.add('active');
      }
    });
  });
  
  // 题目页面返回
  const quizBackButton = document.querySelector('#quiz-page .back-button');
  if (quizBackButton) {
    quizBackButton.addEventListener('click', function() {
      document.getElementById('quiz-page').classList.remove('active');
      document.getElementById('challenge-page').classList.add('active');
    });
  }
  
  // 继续学习按钮
  const continueBtn = document.querySelector('.continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', function() {
      showPage('challenge');
    });
  }
  
  // 下一关按钮
  const nextLevelBtn = document.querySelector('.next-level-btn');
  if (nextLevelBtn) {
    nextLevelBtn.addEventListener('click', function() {
      showPage('challenge');
    });
  }
  
  // 开始练习按钮
  const practiceBtn = document.querySelector('.practice-btn');
  if (practiceBtn) {
    practiceBtn.addEventListener('click', function() {
      alert('开始练习对话！这里将会打开一个AI对话练习界面。');
    });
  }
}

// 交互效果
function setupInteractions() {
  // 攻击按钮效果
  const attackButton = document.querySelector('.attack-button');
  if (attackButton) {
    attackButton.addEventListener('click', function() {
      // 添加攻击动画
      this.classList.add('attacking');
      
      // 减少对手血量
      const opponentHealth = document.querySelector('.character-card.opponent .health-fill');
      if (opponentHealth) {
        opponentHealth.style.width = '30%';
      }
      
      // 移除动画类
      setTimeout(() => {
        this.classList.remove('attacking');
      }, 500);
      
      // 显示胜利消息
      setTimeout(() => {
        alert('恭喜你赢得了这场挑战！');
      }, 1000);
    });
  }
  
  // 更换头像按钮
  const changeAvatarBtn = document.querySelector('.change-avatar-btn');
  if (changeAvatarBtn) {
    changeAvatarBtn.addEventListener('click', function() {
      alert('你可以在这里选择新的头像！');
    });
  }
  
  // 添加到收藏按钮
  const collectionBtn = document.querySelector('.collection-btn');
  if (collectionBtn) {
    collectionBtn.addEventListener('click', function() {
      this.textContent = '已添加到收藏';
      this.style.backgroundColor = '#4CAF50';
      this.style.color = 'white';
      this.style.border = 'none';
    });
  }
  
  // 分享按钮
  const shareBtn = document.querySelector('.share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      alert('分享这个俚语到社交媒体！');
    });
  }
  
  // 评分星星
  const stars = document.querySelectorAll('.stars i');
  stars.forEach((star, index) => {
    star.addEventListener('click', function() {
      // 重置所有星星
      stars.forEach(s => s.className = 'far fa-star');
      
      // 设置点击的星星及之前的星星
      for (let i = 0; i <= index; i++) {
        stars[i].className = 'fas fa-star';
      }
    });
  });
  
  // 使用道具按钮
  const propsBtn = document.querySelector('.props-btn');
  if (propsBtn) {
    propsBtn.addEventListener('click', function() {
      alert('使用道具增加攻击力！');
      this.textContent = '已使用道具';
      this.disabled = true;
    });
  }
  
  // 添加到错题本
  const noteButton = document.querySelector('.note-button');
  if (noteButton) {
    noteButton.addEventListener('click', function() {
      this.innerHTML = '<i class="fas fa-star"></i><span>已加入错题本</span>';
      this.style.color = '#4CAF50';
    });
  }
  
  // 选择题选项
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', function() {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
    });
  });
}

// 添加CSS动画
document.addEventListener('DOMContentLoaded', function() {
  // 为攻击按钮添加动画样式
  const style = document.createElement('style');
  style.textContent = `
    .attacking {
      animation: pulse 0.5s ease-in-out;
      transform: scale(1.1);
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    
    .avatar-frame {
      animation: glow 2s infinite alternate;
    }
    
    @keyframes glow {
      from { opacity: 0.5; }
      to { opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
});