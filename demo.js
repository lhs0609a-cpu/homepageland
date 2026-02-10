/**
 * 플라톤마케팅 멀티버전 홈페이지 데모
 * Version Switcher Logic
 */

const VERSION_PRESETS = [
    {
        id: 'trust',
        name: '신뢰형',
        description: '신뢰와 전문성 강조',
        conversionRate: '3.2%',
        recommended: false,
        colors: {
            primary: '#2563eb',
            primaryDark: '#1d4ed8',
            primaryLight: '#3b82f6',
            primaryBg: '#eff6ff',
            accent: '#06b6d4',
            gradientPrimary: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
            gradientHero: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
            shadowGlow: '0 0 40px rgba(37, 99, 235, 0.3)'
        },
        hero: {
            badge: '20년 경력, 170개 병원 검증',
            badgeIcon: 'fas fa-shield-alt',
            highlightLine: '170개 병의원이 선택한 이유',
            mainLine: '<span class="gradient-text">검증된 전문성</span>이 만드는 차이',
            subtitle: '4년간 병의원만 전문으로, 170개 이상의 성공 사례.<br><strong>94%가 3년 이상 장기계약</strong>을 유지하는 이유가 있습니다.<br><br><span class="hero-sub-highlight">"신뢰는 숫자로 증명됩니다"</span>',
            ctaPrimary: '무료 전환율 진단받기',
            ctaSecondary: '170개 성공 사례 보기',
            trustItems: ['170+ 병의원 전문', '94% 장기계약', '4년 무사고']
        },
        cta: {
            urgencyText: '이번 달 무료 진단 혜택',
            formHeader: '무료 진단 + 경쟁병원 분석',
            submitText: '무료 진단 신청하기'
        }
    },
    {
        id: 'fear',
        name: '공포형',
        description: '손실 회피 심리 자극',
        conversionRate: '4.1%',
        recommended: false,
        colors: {
            primary: '#dc2626',
            primaryDark: '#b91c1c',
            primaryLight: '#ef4444',
            primaryBg: '#fef2f2',
            accent: '#1e293b',
            gradientPrimary: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
            gradientHero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            shadowGlow: '0 0 40px rgba(220, 38, 38, 0.3)'
        },
        hero: {
            badge: '긴급 경고: 매달 손실 발생 중',
            badgeIcon: 'fas fa-exclamation-triangle',
            highlightLine: '지금 이 순간에도',
            mainLine: '매달 <span class="gradient-text">156만원</span>이 새고 있습니다',
            subtitle: '광고비 200만원 중 78%가 홈페이지 때문에 증발.<br><strong>연간 1,872만원의 보이지 않는 손실</strong>.<br><br><span class="hero-sub-highlight">"모르면 당하고, 알면 바꿉니다"</span>',
            ctaPrimary: '내 병원 손실액 무료 진단',
            ctaSecondary: '손실 계산기 보기',
            trustItems: ['월 156만원 손실 방지', '이탈률 78% → 22%', '연 1,872만원 절약']
        },
        cta: {
            urgencyText: '경고: 방치할수록 손실 증가',
            formHeader: '내 병원 손실액 즉시 진단',
            submitText: '손실 진단 받기 (무료)'
        }
    },
    {
        id: 'result',
        name: '성과형',
        description: '구체적 성과 숫자 강조',
        conversionRate: '4.8%',
        recommended: true,
        colors: {
            primary: '#059669',
            primaryDark: '#047857',
            primaryLight: '#10b981',
            primaryBg: '#ecfdf5',
            accent: '#d97706',
            gradientPrimary: 'linear-gradient(135deg, #059669 0%, #d97706 100%)',
            gradientHero: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
            shadowGlow: '0 0 40px rgba(5, 150, 105, 0.3)'
        },
        hero: {
            badge: '실제 고객 매출 데이터 공개',
            badgeIcon: 'fas fa-chart-line',
            highlightLine: '8개월 만에 월매출',
            mainLine: '<span class="gradient-text">6천에서 1억 4천</span>으로',
            subtitle: '강남 A한의원, 폐업 위기 40평 → 120평 확장.<br>신환 <strong>5배</strong>, 문의 <strong>10배</strong>, 부원장 채용까지.<br><br><span class="hero-sub-highlight">"비결은 단 하나, 홈페이지였습니다"</span>',
            ctaPrimary: '내 병원도 성과 만들기',
            ctaSecondary: '성과 데이터 전체 보기',
            trustItems: ['월매출 1억4천 달성', '신환 5배 증가', '40평→120평 확장']
        },
        cta: {
            urgencyText: '성과 보장 무료 컨설팅',
            formHeader: '매출 성장 무료 전략 상담',
            submitText: '성장 전략 받기 (무료)'
        }
    },
    {
        id: 'friendly',
        name: '친근형',
        description: '따뜻한 대화체 접근',
        conversionRate: '3.5%',
        recommended: false,
        colors: {
            primary: '#ea580c',
            primaryDark: '#c2410c',
            primaryLight: '#f97316',
            primaryBg: '#fff7ed',
            accent: '#92400e',
            gradientPrimary: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
            gradientHero: 'linear-gradient(135deg, #7c2d12 0%, #92400e 50%, #b45309 100%)',
            shadowGlow: '0 0 40px rgba(234, 88, 12, 0.3)'
        },
        hero: {
            badge: '원장님, 잠깐만요!',
            badgeIcon: 'fas fa-hand-peace',
            highlightLine: '원장님, 혹시 이런 고민 있으신가요?',
            mainLine: '환자가 <span class="gradient-text">예약 버튼</span> 누르는 이유',
            subtitle: '"왜 우리 병원 홈페이지는 예쁜데 환자가 안 올까?"<br><strong>그 답, 저희가 4년간 연구했습니다.</strong><br><br><span class="hero-sub-highlight">"커피 한 잔 하면서 편하게 이야기해요"</span>',
            ctaPrimary: '편하게 상담 신청하기',
            ctaSecondary: '어떤 이야기를 나눌까요?',
            trustItems: ['부담 없는 무료 상담', '원장님 맞춤 제안', '강요 절대 없음']
        },
        cta: {
            urgencyText: '부담 없는 무료 상담',
            formHeader: '편하게 이야기 나눠볼까요?',
            submitText: '부담없이 상담 신청하기'
        }
    },
    {
        id: 'premium',
        name: '프리미엄형',
        description: '럭셔리/프리미엄 포지셔닝',
        conversionRate: '2.8%',
        recommended: false,
        colors: {
            primary: '#b8860b',
            primaryDark: '#996515',
            primaryLight: '#d4a017',
            primaryBg: '#fefce8',
            accent: '#78716c',
            gradientPrimary: 'linear-gradient(135deg, #b8860b 0%, #d4a017 100%)',
            gradientHero: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #292524 100%)',
            shadowGlow: '0 0 40px rgba(184, 134, 11, 0.3)'
        },
        hero: {
            badge: 'EXCLUSIVE MEDICAL BRANDING',
            badgeIcon: 'fas fa-crown',
            highlightLine: '강남 TOP 병원들의 선택',
            mainLine: '<span class="gradient-text">프리미엄</span> 브랜딩의 차이',
            subtitle: '단순한 홈페이지가 아닌, 브랜드 그 자체를 만듭니다.<br><strong>강남 상위 1% 병원</strong>이 신뢰하는 파트너.<br><br><span class="hero-sub-highlight">"프리미엄은 디테일에서 결정됩니다"</span>',
            ctaPrimary: 'VIP 컨설팅 예약하기',
            ctaSecondary: '프리미엄 포트폴리오 보기',
            trustItems: ['강남 TOP 병원 파트너', '프리미엄 맞춤 브랜딩', '대표 직접 컨설팅']
        },
        cta: {
            urgencyText: 'VIP 전용 컨설팅',
            formHeader: '프리미엄 브랜딩 상담',
            submitText: 'VIP 컨설팅 예약하기'
        }
    },
    {
        id: 'urgent',
        name: '긴급형',
        description: '긴급성/희소성 극대화',
        conversionRate: '5.1%',
        recommended: false,
        colors: {
            primary: '#dc2626',
            primaryDark: '#b91c1c',
            primaryLight: '#ef4444',
            primaryBg: '#fef2f2',
            accent: '#ea580c',
            gradientPrimary: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
            gradientHero: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
            shadowGlow: '0 0 40px rgba(220, 38, 38, 0.3)'
        },
        hero: {
            badge: '마감 임박! 잔여 3자리',
            badgeIcon: 'fas fa-fire',
            highlightLine: '이번 달 무료 진단',
            mainLine: '<span class="gradient-text">3자리</span> 남았습니다',
            subtitle: '매달 10건 한정, 무료 홈페이지 전환율 진단.<br><strong>이번 달 7건 마감, 잔여 3건.</strong><br><br><span class="hero-sub-highlight">"다음 달부터 유료(50만원) 전환 예정"</span>',
            ctaPrimary: '지금 바로 자리 확보하기',
            ctaSecondary: '무료 진단 내용 보기',
            trustItems: ['이번 달 3자리 남음', '50만원 상당 무료', '선착순 마감']
        },
        cta: {
            urgencyText: '마감 임박: 잔여 3건',
            formHeader: '무료 진단 자리 확보',
            submitText: '잔여 3건 중 1건 확보하기'
        }
    }
];

let currentVersionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    buildSwitcherPanel();
    applyVersion(0);
});

function buildSwitcherPanel() {
    const panel = document.getElementById('versionPanel');
    const listEl = document.getElementById('versionList');

    VERSION_PRESETS.forEach((preset, index) => {
        const item = document.createElement('button');
        item.className = 'version-item' + (index === 0 ? ' active' : '');
        item.setAttribute('data-index', index);
        item.innerHTML = `
            <span class="version-radio">${index === 0 ? '<span class="radio-dot"></span>' : ''}</span>
            <span class="version-name">${preset.name}</span>
            ${preset.recommended ? '<span class="version-star">&#11088;</span>' : ''}
        `;
        item.addEventListener('click', () => switchVersion(index));
        listEl.appendChild(item);
    });

    // Toggle panel on mobile
    const toggle = document.getElementById('panelToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            panel.classList.toggle('collapsed');
        });
    }
}

function switchVersion(index) {
    if (index === currentVersionIndex) return;
    currentVersionIndex = index;

    // Update active state in panel
    document.querySelectorAll('.version-item').forEach((item, i) => {
        const radio = item.querySelector('.version-radio');
        if (i === index) {
            item.classList.add('active');
            radio.innerHTML = '<span class="radio-dot"></span>';
        } else {
            item.classList.remove('active');
            radio.innerHTML = '';
        }
    });

    // Animate transition
    const main = document.getElementById('mainContent');
    main.classList.add('version-transitioning');

    setTimeout(() => {
        applyVersion(index);
        main.classList.remove('version-transitioning');
    }, 300);

    // Update info
    updatePanelInfo(index);
}

function applyVersion(index) {
    const preset = VERSION_PRESETS[index];
    const root = document.documentElement;

    // Apply CSS variables
    root.style.setProperty('--primary', preset.colors.primary);
    root.style.setProperty('--primary-dark', preset.colors.primaryDark);
    root.style.setProperty('--primary-light', preset.colors.primaryLight);
    root.style.setProperty('--primary-bg', preset.colors.primaryBg);
    root.style.setProperty('--accent', preset.colors.accent);
    root.style.setProperty('--gradient-primary', preset.colors.gradientPrimary);
    root.style.setProperty('--gradient-hero', preset.colors.gradientHero);
    root.style.setProperty('--shadow-glow', preset.colors.shadowGlow);

    // Update hero section
    const badge = document.querySelector('.hero-badge span');
    const badgeIcon = document.querySelector('.hero-badge i');
    const highlightLine = document.querySelector('.hero-title .highlight-line');
    const mainLine = document.querySelector('.hero-title .main-line');
    const subtitle = document.querySelector('.hero-subtitle');
    const ctaPrimary = document.querySelector('.hero-cta .btn-primary span');
    const ctaSecondary = document.querySelector('.hero-cta .btn-secondary span');
    const trustItems = document.querySelectorAll('.trust-item');

    if (badge) badge.textContent = preset.hero.badge;
    if (badgeIcon) badgeIcon.className = preset.hero.badgeIcon;
    if (highlightLine) highlightLine.textContent = preset.hero.highlightLine;
    if (mainLine) mainLine.innerHTML = preset.hero.mainLine;
    if (subtitle) subtitle.innerHTML = preset.hero.subtitle;
    if (ctaPrimary) ctaPrimary.textContent = preset.hero.ctaPrimary;
    if (ctaSecondary) ctaSecondary.textContent = preset.hero.ctaSecondary;

    trustItems.forEach((item, i) => {
        if (preset.hero.trustItems[i]) {
            const span = item.querySelector('i');
            item.innerHTML = '';
            if (span) item.appendChild(span.cloneNode(true));
            else {
                const icon = document.createElement('i');
                icon.className = 'fas fa-check-circle';
                item.appendChild(icon);
            }
            item.appendChild(document.createTextNode(' ' + preset.hero.trustItems[i]));
        }
    });

    // Update CTA section
    const urgencyText = document.querySelector('.urgency-text');
    const formSubmit = document.querySelector('.form-submit span');

    if (urgencyText) urgencyText.textContent = preset.cta.urgencyText;
    if (formSubmit) formSubmit.textContent = preset.cta.submitText;

    // Update panel info
    updatePanelInfo(index);
}

function updatePanelInfo(index) {
    const preset = VERSION_PRESETS[index];
    const rateEl = document.getElementById('currentRate');
    const recEl = document.getElementById('recommendation');

    if (rateEl) rateEl.textContent = preset.conversionRate;

    if (recEl) {
        const recommended = VERSION_PRESETS.find(p => p.recommended);
        if (recommended) {
            recEl.innerHTML = `<span class="rec-label">추천:</span> ${recommended.name} <span class="rec-star">&#11088;</span>`;
        }
    }
}
