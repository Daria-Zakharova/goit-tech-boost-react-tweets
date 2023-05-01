import { css } from "styled-components";

export const vars = css`
  :root {
    --color-accent: #5736a3;

    --color-bg: #fff;
    --color-bg-dark: #222;

    --color-btn: #ebd8ff;
    --color-btn-sec: #5cd3a8;

    --color-txt: #ebd8ff;
    --color-txt-btn: #373737;

    --bg-card: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );

    --bg-rate-card: radial-gradient(
        ellipse farthest-corner at left bottom,
        #fedb37 0%,
        #fdb931 8%,
        #9f7928 30%,
        #8a6e2f 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse farthest-corner at right top,
        #ffffff 0%,
        #ffffac 8%,
        #d1b464 25%,
        #5d4a1f 62.5%,
        #5d4a1f 100%
      );

    --bg-rating: linear-gradient(
        to right,
        #fff 2%,
        #fffc 10%,
        #fffc 90%,
        #fff 98%
      ),
      linear-gradient(to top, #fff 2%, transparent 10%, #fff 98%);

    --shd-separator: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;

    --shd-avatar-border: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;

    --shd-btn: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    --shd-btn-hover: inset 1px 1px 2px rgba(0, 0, 0, 0.8);

    --shd-card: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

    --border-rad-card: 20px;
    --border-rad-btn: 10.3108px;
  }
`;
