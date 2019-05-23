const { createElement } = wp.element;
export default function Section({tagName, id, className, style, innerWrapper, children}){

	return createElement(
		tagName,
		{
			id: id,
			className: className,
			style: style,
		},
		innerWrapper,
		children,
	)
}
