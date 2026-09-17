# Dojun Park — Academic Personal Website

영문 연구자 개인 홈페이지. Computational pragmatics, multilinguality, LLM evaluation을 중심으로 언어 이해 연구와 모델 발전을 지향하는 computational linguist를 소개하는 HTML/CSS/JavaScript 정적 사이트입니다. GitHub Pages에서 별도 빌드 없이 사용할 수 있습니다.

## 완료된 기능

- 기존 아이보리·세이지 그린 디자인 및 모바일 반응형 화면 유지
- 프로필 사진을 첫 화면 오른쪽 상단에 정렬: 데스크톱에서는 소개 열의 상단, 모바일에서는 Dojun Park 이름 오른쪽에 배치하고 자기소개는 그 아래 전체 너비로 표시
- 노을·바다 배경과 얼굴이 모두 보이도록 원본 정사각 비율 유지, 얇은 테두리와 여백 적용
- CV와 사용자 포지셔닝 요청에 기반한 소개: computational pragmatics, multilinguality, LLM evaluation
- 첫 화면 슬로건: “Understanding language. Advancing language models.” — 평가만이 아닌 언어 이해 연구와 모델 발전을 포괄
- 첫 화면 소개: Computational linguist 정체성, University of Stuttgart 석사 및 Seoul National University 연구 경력을 우선 제시. `and NLP researcher`는 제외. Rivetta는 첫 화면 소개에서만 제외하고 About과 상세 경력에는 유지
- About 첫 문단은 의미·의도·언어 간 맥락 이해를 먼저 소개하며, 간접 화행과 perceptual grounding 연구를 연결. 모델 개발은 `I aim to…`로 지향점을 표현하고 미확인 성과를 주장하지 않음
- About 연구 태그 및 검색/공유 메타데이터도 최신 포지셔닝에 맞춤. 과거 기계번역 연구의 논문·학력·경력 기록은 유지
- 학력 2항목: University of Stuttgart (2021–2023), Konkuk University (2018–2021)
- 학위, 학위논문 제목, 지도교수와 석사논문 저장소 링크
- 경력 3항목: Rivetta AI Engineer (2024.12–2025.03), SNU AI Institute Research Assistant (2023.11–2024.08), Konkuk NLP Lab Undergraduate Researcher (2020.07–12)
- 논문 8편: 학회·워크숍 4편, 학술지 2편, 프리프린트 2편
- 논문 제목, CV에 기재된 저자 표기, 연도, 학회·학술지, 원문 링크
- All / Published / Preprints 필터, 선택 상태와 접근성 라이브 카운트
- 언어 능력 및 2024–2026 학술지 리뷰 경력: 데스크톱은 나란히 2열, 모바일은 세로 배치
- 사용자 요청으로 Projects 섹션 및 Technical Toolkit 목록 삭제, 해당 전용 스타일 제거
- 섹션 순서: About(01) → Background(02) → Research(03) → Languages & Service(04) → Contact(05)
- 이메일 mailto 링크, LinkedIn, Google Scholar, GitHub
- 내부 섹션 이동, 현재 섹션 표시, 자동 연도 갱신
- 키보드 포커스, 본문 바로가기, reduced-motion, 기본 SEO 메타데이터

JavaScript 없이도 모든 논문과 본문을 읽고 링크를 사용할 수 있습니다. 이때 필터 UI는 숨겨집니다. 서버나 LLM 호출 기능은 없습니다.

## 정보 출처와 공개 범위

사용자가 제공한 **DojunPark_CV_Bochum.pdf, 3페이지 전체**에서 텍스트와 PDF 링크 주석을 추출했습니다.

- 1페이지: 연락처, 학력·연도, 논문 제목, 지도교수
- 2페이지: 경력 및 수행 업무, 학회·워크숍 논문 4편
- 3페이지: 학술지 논문 2편, 프리프린트 2편, 기술·언어, 프로젝트, 학술 봉사
- 석사논문 링크는 문서에 실제 포함된 URL을 사용합니다. CV에 있는 프로젝트와 기술 스택은 사용자 요청에 따라 현재 홈페이지에서 제외합니다.
- 연구 소개는 CV에 기록된 업무와 연구를 바탕으로 요약했습니다. 새로운 연구 성과나 현재 소속은 추정하지 않았습니다.
- 논문 상태는 CV 기준입니다. Scholar 자동 접근이 차단되어 최신 인용 수나 이후 게재 상태를 검증하지 않았습니다.
- CV에 `D. Park et al.`로 표기된 MultiPragEval 저자 목록은 임의로 확장하지 않았습니다.
- 영어·독일어·중국어 자격 및 CEFR 표기는 CV 기준이며 최근 능력을 재검증한 것은 아닙니다.
- 학업 성적, 추천인 연락처는 홈페이지에서 제외했습니다. 본인 이메일은 CV에 기재된 업무 연락처로 표시합니다.
- 추천인 이메일을 포함하는 CV 원본은 공개 다운로드로 제공하지 않습니다. 추출에 사용한 임시 PDF와 도구 파일도 최종 프로젝트에서 삭제했습니다.
- 프로필 사진은 사용자가 업로드한 원본 JPEG(1024×1024, 248,337 bytes)를 `images/dojun-park.jpg`에 저장했습니다. 원본 파일을 보정·재생성하지 않고 사용하며, 이미지에 텍스트를 덮거나 얼굴을 잘라내지 않습니다.

## 파일 구조

```text
index.html          # CV 기반 영문 콘텐츠와 링크
css/style.css       # 기존 기본 디자인 및 반응형 스타일
css/profile.css     # CV 상세 섹션과 논문 필터 스타일
js/main.js          # 논문 필터, 현재 섹션 및 연도 표시
images/dojun-park.jpg # 원본 프로필 사진
.nojekyll           # GitHub Pages Jekyll 처리 생략
README.md           # 프로젝트 및 배포 안내
```

## 기능 진입 URI

| 경로 | 기능 |
| --- | --- |
| `/`, `/index.html` | 전체 홈페이지 |
| `/#home` | 소개 및 프로필 사진 |
| `/images/dojun-park.jpg` | 프로필 사진 원본 정적 파일 |
| `/#about` | 연구자 소개 |
| `/#background` | 학력·경력 |
| `/#research` | 논문 목록과 필터, 학술·코드 프로필 |
| `/#expertise` | 언어 능력·학술 봉사 |
| `/#contact` | 이메일·LinkedIn |

`/#projects` 섹션은 삭제되어 더 이상 진입 대상이 아닙니다. `/#expertise`는 기존 주소를 유지하며 언어 능력과 학술 봉사만 보여줍니다.

사이트 자체 쿼리 파라미터는 없습니다. 필터는 현재 페이지 내에서만 적용되며 새로고침하면 All로 돌아갑니다. Scholar의 `user=K1THT-YAAAAJ&hl=en`은 외부 서비스의 프로필 식별자/언어입니다.

## GitHub Pages 배포 및 공개 URL

대상 저장소: https://github.com/DojunPark/dojunpark.github.io

배포 후 예상 주소: **https://dojunpark.github.io/**

**현재 작업은 편집 프로젝트를 수정한 것이며, 해당 외부 저장소에 직접 푸시하거나 GitHub Pages 배포를 실행한 것은 아닙니다. 예상 URL의 공개 상태도 확인하지 않았습니다.**

1. 외부 저장소의 기존 파일을 확인하고 백업합니다.
2. `index.html`, `css/` 전체 (`profile.css` 포함), `js/main.js`, `images/` 전체, `.nojekyll`을 저장소 루트에 같은 구조로 복사합니다. 기존 파일과 차이를 확인해 교체하고 README는 필요에 따라 병합합니다.
3. 저장소의 기본 브랜치에 커밋·푸시합니다.
4. **Settings → Pages → Build and deployment → Deploy from a branch**를 선택합니다.
5. **main / (root)**를 선택해 저장합니다. 기본 브랜치가 다르면 해당 브랜치를 선택합니다. 기존 Actions 배포가 있으면 먼저 설정을 확인합니다.
6. 배포 완료 후 실제 URL에서 확인합니다. 이미 branch 배포를 사용 중이면 푸시로 재배포됩니다.

이 편집 도구의 Publish 탭으로 별도 정적 호스팅에 게시할 수도 있지만, 그것이 외부 GitHub 저장소 반영을 뜻하지는 않습니다.

### 주요 외부 링크

- Scholar: https://scholar.google.co.kr/citations?user=K1THT-YAAAAJ&hl=en
- GitHub: https://github.com/DojunPark
- LinkedIn: https://www.linkedin.com/in/dojun-park-772b0319b
- 이메일: mailto:dojun.parkk@gmail.com
- 석사논문: https://elib.uni-stuttgart.de/handle/11682/15024
- 논문: ACL Anthology, DOI, arXiv, DBpia 원문 링크 (`index.html` 참고)
- Google Fonts: DM Sans / IBM Plex Mono (불러오기 실패 시 시스템 글꼴 사용)
- API 엔드포인트: 없음. 외부 서비스는 일반 링크로 연결되며 자동 수집하지 않습니다.

## 데이터 구조와 저장 서비스

- 데이터는 `index.html`에 정적으로 저장합니다. 프로필 사진은 `images/dojun-park.jpg` 정적 자산이며 외부 이미지 서비스에 의존하지 않습니다.
- 학력: 기간, 기관, 학위, 학위논문, 지도교수, 링크.
- 경력: 기간, 기관, 직책, 주요 업무, 지도교수.
- 논문: 제목, CV 저자 표기, 연도, 유형(`published`/`preprint`), 게재 정보, URL.
- 언어/학술 봉사: 목록 또는 연도별 항목.
- 프로젝트·기술 스택 데이터는 현재 페이지 마크업에 포함하지 않습니다.
- Table API, 데이터베이스, 서버, 인증, 쿠키, localStorage는 사용하지 않습니다.
- 연락 버튼은 방문자의 이메일 앱을 여는 mailto 링크입니다. 메시지를 직접 전송하거나 서버에 저장하지 않습니다.

## 검증

- 실제 `index.html`을 데스크톱 1280px 및 모바일 390px에서 렌더 검증.
- 프로필 사진 상단 이동 후 데스크톱·모바일에서 이름 오른쪽 배치, 원본 비율, 얼굴·노을 보존과 텍스트 간격 확인.
- Languages & Service 재배치 후 두 화면에서 2열/세로 배치, 04→05 순서 및 불필요한 빈 공간이 없는지 확인.
- 브라우저 기능 테스트: 전체 8편/게재 6편/프리프린트 2편 필터, 필터 선택 상태 및 카운트, 내부 앵커, 경력 개수, 연락처, 새 탭 보안 속성, 연도 갱신 확인.
- 추천인 이메일 및 원본 PDF 링크가 본문에 없는지 확인.
- 외부 논문 링크는 CV 원문에 있는 주소와 대조했으나 모든 외부 서버의 현재 접근 가능 여부는 검증하지 않았습니다.
- 테스트용 임시 페이지와 스크립트는 최종 프로젝트에서 제거합니다.

## 미구현 및 권장 다음 단계

1. 현재 소속/직책 및 향후 연구 방향을 사용자에게 확인해 추가.
2. 공개용으로 추천인 연락처 등을 제거한 CV를 제공받아 다운로드 버튼 추가.
3. 한국어 페이지 및 본인이 작성한 논문별 기여 설명 추가 검토.
4. 논문 상세 메타데이터·전체 저자명 및 프리프린트 게재 상태를 원문으로 재확인.
5. 논문·프로필 외부 링크의 현재 가용성 확인. Projects/Technical Toolkit은 미구현이 아니라 사용자 요청으로 제외된 항목입니다.
6. GitHub 저장소에 반영하고 실배포 URL에서 최종 확인.
7. 공개 주소 확정 후 canonical, 공유 이미지, 파비콘 추가 검토.
