import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  HTMLAttributes,
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

export interface TabProps<T> extends HTMLAttributes<T> {
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
      <div className="slideTabs flex flex-col">
        <div className="slideTabs-tab flex flex-row gap-5">
          <span
            className="slideTabs-glider"
            style={{
              transform: `translateX(${index * 100}%)`,
            }}
          />
          {Children.map(
            children,
            (c) =>
              isValidElement(c) &&
              c.props.value &&
              c.type === Tab &&
              cloneElement(c as ReactElement<TabProps<HTMLButtonElement>>, {
                onClick: () => {
                  handleChange(c.props.value, c.props.index);
                },
                className: ` ${c.props.value === value && "text-red-500"} `,
              })
          )}
        </div>

        <div className="slideTabs-panels">
          {Children.map(
            children,
            (child) =>
              isValidElement(child) &&
              child.type === TabPanel &&
              child.props.value === value &&
              child
          )}
        </div>
      </div>
    </>
  );
};

export const Tab = ({ ...props }: TabProps<HTMLButtonElement>) => {
  return <button className={`${props.className} cursor-pointer`} {...props} />;
};

export const TabPanel = ({ ...props }: TabProps<HTMLDivElement>) => {
  return <div {...props} />;
};

export default SlideTabs;
