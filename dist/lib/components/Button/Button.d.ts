import { IColorVariant } from '../types';
import './button.css';
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    variant: IColorVariant;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Button contents
     */
    children?: any;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional `style` overrides
     */
    style?: any;
    /**
   * Optional `className` overrides
   */
    className?: string;
    /**
   * Optionally set to button being disabled
   */
    isDisabled?: boolean;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: {
    ({ variant, size, backgroundColor, children, className, style, isDisabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        variant: string;
        size: string;
    };
};
export default Button;
