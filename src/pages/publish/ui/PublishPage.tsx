import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { PageList } from './PageList';
import { RulesList } from './RulesList';

export const PublishPage = () => {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; }
      `}</style>
      <div className="w-full">
        <TabGroup>
          <div className="flex w-full h-[60px] items-center justify-between border-b border-gray-200 px-[20px] fixed bg-white z-[10]">
            <h1 className="font-bold text-xl text-primary">튼튼스쿨</h1>
            <TabList className="flex gap-[30px]">
              <Tab className="text-lg text-gray-500 aria-selected:font-bold aria-selected:text-secondary">
                페이지
              </Tab>
              <Tab className="text-lg text-gray-500 aria-selected:font-bold aria-selected:text-secondary">
                규칙
              </Tab>
            </TabList>
          </div>
          <TabPanels className="px-[20px] pt-[80px] pb-[40px]">
            <TabPanel>
              <PageList />
            </TabPanel>
            <TabPanel>
              <RulesList />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};
