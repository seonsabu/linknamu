# 링크나무 (Link in Bio 서비스)

## 프로젝트 개요

Linktree처럼 내 모든 링크를 한 페이지에 모아두고
하나의 URL로 공유할 수 있는 서비스입니다.

## 기술 스택

- Next.js 14 (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 주요 기능

- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 다크모드 토글
- 링크 클릭 수 집계

## 코드 규칙

- TypeScript 사용
- 컴포넌트는 src/components/ 아래에 작성
- 환경 변수는 .env.local에 저장 (절대 커밋하지 않음)
- 모바일 우선 반응형 디자인

## 보안 규칙 (영구 적용)

이 규칙은 이후 모든 작업에서 다른 지시보다 우선 적용한다.

- `.env.local` 파일을 삭제, 이름 변경, 이동, 초기화하거나 다른 파일로 덮어쓰지 않는다.
- `.env.local` 안의 `MONGODB_URI` 값은 사용자가 명시적으로 변경을 요청하지 않는 한 절대 수정하거나 삭제하지 않는다.
- `MONGODB_URI`의 실제 값, MongoDB 사용자명, 비밀번호, Connection String 등 민감정보를 터미널 출력, 로그, 응답 화면, 소스코드 어디에도 표시하지 않는다.
- `.env.local`이 `.gitignore`에 포함된 상태를 유지하고, `.env.local`을 Git에 add·commit·push하지 않는다.
- MongoDB 연결 작업이 필요하면 기존 `src/lib/mongodb.ts`와 현재 환경변수 설정을 우선 사용한다.
- 코드 수정이나 리팩터링 과정에서도 기존 MongoDB 연결 설정을 임의로 재구성하거나 초기화하지 않는다.
- `.env.local`, `MONGODB_URI`, MongoDB 연결 설정을 변경해야 할 필요가 있다고 판단되면, 먼저 변경 이유와 변경 내용을 사용자에게 설명하고 승인을 받은 뒤에만 작업한다.
- Vercel에 등록된 `MONGODB_URI` 환경변수도 사용자가 명시적으로 요청하지 않는 한 변경하거나 삭제하지 않는다.