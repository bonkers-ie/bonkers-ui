import { DocsContainer as BaseContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks";

export const DocsContainer: React.FC<React.PropsWithChildren<DocsContainerProps>> = (props) => {
	// @ts-expect-error file is outside project
	return <BaseContainer { ...props } context={ props.context } />;
};
