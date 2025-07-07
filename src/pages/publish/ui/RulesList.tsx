import { Button } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { BoardHeader } from '~/shared/components/board/BoardHeader';
import { BoardItem } from '~/shared/components/board/BoardItem';
import { InputCheckbox } from '~/shared/components/form/InputCheckbox';
import { InputRadio } from '~/shared/components/form/InputRadio';
import { InputText } from '~/shared/components/form/InputText';
import { InputTextarea } from '~/shared/components/form/InputTextarea';
import { Icon } from '~/shared/components/Icon';
import { ProductList } from '~/shared/components/List/ProductList';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { ProductSwiper } from '~/shared/components/post/ProductSwiper';
import { RatioImage } from '~/shared/components/RatioImage';
import { YoutubePlayer } from '~/shared/components/YoutubePlayer';
import { cn } from '~/shared/utils';

export const RulesList = () => {
  const [sectionTitles, setSectionTitles] = useState<string[]>([]);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const titles: string[] = [];
    const leftDiv = document.querySelector('.left');
    if (leftDiv) {
      const h2Elements = leftDiv.querySelectorAll('section > h2');
      h2Elements.forEach((el) => {
        titles.push(el.textContent?.trim() ?? '');
      });
    }
    setSectionTitles(titles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const leftDiv = document.querySelector('.left');
      if (!leftDiv) return;

      const sections = leftDiv.querySelectorAll('section');
      const scrollY = window.pageYOffset;
      const offset = 100;

      let currentIndex = 0;
      sections.forEach((section, idx) => {
        const top = (section as HTMLElement).offsetTop - offset;
        const bottom = top + (section as HTMLElement).offsetHeight + offset;
        if (scrollY >= top && scrollY < bottom) {
          currentIndex = idx;
        }
      });
      setActiveIdx(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 최초 실행

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (idx: number) => {
    const leftDiv = document.querySelector('.left');
    const offset = 100;

    if (leftDiv) {
      const sections = leftDiv.querySelectorAll('section');
      if (sections[idx]) {
        const target = sections[idx] as HTMLElement;
        const y = window.pageYOffset + target.getBoundingClientRect().top - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <style>{`
        section {margin-bottom: 100px;}
        section > div + div {margin-top: 40px;}
        section h2 {margin-bottom: 30px; font-size: 22px; font-weight: 700;}
        section h3 {margin-bottom: 15px; font-size: 16px; font-weight: 500;}
        section ol > li {position: relative; padding-left: 10px; margin-bottom: 5px; font-size: 14px; line-height: 1.4em; color: rgba(0, 0, 0, 0.7);}
        section ol > li:before {position: absolute; left: 0; top: 0;content: "- ";}
        section ol > li:last-child {margin-bottom: 0;}
        section code {display: block; width: 100%; margin: 15px 0; font-size: 13px; padding: 15px; color: rgba(0, 0, 0, 0.7); background: #f7f7f9; line-height: 1.4; font-family: inital;}
        section .example {margin: 15px 0; border: 1px solid #eee; padding: 20px; border-radius: 10px;}
      `}</style>

      <div className="left w-full pt-[20px] pr-[200px]">
        <section>
          <h2>컬러 클래스명</h2>
          <div>
            <h3>사용 예시</h3>
            <ol>
              <li>배경색 : bg-primary</li>
              <li>폰트색 : text-primary</li>
            </ol>
          </div>
          <div>
            <h3>Primary color</h3>
            <ul className="flex flex-col gap-[20px]">
              <li>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-primary text-white text-base">
                  primary
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3>Secondary color</h3>
            <ul className="flex flex-col gap-[20px]">
              <li>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-secondary text-white text-base">
                  secondary
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3>Point color</h3>
            <ul className="flex flex-col gap-[20px]">
              <li className="flex gap-[20px]">
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-point-green text-white text-base">
                  point-green
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-point-pink text-white text-base">
                  point-pink
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-point-red text-white text-base">
                  point-red
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-point-yellow text-white text-base">
                  point-yellow
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3>Gray scale</h3>
            <ul className="flex flex-col gap-[20px]">
              <li className="flex gap-[20px]">
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-50 text-base">
                  gray-50
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-100 text-base">
                  gray-100
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-150 text-base">
                  gray-150
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200 text-base">
                  gray-200
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-300 text-base">
                  gray-300
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-350 text-base">
                  gray-350
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-400 text-base">
                  gray-400
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-500 text-base text-white">
                  gray-500
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-600 text-base text-white">
                  gray-600
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-700 text-base text-white">
                  gray-700
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-800 text-base text-white">
                  gray-800
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3>Background color</h3>
            <ul className="flex flex-col gap-[20px]">
              <li className="flex gap-[20px]">
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-white text-base">
                  white
                </div>
                <div className="flex items-center justify-center w-[100px] h-[100px] bg-amber-50 text-base">
                  amber-50
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>폰트 사이즈 클래스 명</h2>
          <div>
            <ol>
              <li>
                34px <div className="text-34 example">text-34</div>
              </li>
              <li>
                28px <div className="text-28 example">text-28</div>
              </li>
              <li>
                24px <div className="text-2xl example">text-2xl</div>
              </li>
              <li>
                22px <div className="text-28 example">text-22</div>
              </li>
              <li>
                20px <div className="text-xl example">text-xl</div>
              </li>
              <li>
                18px <div className="text-xl example">text-lg</div>
              </li>
              <li>
                16px <div className="text-base example">text-base</div>
              </li>
              <li>
                14px <div className="text-sm example">text-sm</div>
              </li>
              <li>
                12px <div className="text-xs example">text-xs</div>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <h2>버튼 클래스 명</h2>
          <div>
            <h3>버튼 크기</h3>
            <ol>
              <li>
                height: 24px
                <div className="example">
                  <Button className="btn-xs btn-primary">btn-xs</Button>
                </div>
              </li>
              <li>
                height: 32px
                <div className="example">
                  <Button className="btn-sm btn-primary">btn-sm</Button>
                </div>
              </li>
              <li>
                height: 40px
                <div className="example">
                  <Button className="btn-md btn-primary">btn-md</Button>
                </div>
              </li>
              <li>
                height: 48px
                <div className="example">
                  <Button className="btn-lg btn-primary">btn-lg</Button>
                </div>
              </li>
              <li>
                height: 60px
                <div className="example">
                  <Button className="btn-xl btn-primary">btn-xl</Button>
                </div>
              </li>
            </ol>
          </div>
          <div>
            <h3>배경색 들어간 버튼</h3>
            <div className="flex gap-[20px] example">
              <Button className="btn-md btn-primary">btn-primary</Button>
              <Button className="btn-md btn-gray-500">btn-gray-500</Button>
              <Button className="btn-md btn-gray-400">btn-gray-400</Button>
            </div>
          </div>
          <div>
            <h3>라인색 들어간 버튼</h3>
            <div className="flex gap-[20px] example">
              <Button className="btn-md btn-border-primary">btn-border-primary</Button>
              <Button className="btn-md btn-border-gray">btn-border-gray</Button>
            </div>
          </div>
          <div>
            <h3>아이콘 들어간 버튼 (hover 효과 없음)</h3>
            <div className="flex gap-[20px] example">
              <Button className="btn-primary btn-md btn-icon flex items-center gap-[4px]">
                <Icon src="write.svg" />
                <span>btn-icon</span>
              </Button>
            </div>
          </div>
        </section>
        <section>
          <h2>이미지 비율</h2>
          <div>
            <h3>1:1 비율 (연관 상품)</h3>
            <div className="w-[155px]">
              <RatioImage src="/images/img/product01.jpg" className="aspect-[1/1]" isContain />
            </div>
          </div>
          <div>
            <h3>4:5 비율 (상품)</h3>
            <div className="w-[288px]">
              <RatioImage src="/images/img/product01.jpg" className="aspect-[4/5]" isContain />
            </div>
          </div>
          <div>
            <h3>4:3 비율 (우리학교 급식자랑)</h3>
            <div className="w-[366px]">
              <RatioImage src="/images/img/temp1.jpg" className="aspect-[4/3]" isContain />
            </div>
          </div>
          <div>
            <h3>17:10 비율 (레시피, 이벤트, 자료실)</h3>
            <div className="w-[496px]">
              <RatioImage src="/images/img/recipe01.jpg" className="aspect-[17/10]" isContain />
            </div>
          </div>
        </section>
        <section>
          <h2>유튜브 동영상</h2>
          <div>
            <h3>메인 (9:16)</h3>
            <div className="example">
              <div className="rounded-[8px] lg:rounded-[16px] w-[202px] lg:w-[328px] overflow-hidden text-[0]">
                <YoutubePlayer videoId="ikEpYxy4nCE" />
              </div>
            </div>
          </div>
          <div>
            <h3>동영상 레시피 (17:10)</h3>
            <div className="example grid grid-cols-1 gap-y-[30px] lg:gap-y-[60px] lg:gap-x-[24px] lg:grid-cols-3">
              <div className="overflow-hidden rounded-[8px] text-[0px]">
                <YoutubePlayer videoId="ikEpYxy4nCE" ratio="17/10" info={false} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Form</h2>
          <div>
            <h3>InputText</h3>
            <div className="example">
              <InputText
                label="아이디"
                placeholder="아이디를 입력해주세요."
                required
                btnName="중복확인"
                desc="5~12자 영문 소문자, 숫자 가능"
                errorMessage="사용 불가능한 아이디입니다."
                successMessage="사용 가능한 아이디입니다."
              />
            </div>
            <div className="example">
              <InputText
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                required
                desc="8자 이상 영문, 숫자, 특수문자 조합"
                type="password"
              />
            </div>
          </div>
          <div>
            <h3>InputCheckbox</h3>
            <div className="example">
              <InputCheckbox>남도 떡갈비</InputCheckbox>
            </div>
          </div>
          <div>
            <h3>InputRadio</h3>
            <div className="example">
              <InputRadio
                name="ageGroup"
                label="연령대"
                required
                options={['20대 이하', '30대', '40대', '50대', '60대 이상']}
                defaultValue="20대 이하"
              />
            </div>
          </div>
          <div>
            <h3>InputTextarea</h3>
            <div className="example">
              <InputTextarea label="소개 내용" placeholder="급식을 소개해주세요." />
            </div>
          </div>
        </section>
        <section>
          <h2>리스트</h2>
          <div>
            <h3>상품 리스트</h3>
            <div className="example grid gap-x-[13px] lg:gap-x-[24px] gap-y-[30px] lg:gap-y-[60px] grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              <ProductList />
              <ProductList login />
              <ProductList login noPrice />
              <ProductList login noUnitPrice />
              <ProductList login ingPrice />
              <ProductList login stop />
            </div>
          </div>
          <div>
            <h3>연관상품 리스트</h3>
            <div className="example">
              <ProductSwiper title="메뉴 사용한 상품" />
            </div>
          </div>
          <div>
            <h3>게시판 리스트</h3>
            <div className="example">
              <BoardHeader />
              <ul>
                <li>
                  <BoardItem
                    id={1}
                    link="/qna/detail"
                    category="Q&A"
                    title="Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다.Q&A 게시판 제목입니다.Q&A 게시판 제목입니다."
                    createdBy="사용자1"
                    createdAt="2023.10.01 12:36"
                    commentCount={5}
                    isPinned
                  />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>갤러리형 리스트 (레시피, 이벤트, 자료실)</h3>
            <div className="example flex flex-col gap-[40px] lg:gap-[80px] mt-[20px] lg:mt-[18px]">
              <ThumbList>
                <ThumbItem
                  thumb={{
                    src: '/images/img/recipe01.jpg',
                    alt: '이벤트 썸네일',
                    ratio: '17/10',
                    isContain: true,
                  }}
                  info={{
                    title:
                      '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
                    link: '/event/detail',
                    commentCount: 21,
                    period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
                  }}
                />
                <ThumbItem
                  thumb={{
                    src: '/images/img/recipe01.jpg',
                    alt: '이벤트 썸네일',
                    ratio: '17/10',
                    isContain: true,
                  }}
                  info={{
                    title:
                      '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
                    link: '/event/detail',
                    commentCount: 21,
                    period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
                  }}
                />
                <ThumbItem
                  thumb={{
                    src: '/images/img/recipe01.jpg',
                    alt: '이벤트 썸네일',
                    ratio: '17/10',
                    isContain: true,
                  }}
                  info={{
                    title:
                      '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
                    link: '/event/detail',
                    commentCount: 21,
                    period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
                  }}
                />
                <ThumbItem
                  thumb={{
                    src: '/images/img/recipe01.jpg',
                    alt: '이벤트 썸네일',
                    ratio: '17/10',
                    isContain: true,
                  }}
                  info={{
                    title:
                      '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
                    link: '/event/detail',
                    commentCount: 21,
                    period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
                  }}
                />
              </ThumbList>
            </div>
          </div>
        </section>
      </div>

      <div className="right fixed right-[20px] top-[100px] w-[180px]">
        <ul className="flex flex-col gap-[8px] px-[20px]">
          {sectionTitles.map((title, idx) => (
            <li key={idx}>
              <button
                type="button"
                className={cn(
                  'text-sm',
                  idx === activeIdx ? 'text-primary font-bold' : 'text-gray-800',
                )}
                onClick={() => handleScrollToSection(idx)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
