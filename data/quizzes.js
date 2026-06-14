export const quizzes = {

  /* =========================
     l1 - Floating Point
  ========================= */

  l1: [

    {
      question: "Why is 0.1 not represented exactly in binary floating-point?",
      options: [
        "Insufficient RAM",
        "Infinite binary expansion",
        "CPU limitation",
        "Exponent overflow"
      ],
      answer: 1,
      explanation: "Many decimal fractions become repeating binary fractions."
    },

    {
      question: "What is machine precision primarily determined by?",
      options: [
        "RAM size",
        "Exponent bits",
        "Mantissa length",
        "CPU speed"
      ],
      answer: 2,
      explanation: "Mantissa bits determine numerical precision."
    },

    {
      question: "Floating-point arithmetic is:",
      options: [
        "Always exact",
        "Always associative",
        "Not always associative",
        "Integer only"
      ],
      answer: 2,
      explanation: "Rounding destroys associativity."
    },

    {
      question: "Normalization improves:",
      options: [
        "Precision",
        "RAM",
        "CPU frequency",
        "Cache"
      ],
      answer: 0,
      explanation: "Normalization maximizes significant digits."
    },

    {
      question: "Subtracting nearly equal numbers may cause:",
      options: [
        "Overflow",
        "Cancellation",
        "Normalization",
        "Compression"
      ],
      answer: 1,
      explanation: "This is called catastrophic cancellation."
    }

  ],

  /* =========================
     l2 - Numerical Errors
  ========================= */

  l2: [

    {
      question: "Absolute error is:",
      options: [
        "|True - Approximate|",
        "Approximate / True",
        "Percentage error",
        "Relative error"
      ],
      answer: 0,
      explanation: "Absolute error measures deviation magnitude."
    },

    {
      question: "Relative error is:",
      options: [
        "Absolute error divided by true value",
        "Absolute error multiplied by true value",
        "Approximate value",
        "Machine epsilon"
      ],
      answer: 0,
      explanation: "Relative error scales error by the true value."
    },

    {
      question: "Round-off error arises because:",
      options: [
        "Algorithms fail",
        "Finite precision exists",
        "RAM is low",
        "Operating systems differ"
      ],
      answer: 1,
      explanation: "Finite representation causes rounding."
    },

    {
      question: "Truncation error occurs when:",
      options: [
        "Infinite process is approximated",
        "CPU overheats",
        "RAM is full",
        "Compiler fails"
      ],
      answer: 0,
      explanation: "Approximations introduce truncation error."
    },

    {
      question: "An ill-conditioned problem:",
      options: [
        "Is always unstable",
        "Produces large output changes from small input changes",
        "Has no solution",
        "Requires interpolation"
      ],
      answer: 1,
      explanation: "Ill-conditioned problems amplify input errors."
    }

  ],

  /* =========================
     l27 - Binary Number System
  ========================= */

  l27: [

    {
      question: "Binary uses which base?",
      options: ["2", "8", "10", "16"],
      answer: 0,
      explanation: "Binary is base-2."
    },

    {
      question: "Which digit is invalid in binary?",
      options: ["0", "1", "2", "Both 0 and 1"],
      answer: 2,
      explanation: "Binary contains only 0 and 1."
    },

    {
      question: "1011₂ equals:",
      options: ["9", "10", "11", "12"],
      answer: 2,
      explanation: "8 + 2 + 1 = 11."
    },

    {
      question: "MSB means:",
      options: [
        "Most Significant Bit",
        "Minimum Significant Bit",
        "Memory Storage Bit",
        "Main System Bit"
      ],
      answer: 0,
      explanation: "MSB is the leftmost significant bit."
    },

    {
      question: "The place values in binary are powers of:",
      options: ["2", "8", "10", "16"],
      answer: 0,
      explanation: "Binary is base 2."
    }

  ],

  /* =========================
     l28 - Decimal To Binary
  ========================= */

  l28: [

    {
      question: "Decimal to binary conversion uses:",
      options: [
        "Repeated division by 2",
        "Repeated multiplication by 10",
        "Repeated subtraction",
        "Repeated addition"
      ],
      answer: 0,
      explanation: "Successive division by 2 generates binary digits."
    },

    {
      question: "13 in binary is:",
      options: [
        "1011",
        "1101",
        "1110",
        "1001"
      ],
      answer: 1,
      explanation: "13 = 8 + 4 + 1."
    },

    {
      question: "25 in binary is:",
      options: [
        "11001",
        "10110",
        "11100",
        "10011"
      ],
      answer: 0,
      explanation: "16 + 8 + 1."
    },

    {
      question: "0.5 in binary equals:",
      options: [
        "0.1",
        "0.01",
        "0.11",
        "1.0"
      ],
      answer: 0,
      explanation: "0.5 = 1/2."
    },

    {
      question: "Fractional decimal conversion uses:",
      options: [
        "Multiply by 2",
        "Divide by 2",
        "Multiply by 10",
        "Subtract 2"
      ],
      answer: 0,
      explanation: "Repeated multiplication by 2."
    }

  ],

  /* =========================
     l29 - Binary Arithmetic
  ========================= */

  l29: [

    {
      question: "1 + 1 in binary equals:",
      options: ["0", "1", "10", "11"],
      answer: 2,
      explanation: "Sum 0, carry 1."
    },

    {
      question: "1 + 1 + 1 equals:",
      options: ["10", "11", "100", "101"],
      answer: 1,
      explanation: "3 decimal = 11 binary."
    },

    {
      question: "101₂ × 10₂ equals:",
      options: [
        "111₂",
        "1000₂",
        "1010₂",
        "1100₂"
      ],
      answer: 2,
      explanation: "5 × 2 = 10 decimal."
    },

    {
      question: "Left shift by one bit is equivalent to:",
      options: [
        "Divide by 2",
        "Multiply by 2",
        "Complement",
        "Subtract 1"
      ],
      answer: 1,
      explanation: "Left shift multiplies by 2."
    },

    {
      question: "Most computers represent signed integers using:",
      options: [
        "BCD",
        "Sign magnitude",
        "1's complement",
        "2's complement"
      ],
      answer: 3,
      explanation: "Modern systems use 2's complement."
    }

  ],

  /* =========================
     l30 - Fixed Point Representation
  ========================= */

  l30: [

    {
      question: "In fixed-point representation the binary point is:",
      options: [
        "Variable",
        "Fixed",
        "Hidden",
        "Removed"
      ],
      answer: 1,
      explanation: "Its position remains fixed."
    },

    {
      question: "Fixed-point arithmetic is generally:",
      options: [
        "Slower",
        "Faster",
        "Impossible",
        "Random"
      ],
      answer: 1,
      explanation: "It is computationally simpler."
    },

    {
      question: "Main limitation of fixed-point systems:",
      options: [
        "Infinite precision",
        "Limited dynamic range",
        "Unlimited range",
        "No overflow"
      ],
      answer: 1,
      explanation: "Range is restricted."
    },

    {
      question: "Increasing fractional bits improves:",
      options: [
        "Precision",
        "Range",
        "Memory",
        "Exponent"
      ],
      answer: 0,
      explanation: "More fractional bits increase precision."
    },

    {
      question: "Q-format is associated with:",
      options: [
        "Floating-point",
        "Fixed-point",
        "Complex numbers",
        "Hexadecimal"
      ],
      answer: 1,
      explanation: "Q-format is widely used for fixed-point numbers."
    }

  ],

  /* =========================
     l31 - IEEE754
  ========================= */

  l31: [

    {
      question: "IEEE 754 defines:",
      options: [
        "Integer arithmetic",
        "Floating-point arithmetic",
        "Databases",
        "Networking"
      ],
      answer: 1,
      explanation: "IEEE 754 is the floating-point standard."
    },

    {
      question: "Single precision uses:",
      options: [
        "16 bits",
        "32 bits",
        "64 bits",
        "128 bits"
      ],
      answer: 1,
      explanation: "Single precision = 32 bits."
    },

    {
      question: "Double precision uses:",
      options: [
        "32 bits",
        "48 bits",
        "64 bits",
        "128 bits"
      ],
      answer: 2,
      explanation: "Double precision = 64 bits."
    },

    {
      question: "Exponent bias in single precision:",
      options: [
        "63",
        "127",
        "255",
        "1023"
      ],
      answer: 1,
      explanation: "Bias = 127."
    },

    {
      question: "Exponent all 1s and fraction non-zero represent:",
      options: [
        "Infinity",
        "Zero",
        "NaN",
        "Overflow"
      ],
      answer: 2,
      explanation: "NaN = Not a Number."
    }

  ],

  /* =========================
     l32 - Machine Epsilon
  ========================= */

  l32: [

    {
      question: "Machine epsilon is:",
      options: [
        "Largest number",
        "Smallest value changing 1 when added",
        "Maximum exponent",
        "Overflow value"
      ],
      answer: 1,
      explanation: "It measures floating-point precision."
    },

    {
      question: "Machine epsilon primarily measures:",
      options: [
        "Range",
        "Precision",
        "RAM",
        "Speed"
      ],
      answer: 1,
      explanation: "It quantifies precision."
    },

    {
      question: "Smaller epsilon means:",
      options: [
        "Lower precision",
        "Higher precision",
        "Smaller memory",
        "Larger overflow"
      ],
      answer: 1,
      explanation: "Smaller epsilon means finer resolution."
    },

    {
      question: "Machine epsilon depends mainly on:",
      options: [
        "Mantissa bits",
        "CPU speed",
        "RAM size",
        "Cache"
      ],
      answer: 0,
      explanation: "Mantissa length controls precision."
    },

    {
      question: "Machine epsilon is important because:",
      options: [
        "It estimates achievable accuracy",
        "It removes truncation error",
        "It guarantees convergence",
        "It increases speed"
      ],
      answer: 0,
      explanation: "Numerical accuracy is limited by machine precision."
    }

  ],

  /* =========================
     l3 - Bisection Method
  ========================= */

  l3: [

    {
      question: "The Bisection Method is based on:",
      options: [
        "Taylor Series",
        "Intermediate Value Theorem",
        "Least Squares",
        "Fourier Analysis"
      ],
      answer: 1,
      explanation: "The method relies on the Intermediate Value Theorem."
    },

    {
      question: "For Bisection Method to work, f(a) and f(b) must:",
      options: [
        "Be equal",
        "Be positive",
        "Have opposite signs",
        "Be derivatives"
      ],
      answer: 2,
      explanation: "A sign change indicates a root in the interval."
    },

    {
      question: "Each iteration of Bisection:",
      options: [
        "Doubles interval size",
        "Halves interval size",
        "Squares interval size",
        "Keeps interval unchanged"
      ],
      answer: 1,
      explanation: "The interval is repeatedly halved."
    },

    {
      question: "Bisection Method convergence is:",
      options: [
        "Linear",
        "Quadratic",
        "Cubic",
        "Exponential"
      ],
      answer: 0,
      explanation: "Bisection converges linearly."
    },

    {
      question: "Main advantage of Bisection Method:",
      options: [
        "Fastest method",
        "Guaranteed convergence",
        "No function evaluation",
        "No interval needed"
      ],
      answer: 1,
      explanation: "It converges whenever assumptions are satisfied."
    }

  ],

  /* =========================
     l4 - Newton Raphson Method
  ========================= */

  l4: [

    {
      question: "Newton-Raphson Method uses:",
      options: [
        "Integrals",
        "Derivatives",
        "Matrices",
        "Fourier Series"
      ],
      answer: 1,
      explanation: "Derivative information is required."
    },

    {
      question: "Newton-Raphson iteration formula is:",
      options: [
        "x + f(x)",
        "x - f(x)",
        "x - f(x)/f'(x)",
        "f(x)/x"
      ],
      answer: 2,
      explanation: "This is the standard Newton iteration formula."
    },

    {
      question: "Newton-Raphson usually converges:",
      options: [
        "Linearly",
        "Quadratically",
        "Cubically",
        "Never"
      ],
      answer: 1,
      explanation: "Near the root, convergence is quadratic."
    },

    {
      question: "Newton Method may fail when:",
      options: [
        "f'(x)=0",
        "f(x)>0",
        "x<0",
        "x>0"
      ],
      answer: 0,
      explanation: "Division by zero occurs if derivative becomes zero."
    },

    {
      question: "Compared to Bisection, Newton is generally:",
      options: [
        "Slower",
        "Faster",
        "Identical",
        "Random"
      ],
      answer: 1,
      explanation: "Newton typically converges much faster."
    }

  ],

  /* =========================
     l8 - False Position Method
  ========================= */

  l8: [

    {
      question: "False Position Method is also known as:",
      options: [
        "Newton Method",
        "Regula Falsi",
        "Jacobi Method",
        "Euler Method"
      ],
      answer: 1,
      explanation: "Regula Falsi is another name for False Position."
    },

    {
      question: "False Position maintains:",
      options: [
        "Bracketing interval",
        "Derivative table",
        "Matrix form",
        "Frequency spectrum"
      ],
      answer: 0,
      explanation: "The root always remains bracketed."
    },

    {
      question: "False Position uses:",
      options: [
        "Parabolic interpolation",
        "Linear interpolation",
        "Spline interpolation",
        "Cubic interpolation"
      ],
      answer: 1,
      explanation: "A straight line is drawn through interval endpoints."
    },

    {
      question: "False Position requires:",
      options: [
        "Derivative",
        "Opposite signs at endpoints",
        "Matrices",
        "Taylor series"
      ],
      answer: 1,
      explanation: "A sign change must exist."
    },

    {
      question: "Compared with Bisection, False Position is often:",
      options: [
        "Faster",
        "Slower",
        "Identical",
        "Impossible"
      ],
      answer: 0,
      explanation: "It often converges faster."
    }

  ],

  /* =========================
     l10 - Fixed Point Iteration
  ========================= */

  l10: [

    {
      question: "Fixed Point Iteration solves:",
      options: [
        "g(x)=x",
        "Ax=b",
        "dy/dx=f(x)",
        "FFT equations"
      ],
      answer: 0,
      explanation: "The root is found from x = g(x)."
    },

    {
      question: "Iteration formula is:",
      options: [
        "xₙ=g(xₙ)",
        "xₙ₊₁=g(xₙ)",
        "g(x)=0",
        "x=f(x)"
      ],
      answer: 1,
      explanation: "Next approximation is obtained from current one."
    },

    {
      question: "Convergence depends largely on:",
      options: [
        "|g'(x)|",
        "|f(x)|",
        "Matrix rank",
        "Determinant"
      ],
      answer: 0,
      explanation: "Derivative magnitude controls convergence."
    },

    {
      question: "A common convergence condition is:",
      options: [
        "|g'(x)| < 1",
        "|g'(x)| > 1",
        "g'(x)=5",
        "g(x)=0"
      ],
      answer: 0,
      explanation: "This condition ensures convergence near the root."
    },

    {
      question: "Fixed Point Iteration is also called:",
      options: [
        "Successive Approximation",
        "Gaussian Elimination",
        "Differentiation",
        "Interpolation"
      ],
      answer: 0,
      explanation: "It is often known as successive approximation."
    }

  ],

  /* =========================
     l11 - Secant Method
  ========================= */

  l11: [

    {
      question: "Secant Method requires:",
      options: [
        "One initial guess",
        "Two initial guesses",
        "Three initial guesses",
        "No initial guess"
      ],
      answer: 1,
      explanation: "Two starting values are required."
    },

    {
      question: "Secant Method approximates:",
      options: [
        "Derivative",
        "Integral",
        "Matrix inverse",
        "FFT"
      ],
      answer: 0,
      explanation: "The derivative is approximated numerically."
    },

    {
      question: "Secant Method compared to Newton:",
      options: [
        "Needs derivative",
        "Does not need derivative",
        "Needs matrix",
        "Needs interpolation table"
      ],
      answer: 1,
      explanation: "No explicit derivative calculation is needed."
    },

    {
      question: "Secant Method uses:",
      options: [
        "Tangent line",
        "Secant line",
        "Parabola",
        "Spline"
      ],
      answer: 1,
      explanation: "A secant line approximates the tangent."
    },

    {
      question: "Secant convergence is generally:",
      options: [
        "Superlinear",
        "Linear",
        "No convergence",
        "Constant"
      ],
      answer: 0,
      explanation: "Its convergence rate is superlinear."
    }

  ],

    /* =========================
     l5 - Lagrange Interpolation
  ========================= */

  l5: [

    {
      question: "Lagrange Interpolation constructs:",
      options: [
        "A differential equation",
        "A polynomial passing through known points",
        "A matrix decomposition",
        "A Fourier spectrum"
      ],
      answer: 1,
      explanation: "Lagrange interpolation creates a polynomial through all data points."
    },

    {
      question: "Lagrange interpolation requires:",
      options: [
        "Equally spaced points",
        "Distinct data points",
        "Derivative values",
        "Matrix inversion"
      ],
      answer: 1,
      explanation: "Only distinct x-values are required."
    },

    {
      question: "Lagrange basis polynomials are usually denoted by:",
      options: [
        "Li(x)",
        "Fi(x)",
        "Pi(x)",
        "Gi(x)"
      ],
      answer: 0,
      explanation: "The basis functions are denoted Li(x)."
    },

    {
      question: "Lagrange interpolation is primarily used for:",
      options: [
        "Approximation between known data points",
        "Integration",
        "Differentiation",
        "Optimization"
      ],
      answer: 0,
      explanation: "Interpolation estimates values within known data."
    },

    {
      question: "The resulting polynomial passes through:",
      options: [
        "Some points",
        "Only endpoints",
        "All given points",
        "No points"
      ],
      answer: 2,
      explanation: "The polynomial exactly matches every given point."
    }

  ],

  /* =========================
     l15 - Newton Forward Interpolation
  ========================= */

  l15: [

    {
      question: "Newton Forward Interpolation is used when the required value lies:",
      options: [
        "Near the beginning of the table",
        "Near the end of the table",
        "Outside the table",
        "At infinity"
      ],
      answer: 0,
      explanation: "Forward interpolation is best near the start."
    },

    {
      question: "Newton Forward requires data points to be:",
      options: [
        "Randomly spaced",
        "Equally spaced",
        "Negative",
        "Complex"
      ],
      answer: 1,
      explanation: "Equal spacing is required."
    },

    {
      question: "The method uses:",
      options: [
        "Forward differences",
        "Backward differences",
        "Partial derivatives",
        "Integrals"
      ],
      answer: 0,
      explanation: "Forward difference tables are used."
    },

    {
      question: "The variable u is defined as:",
      options: [
        "(x−x₀)/h",
        "(x+x₀)/h",
        "xh",
        "h/x"
      ],
      answer: 0,
      explanation: "u measures distance from the first tabulated point."
    },

    {
      question: "Newton Forward interpolation belongs to:",
      options: [
        "Numerical integration",
        "Interpolation methods",
        "Regression methods",
        "Root finding methods"
      ],
      answer: 1,
      explanation: "It is an interpolation technique."
    }

  ],

  /* =========================
     l16 - Newton Backward Interpolation
  ========================= */

  l16: [

    {
      question: "Newton Backward Interpolation is most suitable when x lies:",
      options: [
        "Near beginning",
        "Near middle",
        "Near end",
        "Outside range"
      ],
      answer: 2,
      explanation: "Backward interpolation is used near the end."
    },

    {
      question: "Newton Backward uses:",
      options: [
        "Forward differences",
        "Backward differences",
        "Derivatives",
        "Integrals"
      ],
      answer: 1,
      explanation: "Backward difference tables are used."
    },

    {
      question: "Data points must be:",
      options: [
        "Equally spaced",
        "Unequally spaced",
        "Prime numbers",
        "Complex numbers"
      ],
      answer: 0,
      explanation: "Equal spacing is required."
    },

    {
      question: "The formula expands around:",
      options: [
        "First point",
        "Last point",
        "Middle point",
        "Origin"
      ],
      answer: 1,
      explanation: "Backward interpolation starts from the last point."
    },

    {
      question: "Newton Backward belongs to:",
      options: [
        "Interpolation",
        "Differentiation",
        "Regression",
        "Optimization"
      ],
      answer: 0,
      explanation: "It is an interpolation technique."
    }

  ],

  /* =========================
     l22 - Newton Divided Difference
  ========================= */

  l22: [

    {
      question: "Newton Divided Difference can handle:",
      options: [
        "Only equal spacing",
        "Unequally spaced points",
        "Only two points",
        "Matrices only"
      ],
      answer: 1,
      explanation: "It works for unequal intervals."
    },

    {
      question: "The method is based on:",
      options: [
        "Divided differences",
        "Forward differences",
        "Backward differences",
        "Euler differences"
      ],
      answer: 0,
      explanation: "Divided differences are used to build the polynomial."
    },

    {
      question: "Newton Divided Difference generates:",
      options: [
        "Interpolation polynomial",
        "Differential equation",
        "Regression model",
        "FFT spectrum"
      ],
      answer: 0,
      explanation: "The method produces an interpolation polynomial."
    },

    {
      question: "A key advantage is:",
      options: [
        "Handles unequal spacing",
        "Needs no data",
        "Needs no calculations",
        "Never changes"
      ],
      answer: 0,
      explanation: "It is suitable for unequal intervals."
    },

    {
      question: "Adding a new point generally requires:",
      options: [
        "Recomputing everything",
        "Extending the table",
        "Deleting old points",
        "Changing coordinates"
      ],
      answer: 1,
      explanation: "The table can be extended efficiently."
    }

  ],

  /* =========================
     l23 - Cubic Spline Interpolation
  ========================= */

  l23: [

    {
      question: "A cubic spline consists of:",
      options: [
        "Straight lines",
        "Quadratic segments",
        "Cubic polynomial segments",
        "Exponential functions"
      ],
      answer: 2,
      explanation: "Each interval uses a cubic polynomial."
    },

    {
      question: "Cubic splines provide:",
      options: [
        "Smooth interpolation",
        "Random interpolation",
        "Discrete interpolation",
        "No interpolation"
      ],
      answer: 0,
      explanation: "Splines ensure smooth transitions."
    },

    {
      question: "At spline junctions, continuity is maintained in:",
      options: [
        "Function only",
        "Function and derivatives",
        "Function only at endpoints",
        "Nothing"
      ],
      answer: 1,
      explanation: "Both first and second derivative continuity are usually enforced."
    },

    {
      question: "Spline interpolation generally avoids:",
      options: [
        "Runge phenomenon",
        "Matrices",
        "Polynomials",
        "Functions"
      ],
      answer: 0,
      explanation: "Splines reduce oscillations common in high-degree polynomials."
    },

    {
      question: "Natural cubic spline assumes:",
      options: [
        "Second derivative zero at endpoints",
        "First derivative zero at endpoints",
        "Function zero at endpoints",
        "Infinite slope"
      ],
      answer: 0,
      explanation: "Natural splines set endpoint curvature to zero."
    }

  ],

    /* =========================
     l12 - Forward Difference Method
  ========================= */

  l12: [

    {
      question: "Forward Difference is primarily used to approximate:",
      options: [
        "Integrals",
        "Derivatives",
        "Roots",
        "Regression coefficients"
      ],
      answer: 1,
      explanation: "Forward Difference approximates derivatives numerically."
    },

    {
      question: "The Forward Difference formula uses:",
      options: [
        "Current point and next point",
        "Current point and previous point",
        "Only one point",
        "Infinite points"
      ],
      answer: 0,
      explanation: "The method uses the next neighboring point."
    },

    {
      question: "Forward Difference is most accurate near:",
      options: [
        "Beginning of data table",
        "Middle of data table",
        "End of data table",
        "Nowhere"
      ],
      answer: 0,
      explanation: "It is commonly used near the beginning of data."
    },

    {
      question: "Forward Difference is an example of:",
      options: [
        "Numerical differentiation",
        "Interpolation",
        "Integration",
        "Optimization"
      ],
      answer: 0,
      explanation: "It belongs to numerical differentiation techniques."
    },

    {
      question: "Reducing step size h generally:",
      options: [
        "Improves accuracy",
        "Reduces accuracy",
        "Has no effect",
        "Causes integration"
      ],
      answer: 0,
      explanation: "Smaller step sizes usually improve approximation accuracy."
    }

  ],

  /* =========================
     l13 - Backward Difference Method
  ========================= */

  l13: [

    {
      question: "Backward Difference approximates:",
      options: [
        "Derivatives",
        "Integrals",
        "Roots",
        "Regression models"
      ],
      answer: 0,
      explanation: "Backward Difference is a derivative approximation method."
    },

    {
      question: "Backward Difference uses:",
      options: [
        "Current point and previous point",
        "Current point and next point",
        "Only one point",
        "Infinite points"
      ],
      answer: 0,
      explanation: "It uses information from the previous point."
    },

    {
      question: "Backward Difference is often used near:",
      options: [
        "Beginning of dataset",
        "Middle of dataset",
        "End of dataset",
        "Origin only"
      ],
      answer: 2,
      explanation: "It is suitable near the end of tabulated data."
    },

    {
      question: "Backward Difference belongs to:",
      options: [
        "Numerical differentiation",
        "Interpolation",
        "Regression",
        "Integration"
      ],
      answer: 0,
      explanation: "It is a numerical differentiation technique."
    },

    {
      question: "Backward Difference error decreases when:",
      options: [
        "Step size decreases",
        "Step size increases",
        "Data is deleted",
        "Matrix size increases"
      ],
      answer: 0,
      explanation: "Smaller step sizes improve accuracy."
    }

  ],

  /* =========================
     l14 - Central Difference Method
  ========================= */

  l14: [

    {
      question: "Central Difference uses:",
      options: [
        "Only forward points",
        "Only backward points",
        "Points on both sides",
        "No neighboring points"
      ],
      answer: 2,
      explanation: "Central Difference uses data from both sides of the target point."
    },

    {
      question: "Compared with Forward Difference, Central Difference is usually:",
      options: [
        "Less accurate",
        "More accurate",
        "Identical",
        "Impossible"
      ],
      answer: 1,
      explanation: "Central Difference generally provides higher accuracy."
    },

    {
      question: "Central Difference is used for:",
      options: [
        "Derivative approximation",
        "Integration",
        "Root finding",
        "Regression"
      ],
      answer: 0,
      explanation: "It approximates derivatives numerically."
    },

    {
      question: "Central Difference requires:",
      options: [
        "One neighboring point",
        "Two neighboring points",
        "No neighboring points",
        "A matrix"
      ],
      answer: 1,
      explanation: "One point on each side is needed."
    },

    {
      question: "Central Difference error is typically:",
      options: [
        "Lower than Forward Difference",
        "Higher than Forward Difference",
        "Infinite",
        "Random"
      ],
      answer: 0,
      explanation: "Central Difference usually has lower truncation error."
    }

  ],

    /* =========================
     l6 - Trapezoidal Rule
  ========================= */

  l6: [

    {
      question: "The Trapezoidal Rule approximates:",
      options: [
        "Derivatives",
        "Integrals",
        "Roots",
        "Matrices"
      ],
      answer: 1,
      explanation: "The Trapezoidal Rule is a numerical integration method."
    },

    {
      question: "The area under a curve is approximated using:",
      options: [
        "Rectangles",
        "Triangles",
        "Trapezoids",
        "Circles"
      ],
      answer: 2,
      explanation: "Each interval is treated as a trapezoid."
    },

    {
      question: "Trapezoidal Rule is based on:",
      options: [
        "Linear approximation",
        "Quadratic approximation",
        "Cubic approximation",
        "Exponential approximation"
      ],
      answer: 0,
      explanation: "The function is approximated by straight lines."
    },

    {
      question: "Increasing the number of intervals generally:",
      options: [
        "Improves accuracy",
        "Reduces accuracy",
        "Has no effect",
        "Makes integration impossible"
      ],
      answer: 0,
      explanation: "Smaller intervals improve approximation."
    },

    {
      question: "The Composite Trapezoidal Rule uses:",
      options: [
        "Multiple subintervals",
        "One interval only",
        "Matrices",
        "Derivatives"
      ],
      answer: 0,
      explanation: "The interval is divided into many smaller sections."
    }

  ],

  /* =========================
     l9 - Simpson's 1/3 Rule
  ========================= */

  l9: [

    {
      question: "Simpson's 1/3 Rule approximates the curve using:",
      options: [
        "Straight lines",
        "Parabolas",
        "Cubic splines",
        "Exponentials"
      ],
      answer: 1,
      explanation: "Quadratic polynomials are used."
    },

    {
      question: "Simpson's 1/3 Rule generally provides:",
      options: [
        "Higher accuracy than Trapezoidal Rule",
        "Lower accuracy",
        "Identical accuracy",
        "No accuracy"
      ],
      answer: 0,
      explanation: "Parabolic approximation is usually more accurate."
    },

    {
      question: "The number of intervals must be:",
      options: [
        "Odd",
        "Even",
        "Prime",
        "Negative"
      ],
      answer: 1,
      explanation: "Simpson's 1/3 Rule requires an even number of intervals."
    },

    {
      question: "Simpson's 1/3 Rule belongs to:",
      options: [
        "Numerical Integration",
        "Interpolation",
        "Regression",
        "Root Finding"
      ],
      answer: 0,
      explanation: "It is one of the most important integration methods."
    },

    {
      question: "Compared to Trapezoidal Rule, Simpson's 1/3 Rule uses:",
      options: [
        "Linear fitting",
        "Quadratic fitting",
        "No fitting",
        "Random fitting"
      ],
      answer: 1,
      explanation: "A parabola is fitted through points."
    }

  ],

  /* =========================
     l26 - Simpson's 3/8 Rule
  ========================= */

  l26: [

    {
      question: "Simpson's 3/8 Rule uses:",
      options: [
        "Two intervals",
        "Three intervals",
        "Four intervals",
        "One interval"
      ],
      answer: 1,
      explanation: "The basic form uses three equal subintervals."
    },

    {
      question: "Simpson's 3/8 Rule approximates the function using:",
      options: [
        "Linear functions",
        "Quadratic functions",
        "Cubic polynomials",
        "Exponentials"
      ],
      answer: 2,
      explanation: "Cubic polynomial approximation is employed."
    },

    {
      question: "The number of intervals should be a multiple of:",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      answer: 1,
      explanation: "Composite Simpson's 3/8 Rule requires multiples of three."
    },

    {
      question: "Simpson's 3/8 Rule is classified under:",
      options: [
        "Differentiation",
        "Interpolation",
        "Numerical Integration",
        "Regression"
      ],
      answer: 2,
      explanation: "It is an integration technique."
    },

    {
      question: "Simpson's 3/8 Rule is often used when:",
      options: [
        "Intervals fit the multiple-of-3 requirement",
        "Derivatives are unavailable",
        "Matrices are singular",
        "No data exists"
      ],
      answer: 0,
      explanation: "It is especially useful when interval count suits the rule."
    }

  ],

    /* =========================
     l7 - Euler Method
  ========================= */

  l7: [

    {
      question: "Euler Method is used to solve:",
      options: [
        "Linear equations",
        "Differential equations",
        "Integrals",
        "Matrices"
      ],
      answer: 1,
      explanation: "Euler Method provides numerical solutions of ordinary differential equations."
    },

    {
      question: "Euler Method uses information from:",
      options: [
        "Current point only",
        "Future points",
        "Entire dataset",
        "Random points"
      ],
      answer: 0,
      explanation: "The next value is estimated using the current point and slope."
    },

    {
      question: "Euler Method is based on:",
      options: [
        "Taylor Series first-order approximation",
        "Quadratic interpolation",
        "FFT",
        "Regression"
      ],
      answer: 0,
      explanation: "It comes directly from the first-order Taylor expansion."
    },

    {
      question: "Reducing step size h generally:",
      options: [
        "Improves accuracy",
        "Reduces accuracy",
        "Has no effect",
        "Stops computation"
      ],
      answer: 0,
      explanation: "Smaller step sizes reduce truncation error."
    },

    {
      question: "A major limitation of Euler Method is:",
      options: [
        "High error accumulation",
        "Cannot solve ODEs",
        "Requires matrices",
        "Needs FFT"
      ],
      answer: 0,
      explanation: "Errors can accumulate significantly over many steps."
    }

  ],

  /* =========================
     l25 - Modified Euler Method
  ========================= */

  l25: [

    {
      question: "Modified Euler Method improves upon:",
      options: [
        "Newton Method",
        "Euler Method",
        "FFT",
        "Trapezoidal Rule"
      ],
      answer: 1,
      explanation: "Modified Euler was developed to improve Euler accuracy."
    },

    {
      question: "Modified Euler estimates slope using:",
      options: [
        "Beginning only",
        "End only",
        "Average slope",
        "Random slope"
      ],
      answer: 2,
      explanation: "It uses an average slope estimate for better accuracy."
    },

    {
      question: "Modified Euler is also known as:",
      options: [
        "Heun's Method",
        "Bisection Method",
        "Jacobi Method",
        "FFT"
      ],
      answer: 0,
      explanation: "Heun's Method is a common name."
    },

    {
      question: "Compared to Euler Method, Modified Euler is:",
      options: [
        "More accurate",
        "Less accurate",
        "Identical",
        "Impossible to compute"
      ],
      answer: 0,
      explanation: "Using average slope improves accuracy."
    },

    {
      question: "Modified Euler belongs to:",
      options: [
        "Numerical ODE methods",
        "Interpolation",
        "Regression",
        "Root finding"
      ],
      answer: 0,
      explanation: "It is a numerical differential equation solver."
    }

  ],

  /* =========================
     l24 - Runge-Kutta 2nd Order
  ========================= */

  l24: [

    {
      question: "RK2 stands for:",
      options: [
        "Runge-Kutta Second Order",
        "Random Kernel 2",
        "Recursive Kernel 2",
        "Rank 2 Matrix"
      ],
      answer: 0,
      explanation: "RK2 is the second-order Runge-Kutta method."
    },

    {
      question: "RK2 improves accuracy by using:",
      options: [
        "Multiple slope estimates",
        "No slopes",
        "Matrices only",
        "FFT"
      ],
      answer: 0,
      explanation: "It combines multiple slope calculations."
    },

    {
      question: "RK2 is generally more accurate than:",
      options: [
        "Euler Method",
        "RK4",
        "FFT",
        "Spline interpolation"
      ],
      answer: 0,
      explanation: "RK2 reduces truncation error compared to Euler."
    },

    {
      question: "RK2 belongs to:",
      options: [
        "ODE Solvers",
        "Interpolation Methods",
        "Regression Techniques",
        "Integration Rules"
      ],
      answer: 0,
      explanation: "It is used to solve differential equations."
    },

    {
      question: "RK2 typically uses:",
      options: [
        "Two slope evaluations",
        "One slope evaluation",
        "Ten slope evaluations",
        "No evaluations"
      ],
      answer: 0,
      explanation: "The second-order method generally evaluates two slopes."
    }

  ],

  /* =========================
     l17 - Runge-Kutta 4th Order
  ========================= */

  l17: [

    {
      question: "RK4 stands for:",
      options: [
        "Runge-Kutta Fourth Order",
        "Recursive Kernel Four",
        "Random K Method",
        "Rank Four Matrix"
      ],
      answer: 0,
      explanation: "RK4 is the fourth-order Runge-Kutta method."
    },

    {
      question: "RK4 typically evaluates how many slopes per step?",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 3,
      explanation: "RK4 uses four slope evaluations."
    },

    {
      question: "RK4 is popular because it offers:",
      options: [
        "High accuracy",
        "No computation",
        "Infinite precision",
        "Matrix inversion"
      ],
      answer: 0,
      explanation: "RK4 provides an excellent balance of accuracy and cost."
    },

    {
      question: "RK4 is mainly used for:",
      options: [
        "Differential equations",
        "Regression",
        "Interpolation",
        "FFT"
      ],
      answer: 0,
      explanation: "RK4 is one of the most widely used ODE solvers."
    },

    {
      question: "Compared to Euler Method, RK4 is:",
      options: [
        "Much more accurate",
        "Less accurate",
        "Identical",
        "Not related"
      ],
      answer: 0,
      explanation: "RK4 dramatically reduces numerical error."
    }

  ],

    /* =========================
     l18 - Gauss Jordan Method
  ========================= */

  l18: [

    {
      question: "Gauss-Jordan Method is used to:",
      options: [
        "Solve systems of linear equations",
        "Integrate functions",
        "Find derivatives",
        "Perform FFT"
      ],
      answer: 0,
      explanation: "Gauss-Jordan solves linear systems directly."
    },

    {
      question: "Gauss-Jordan elimination transforms a matrix into:",
      options: [
        "Diagonal form",
        "Identity form",
        "Triangular form",
        "Random form"
      ],
      answer: 1,
      explanation: "The coefficient matrix is reduced to identity form."
    },

    {
      question: "Gauss-Jordan uses:",
      options: [
        "Row operations",
        "Differentiation",
        "Integration",
        "Interpolation"
      ],
      answer: 0,
      explanation: "Elementary row operations are applied."
    },

    {
      question: "A major advantage of Gauss-Jordan is:",
      options: [
        "Direct solution",
        "No arithmetic",
        "No matrix required",
        "No variables needed"
      ],
      answer: 0,
      explanation: "The solution is obtained directly."
    },

    {
      question: "Gauss-Jordan belongs to:",
      options: [
        "Linear algebra methods",
        "Regression",
        "ODE solvers",
        "Interpolation"
      ],
      answer: 0,
      explanation: "It is a classical linear algebra technique."
    }

  ],

  /* =========================
     l19 - LU Decomposition
  ========================= */

  l19: [

    {
      question: "LU Decomposition factors a matrix into:",
      options: [
        "L and U matrices",
        "A and B matrices",
        "X and Y matrices",
        "P and Q matrices"
      ],
      answer: 0,
      explanation: "A matrix is decomposed into Lower and Upper triangular matrices."
    },

    {
      question: "The matrix L is:",
      options: [
        "Lower triangular",
        "Upper triangular",
        "Diagonal",
        "Identity"
      ],
      answer: 0,
      explanation: "L contains entries below the diagonal."
    },

    {
      question: "The matrix U is:",
      options: [
        "Lower triangular",
        "Upper triangular",
        "Identity",
        "Zero matrix"
      ],
      answer: 1,
      explanation: "U contains entries above the diagonal."
    },

    {
      question: "LU Decomposition is useful when:",
      options: [
        "Solving many systems with same matrix",
        "Finding derivatives",
        "Computing FFT",
        "Performing interpolation"
      ],
      answer: 0,
      explanation: "Factorization can be reused efficiently."
    },

    {
      question: "LU Decomposition belongs to:",
      options: [
        "Linear algebra",
        "Regression",
        "Integration",
        "ODE solving"
      ],
      answer: 0,
      explanation: "It is a matrix solution technique."
    }

  ],

  /* =========================
     l20 - Gauss Elimination
  ========================= */

  l20: [

    {
      question: "Gauss Elimination converts a system into:",
      options: [
        "Upper triangular form",
        "Identity form",
        "Lower triangular form",
        "Diagonal form"
      ],
      answer: 0,
      explanation: "The system is reduced to upper triangular form."
    },

    {
      question: "After elimination, solutions are found using:",
      options: [
        "Back substitution",
        "Forward interpolation",
        "FFT",
        "Regression"
      ],
      answer: 0,
      explanation: "Back substitution computes unknown values."
    },

    {
      question: "Gauss Elimination uses:",
      options: [
        "Row operations",
        "Integration",
        "Differentiation",
        "Splines"
      ],
      answer: 0,
      explanation: "Row operations simplify the matrix."
    },

    {
      question: "Gauss Elimination is primarily used for:",
      options: [
        "Linear systems",
        "Differential equations",
        "Interpolation",
        "Root finding"
      ],
      answer: 0,
      explanation: "It solves systems of linear equations."
    },

    {
      question: "The final matrix before substitution is:",
      options: [
        "Upper triangular",
        "Identity",
        "Zero",
        "Diagonal only"
      ],
      answer: 0,
      explanation: "Back substitution starts from an upper triangular system."
    }

  ],

  /* =========================
     l21 - Gauss Seidel Method
  ========================= */

  l21: [

    {
      question: "Gauss-Seidel is a:",
      options: [
        "Direct method",
        "Iterative method",
        "Interpolation method",
        "Integration method"
      ],
      answer: 1,
      explanation: "Gauss-Seidel computes successive approximations."
    },

    {
      question: "Gauss-Seidel is used for solving:",
      options: [
        "Linear systems",
        "Fourier transforms",
        "Differential equations only",
        "Integrals"
      ],
      answer: 0,
      explanation: "It solves systems of linear equations."
    },

    {
      question: "Gauss-Seidel updates values:",
      options: [
        "Immediately after computation",
        "After all calculations finish",
        "Never",
        "Randomly"
      ],
      answer: 0,
      explanation: "New values are used as soon as they are available."
    },

    {
      question: "Gauss-Seidel generally converges faster than:",
      options: [
        "Jacobi Method",
        "RK4",
        "FFT",
        "Trapezoidal Rule"
      ],
      answer: 0,
      explanation: "Using updated values often improves convergence speed."
    },

    {
      question: "Gauss-Seidel belongs to:",
      options: [
        "Iterative linear algebra methods",
        "Interpolation",
        "Regression",
        "Numerical integration"
      ],
      answer: 0,
      explanation: "It is an iterative matrix solver."
    }

  ],

  /* =========================
     l51 - Jacobi Iteration
  ========================= */

  l51: [

    {
      question: "Jacobi Method is a:",
      options: [
        "Direct solver",
        "Iterative solver",
        "Integration rule",
        "Interpolation method"
      ],
      answer: 1,
      explanation: "Jacobi computes solutions iteratively."
    },

    {
      question: "Jacobi Method is used for:",
      options: [
        "Systems of linear equations",
        "Root finding",
        "Fourier analysis",
        "Differentiation"
      ],
      answer: 0,
      explanation: "It solves linear systems numerically."
    },

    {
      question: "Jacobi computes new values using:",
      options: [
        "Previous iteration values only",
        "Newest available values",
        "Future values",
        "Random values"
      ],
      answer: 0,
      explanation: "Jacobi uses values from the previous iteration."
    },

    {
      question: "Compared to Gauss-Seidel, Jacobi usually:",
      options: [
        "Converges slower",
        "Converges faster",
        "Has identical speed",
        "Never converges"
      ],
      answer: 0,
      explanation: "Gauss-Seidel often converges faster."
    },

    {
      question: "Jacobi belongs to:",
      options: [
        "Iterative linear algebra methods",
        "Regression methods",
        "Interpolation methods",
        "FFT algorithms"
      ],
      answer: 0,
      explanation: "It is a classical iterative matrix solver."
    }

  ],

    /* =========================
     l33 - Introduction to Regression
  ========================= */

  l33: [

    {
      question: "Regression analysis is primarily used to:",
      options: [
        "Study relationships between variables",
        "Compute integrals",
        "Find roots",
        "Perform FFT"
      ],
      answer: 0,
      explanation: "Regression models relationships between variables."
    },

    {
      question: "The variable being predicted is called:",
      options: [
        "Dependent variable",
        "Independent variable",
        "Control variable",
        "Random variable"
      ],
      answer: 0,
      explanation: "The dependent variable is the output being predicted."
    },

    {
      question: "Regression belongs to:",
      options: [
        "Statistical modeling",
        "Numerical integration",
        "Differentiation",
        "Interpolation only"
      ],
      answer: 0,
      explanation: "Regression is a statistical modeling technique."
    }

  ],

  /* =========================
     l34 - Least Squares Line
  ========================= */

  l34: [

    {
      question: "The Least Squares Method minimizes:",
      options: [
        "Sum of squared errors",
        "Sum of values",
        "Maximum error",
        "Minimum x value"
      ],
      answer: 0,
      explanation: "Least squares minimizes squared residuals."
    },

    {
      question: "Residual means:",
      options: [
        "Observed minus predicted value",
        "Predicted minus observed value",
        "Independent variable",
        "Slope only"
      ],
      answer: 0,
      explanation: "Residuals measure prediction error."
    },

    {
      question: "Least Squares is commonly used for:",
      options: [
        "Line fitting",
        "FFT",
        "Interpolation only",
        "Integration"
      ],
      answer: 0,
      explanation: "It is the foundation of linear regression."
    }

  ],

  /* =========================
     l35 - Polynomial Regression
  ========================= */

  l35: [

    {
      question: "Polynomial Regression fits:",
      options: [
        "Polynomial equations",
        "Straight lines only",
        "Matrices",
        "Integrals"
      ],
      answer: 0,
      explanation: "Polynomial regression fits curved relationships."
    },

    {
      question: "Polynomial Regression is useful when data is:",
      options: [
        "Nonlinear",
        "Always linear",
        "Random",
        "Empty"
      ],
      answer: 0,
      explanation: "It models nonlinear trends."
    },

    {
      question: "A quadratic model has degree:",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: 1,
      explanation: "Quadratic polynomials are degree 2."
    }

  ],

  /* =========================
     l36 - Correlation
  ========================= */

  l36: [

    {
      question: "Correlation measures:",
      options: [
        "Strength of relationship",
        "Area under curve",
        "Derivative",
        "Matrix rank"
      ],
      answer: 0,
      explanation: "Correlation measures association between variables."
    },

    {
      question: "Positive correlation means:",
      options: [
        "Variables move together",
        "Variables move opposite",
        "No relationship",
        "Infinite slope"
      ],
      answer: 0,
      explanation: "Both variables tend to increase together."
    },

    {
      question: "Negative correlation means:",
      options: [
        "Variables move opposite directions",
        "Variables move together",
        "No change",
        "Perfect fit"
      ],
      answer: 0,
      explanation: "One increases while the other decreases."
    }

  ],

  /* =========================
     l37 - Linear Correlation Coefficient
  ========================= */

  l37: [

    {
      question: "The correlation coefficient is commonly represented by:",
      options: [
        "r",
        "x",
        "b",
        "f"
      ],
      answer: 0,
      explanation: "Pearson correlation coefficient is denoted by r."
    },

    {
      question: "The value of r always lies between:",
      options: [
        "-1 and 1",
        "0 and 10",
        "-10 and 10",
        "1 and 100"
      ],
      answer: 0,
      explanation: "Correlation ranges from -1 to 1."
    },

    {
      question: "r = 1 indicates:",
      options: [
        "Perfect positive correlation",
        "Perfect negative correlation",
        "No correlation",
        "Randomness"
      ],
      answer: 0,
      explanation: "A value of 1 means a perfect positive relationship."
    }

  ],

  /* =========================
     l38 - Coefficient of Determination
  ========================= */

  l38: [

    {
      question: "Coefficient of Determination is represented by:",
      options: [
        "R²",
        "β",
        "α",
        "σ"
      ],
      answer: 0,
      explanation: "R² measures explained variation."
    },

    {
      question: "R² measures:",
      options: [
        "Goodness of fit",
        "Derivative",
        "Integral",
        "FFT speed"
      ],
      answer: 0,
      explanation: "It indicates how well the model explains data."
    },

    {
      question: "An R² value close to 1 indicates:",
      options: [
        "Excellent fit",
        "Poor fit",
        "No fit",
        "Invalid model"
      ],
      answer: 0,
      explanation: "Higher R² generally indicates better fit."
    }

  ],

  /* =========================
     l39 - Residual Analysis
  ========================= */

  l39: [

    {
      question: "Residuals are:",
      options: [
        "Prediction errors",
        "Independent variables",
        "Slopes",
        "Integrals"
      ],
      answer: 0,
      explanation: "Residuals measure prediction error."
    },

    {
      question: "Residual analysis helps detect:",
      options: [
        "Model problems",
        "FFT frequency",
        "Matrix inverses",
        "Differentiation errors"
      ],
      answer: 0,
      explanation: "Residual patterns reveal model issues."
    },

    {
      question: "Ideally residuals should appear:",
      options: [
        "Randomly scattered",
        "Perfectly increasing",
        "Perfectly decreasing",
        "Constant"
      ],
      answer: 0,
      explanation: "Random residuals indicate a reasonable model."
    }

  ],

  /* =========================
     l40 - Goodness of Fit
  ========================= */

  l40: [

    {
      question: "Goodness of Fit evaluates:",
      options: [
        "How well a model matches data",
        "Derivative accuracy",
        "FFT speed",
        "Matrix size"
      ],
      answer: 0,
      explanation: "It measures model performance."
    },

    {
      question: "A better fit generally produces:",
      options: [
        "Smaller errors",
        "Larger errors",
        "No predictions",
        "No variables"
      ],
      answer: 0,
      explanation: "Better models have lower prediction error."
    },

    {
      question: "R² is commonly used to assess:",
      options: [
        "Goodness of Fit",
        "Integration",
        "Differentiation",
        "Root finding"
      ],
      answer: 0,
      explanation: "R² is a common goodness-of-fit measure."
    }

  ],

  /* =========================
     l41 - Multiple Regression
  ========================= */

  l41: [

    {
      question: "Multiple Regression uses:",
      options: [
        "Multiple independent variables",
        "One independent variable only",
        "No variables",
        "Only matrices"
      ],
      answer: 0,
      explanation: "Multiple predictors are used."
    },

    {
      question: "Multiple Regression extends:",
      options: [
        "Simple Linear Regression",
        "FFT",
        "Euler Method",
        "Interpolation"
      ],
      answer: 0,
      explanation: "It is a generalized form of linear regression."
    },

    {
      question: "The goal is to predict:",
      options: [
        "A dependent variable",
        "An integral",
        "A derivative",
        "A matrix inverse"
      ],
      answer: 0,
      explanation: "Regression predicts an outcome variable."
    }

  ],

  /* =========================
     l42 - Nonlinear Regression
  ========================= */

  l42: [

    {
      question: "Nonlinear Regression is used when the relationship is:",
      options: [
        "Nonlinear",
        "Always linear",
        "Constant",
        "Undefined"
      ],
      answer: 0,
      explanation: "It models curved relationships."
    },

    {
      question: "Nonlinear Regression often requires:",
      options: [
        "Iterative optimization",
        "No calculations",
        "FFT",
        "Differentiation only"
      ],
      answer: 0,
      explanation: "Parameters are usually estimated iteratively."
    },

    {
      question: "Nonlinear models can represent:",
      options: [
        "Exponential growth",
        "Logistic behavior",
        "Power laws",
        "All of these"
      ],
      answer: 3,
      explanation: "Many nonlinear relationships can be modeled."
    }

  ],

  /* =========================
     l43 - Logistic Regression
  ========================= */

  l43: [

    {
      question: "Logistic Regression is mainly used for:",
      options: [
        "Classification problems",
        "Numerical integration",
        "FFT",
        "Differentiation"
      ],
      answer: 0,
      explanation: "Logistic regression predicts categories."
    },

    {
      question: "The output of Logistic Regression is:",
      options: [
        "A probability",
        "An integral",
        "A derivative",
        "A matrix"
      ],
      answer: 0,
      explanation: "The model outputs probabilities."
    },

    {
      question: "Logistic Regression uses which function?",
      options: [
        "Sigmoid function",
        "Cosine function",
        "Quadratic function",
        "Spline function"
      ],
      answer: 0,
      explanation: "The sigmoid maps values into probabilities."
    }

  ]

};
