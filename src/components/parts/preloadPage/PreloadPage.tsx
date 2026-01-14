'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Activity, useEffect, useState } from 'react';
import app from '@/config/app';
import { EncryptedText } from '../../ui/encrypted-text';
import type { PreloadPageProps } from './types';

const PreloadPage = ({ children, noPreload }: PreloadPageProps) => {
	const [isLoading, setIsLoading] = useState(!noPreload);
	const [isShowContent, setIsShowContent] = useState(!!noPreload);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timerId);
	}, []);

	useEffect(() => {
		if (noPreload) {
			setIsShowContent(true);
			return;
		}

		if (!isLoading) {
			const timerId = setTimeout(() => {
				setIsShowContent(true);
			}, app.initialDelayTimeAfterPreload);

			return () => clearTimeout(timerId);
		}
	}, [isLoading, noPreload]);

	return (
		<>
			<Activity mode={noPreload ? 'hidden' : 'visible'}>
				<AnimatePresence mode="wait">
					{isLoading && (
						<motion.div
							className="fixed inset-0 z-50 grid place-content-center bg-background"
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
						>
							<EncryptedText
								text=">_ HELLO WORLD"
								className="text-2xl font-mono font-bold tracking-widest text-primary"
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</Activity>

			<AnimatePresence mode="wait">
				<Activity mode={isShowContent ? 'visible' : 'hidden'}>
					<motion.div
						key="content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						{children}
					</motion.div>
				</Activity>
			</AnimatePresence>
		</>
	);
};

export default PreloadPage;
