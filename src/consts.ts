输出cont INIT_DELAY = 0.3
导出账号ANIMATION_DELAY = 0.1
export const CARD_SPACING = 36
export const CARD_SPACING_SM = 24
export const BLOG_SLUG_KEY = process.env.BLOG_SLUG_KEY || ''

/**
 * GitHub 仓库配置
 */
export const GITHUB_CONFIG = {
	OWNER: process.env.NEXT_PUBLIC_GITHUB_OWNER || 'AMNOTSR',
	REPO: process.env.NEXT_PUBLIC_GITHUB_REPO || '2025-blog-public',
	BRANCH: process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main',
	APP_ID: process.env.NEXT_PUBLIC_GITHUB_APP_ID || '2948472',
	ENCRYPT_KEY: process.env.NEXT_PUBLIC_GITHUB_ENCRYPT_KEY || 'wudishiduomejimo',
} as const
