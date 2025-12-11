import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

interface SquareButtonProps {
    size: number;
    icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
}

export { SquareButtonProps };

