// 当前状态
let currentType = 'heatpump';
let currentFilter = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderFaultCards();
    initEventListeners();
});

// 初始化事件监听
function initEventListeners() {
    // 标签切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.type;
            switchType(type);
        });
    });

    // 筛选标签
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setFilter(filter);
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        filterFaults(query);
    });

    // 键盘ESC关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 切换机组类型
function switchType(type) {
    currentType = type;

    // 更新标签样式
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        }
    });

    // 重置筛选和搜索
    currentFilter = 'all';
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.filter === 'all') {
            tag.classList.add('active');
        }
    });
    document.getElementById('searchInput').value = '';

    // 重新渲染卡片
    renderFaultCards();
}

// 设置筛选条件
function setFilter(filter) {
    currentFilter = filter;

    // 更新筛选标签样式
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.filter === filter) {
            tag.classList.add('active');
        }
    });

    // 应用筛选
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    filterFaults(query);
}

// 渲染故障卡片
function renderFaultCards() {
    const faultGrid = document.getElementById('faultGrid');
    const faults = faultData[currentType] || [];

    if (faults.length === 0) {
        faultGrid.innerHTML = '<div class="no-results"><p>该机组类型暂无故障数据</p></div>';
        return;
    }

    faultGrid.innerHTML = faults.map(fault => createFaultCard(fault)).join('');
}

// 创建故障卡片HTML
function createFaultCard(fault) {
    const severityText = {
        'critical': '紧急',
        'warning': '警告',
        'sensor': '传感器'
    };

    return `
        <div class="fault-card ${fault.category}"
             data-code="${fault.code}"
             data-category="${fault.category}"
             onclick="showFaultDetail('${fault.code}')">
            <div class="fault-card-header">
                <div class="fault-code">${fault.code}</div>
                <span class="severity-badge ${fault.category}">${severityText[fault.category]}</span>
            </div>
            <h3 class="fault-title">${fault.title}</h3>
            <p class="fault-description">${fault.description}</p>
        </div>
    `;
}

// 筛选故障
function filterFaults(query) {
    const cards = document.querySelectorAll('.fault-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const code = card.dataset.code.toLowerCase();
        const category = card.dataset.category;
        const title = card.querySelector('.fault-title').textContent.toLowerCase();
        const description = card.querySelector('.fault-description').textContent.toLowerCase();

        // 搜索匹配
        const searchMatch = !query ||
                          code.includes(query) ||
                          title.includes(query) ||
                          description.includes(query);

        // 筛选匹配
        const filterMatch = currentFilter === 'all' || category === currentFilter;

        // 显示/隐藏
        if (searchMatch && filterMatch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // 显示/隐藏无结果提示
    const noResults = document.getElementById('noResults');
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

// 显示故障详情
function showFaultDetail(code) {
    const faults = faultData[currentType] || [];
    const fault = faults.find(f => f.code === code);

    if (!fault) return;

    // 填充弹窗内容
    document.getElementById('modalFaultCode').textContent = fault.code;
    document.getElementById('modalFaultTitle').textContent = fault.title;
    document.getElementById('modalFaultDescription').textContent = fault.description;

    // 填充可能原因
    const causesContainer = document.getElementById('modalFaultCauses');
    causesContainer.innerHTML = fault.causes.map(cause => `<li>${cause}</li>`).join('');

    // 填充解决办法
    const solutionsContainer = document.getElementById('modalFaultSolutions');
    solutionsContainer.innerHTML = fault.solutions.map((solution, index) => `
        <div class="solution-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <strong>${solution.step}</strong>
                <div>${solution.detail}</div>
            </div>
        </div>
    `).join('');

    // 填充预防措施
    const preventionContainer = document.getElementById('modalFaultPrevention');
    preventionContainer.innerHTML = fault.prevention.map(measure => `<li>${measure}</li>`).join('');

    // 显示弹窗
    document.getElementById('faultModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭弹窗
function closeModal() {
    document.getElementById('faultModal').classList.remove('active');
    document.body.style.overflow = ''; // 恢复滚动
}

// 点击弹窗外部关闭
document.querySelector('.modal-overlay').addEventListener('click', closeModal);
