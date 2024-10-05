import {
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
  onChange: (val: string) => void;
}

export interface TabProps<T> extends HTMLAttributes<T> {
  value: string;
  index: number;
}

const SlideTabs = ({
  children,
  defaultValue,
  defaultIndex,
  onChange,
}: SlideTabsProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [index, setIndex] = useState<number>(defaultIndex);

  const handleChange = (newVal: string, index: number) => {
    setValue(newVal);
    setIndex(index);
    onChange(newVal);
  };
  return (
    <>
      <div className="slideTabs flex flex-col">
        <div className="slideTabs-tab flex flex-row">
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
                onChange: () => {},
                className: ` ${c.props.value === value && "!text-[#fff]"} `,
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
  return (
    <button
      {...props}
      className={`w-[var(--btn-w)] z-[2] h-[var(--btn-h)] text-[hsl(var(--muted-foreground))] cursor-pointer ${props.className}`}
    />
  );
};

export const TabPanel = ({ ...props }: TabProps<HTMLDivElement>) => {
  return <div {...props} />;
};

export default SlideTabs;
