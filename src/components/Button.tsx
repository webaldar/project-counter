

type ButtonProps = {
    title: string
    onclick: () => void
    className: string
    disabled: boolean
};
export const Button = ({title, onclick, className, disabled}: ButtonProps) => {
    const buttonOnClickHandler = () => {
        onclick()
    }
    return (
        <button className={className} onClick={buttonOnClickHandler} disabled={disabled}>{title}</button>
    );
};