import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import "./SlideTabs.scss";

export interface SlideTabsProps {
  children: ReactNode;
  defaultValue: string;
  defaultIndex: number;
}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  index: number;
}

const SlideTabs = ({
  children,
  defaultValue,
  defaultIndex,
}: SlideTabsProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [index, setIndex] = useState<number>(defaultIndex);

  const handleChange = (newVal: string, index: number) => {
    setValue(newVal);
    setIndex(index);
  };
  return (
    <>
      <div className="slideTabs flex flex-row gap-5">
        <span
          className="slideTabs-glider"
          style={{
            transform: `translateX(${index * 100}%)`,
          }}
        />
        {Children.map(children, (c, key) =>
          isValidElement(c) && c.props.value
            ? cloneElement(c as ReactElement<TabProps>, {
                onClick: () => handleChange(c.props.value, c.props.index),
                className: `slideTabs-tab ${
                  c.props.value === value && "text-red-500"
                } `,
              })
            : c
        )}
      </div>
    </>
  );
};

export const Tab = ({ ...props }: TabProps) => {
  return <button className={`${props.className} cursor-pointer`} {...props} />;
};

export default SlideTabs;
