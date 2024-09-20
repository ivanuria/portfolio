import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['es', 'en'];

export const {Link, useRouter} = createSharedPathnamesNavigation({locales});