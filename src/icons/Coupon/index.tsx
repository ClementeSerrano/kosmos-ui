import React from "react";

import { TVectorProps } from "../../types/vectors";
import { DEFAULT_VECTOR_COLORS } from "../../utils/constants";

function CouponIcon({
  height = "24",
  colors = DEFAULT_VECTOR_COLORS,
  style,
}: TVectorProps) {
  return (
    <svg height={height} x="0px" y="0px" viewBox="0 0 512 512" style={style}>
      <path
        fill={colors.default}
        d="M426.639,426.049l1.732-34.191c0.315-6.146,4.255-11.659,10.084-13.865l31.907-12.211
	c13.944-5.278,24.58-16.544,29.07-30.647c4.648-14.102,2.679-29.306-5.514-41.754l-18.593-28.833c-3.467-5.2-3.466-11.818,0-17.017
	l18.671-28.756c8.036-12.447,10.084-27.731,5.515-41.912c-4.648-14.102-15.127-25.21-29.149-30.566l-31.985-12.29
	c-5.751-2.127-9.612-7.563-9.927-13.708l-1.891-34.192c0.079-0.71-0.078-1.339-0.157-2.049
	c-1.182-14.102-8.509-26.786-19.932-35.214c-12.054-8.588-27.022-11.423-41.518-7.642l-33.167,8.902
	c-5.908,1.654-12.211-0.393-16.071-5.2l-21.586-26.628C284.754,6.696,270.809,0,255.999,0c-14.811,0-28.756,6.696-38.051,18.198
	l-21.664,26.707c-3.86,4.805-10.163,6.853-16.071,5.2l-33.167-8.902c-14.339-3.781-29.464-0.945-41.518,7.642
	c-12.054,8.902-19.38,22.374-20.089,37.263l-1.891,34.191c-0.158,6.146-4.176,11.58-9.927,13.708l-31.986,12.29
	c-13.865,5.357-24.501,16.465-29.149,30.567c-4.569,14.181-2.521,29.463,5.593,41.99l18.75,28.677
	c3.309,5.2,3.309,11.818-0.078,17.095L18.08,293.382c-8.114,12.368-10.163,27.653-5.515,41.754
	c4.491,14.102,15.205,25.447,29.07,30.647l32.064,12.211c5.672,2.206,9.612,7.721,9.927,13.865l1.734,34.192
	c0,1.417,0.158,2.835,0.393,4.175c1.813,13.157,8.902,25.132,19.774,32.853c12.054,8.902,27.258,11.659,41.596,7.72l33.01-8.902
	c5.988-1.575,12.29,0.472,16.229,5.357l21.586,26.628c9.217,11.58,23.162,18.119,38.13,18.119c14.811,0,28.755-6.539,38.13-18.119
	l21.428-26.628c3.94-4.884,10.242-6.933,16.229-5.357l33.167,8.902c14.181,3.94,29.385,1.182,41.439-7.721
	C418.525,454.488,425.851,441.017,426.639,426.049z"
      />
      <path
        fill={colors.default}
        d="M406.471,463.076c-12.054,8.902-27.258,11.659-41.439,7.721l-33.167-8.902
	c-5.987-1.575-12.29,0.472-16.229,5.357l-21.428,26.628c-9.375,11.58-23.32,18.119-38.13,18.119
	c-14.968,0-28.913-6.539-38.13-18.119l-21.586-26.628c-3.94-4.884-10.241-6.933-16.229-5.357l-33.01,8.902
	c-14.338,3.94-29.542,1.182-41.596-7.72c-10.873-7.721-17.962-19.696-19.774-32.853L426.718,89.259l1.732,31.04
	c0.315,6.144,4.176,11.58,9.927,13.708l31.985,12.29c14.022,5.357,24.501,16.465,29.149,30.566
	c4.569,14.181,2.521,29.464-5.515,41.912l-18.671,28.756c-3.466,5.2-3.467,11.818,0,17.017l18.593,28.833
	c8.193,12.448,10.163,27.653,5.514,41.754c-4.49,14.103-15.126,25.368-29.07,30.647l-31.907,12.211
	c-5.83,2.206-9.769,7.721-10.084,13.865l-1.732,34.191C425.851,441.017,418.525,454.488,406.471,463.076z"
      />
      <path
        fill={colors.light}
        d="M188.424,232.848c-18.431,0-33.424-14.993-33.424-33.424S169.993,166,188.424,166
	s33.424,14.993,33.424,33.424S206.855,232.848,188.424,232.848z M188.424,199.445h0.109H188.424z M188.424,199.445h0.109H188.424z
	 M188.424,199.431l0.109-0.001L188.424,199.431z M188.424,199.431l0.109-0.001L188.424,199.431z M188.424,199.431L188.424,199.431
	L188.424,199.431z M188.424,199.431l0.109-0.001L188.424,199.431z M188.424,199.431l0.109-0.001L188.424,199.431z M188.424,199.431
	l0.109-0.001L188.424,199.431z"
      />
      <path
        fill={colors.light}
        d="M310.979,355.403c-18.431,0-33.424-14.993-33.424-33.424c0-18.431,14.993-33.424,33.424-33.424
	s33.424,14.993,33.424,33.424C344.403,340.41,329.41,355.403,310.979,355.403z M310.979,322h0.109H310.979z M310.979,322h0.109
	H310.979z M310.979,321.986l0.109-0.001L310.979,321.986z M310.979,321.986l0.109-0.001L310.979,321.986z M310.979,321.986
	L310.979,321.986L310.979,321.986z M310.979,321.986l0.109-0.001L310.979,321.986z M310.979,321.986l0.109-0.001L310.979,321.986z
	 M310.979,321.986l0.109-0.001L310.979,321.986z"
      />
      <path
        fill={colors.light}
        d="M161.461,354.516c-6.524-6.524-6.528-17.106,0-23.634l157.562-157.562
	c6.528-6.528,17.11-6.524,23.634,0c6.524,6.524,6.528,17.106,0,23.634L185.095,354.516
	C178.568,361.043,167.985,361.04,161.461,354.516z"
      />
      <path
        fill={colors.light}
        d="M185.095,354.516l157.562-157.562c6.528-6.528,6.524-17.11,0-23.634L161.461,354.516
	C167.985,361.04,178.568,361.043,185.095,354.516z"
      />
    </svg>
  );
}

export default CouponIcon;
