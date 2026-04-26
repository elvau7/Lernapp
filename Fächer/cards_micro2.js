/* Microeconomics 2 */
SUBJECTS.push(
  {
    name: "Microeconomics 2",
    icon: "",
    description: "Beschreibung",
    kk: [
      {id: 1, category: "Axioms of Choice", question: "What does the axiom of completeness assume about a consumer's ability to choose?", answer: "It assumes that for any two bundles A and B, an individual can always rank them as $A \\succeq B$, $B \\succeq A$, or both (indifference)."},
      {id: 1, category: "Axioms of Choice", question: "When is a preference relation defined as \"rational\" in microeconomic theory?", answer: "A preference relation is rational if it satisfies both completeness and transitivity."},
      {id: 1, category: "Axioms of Choice", question: "In preference theory, what is considered the \"primitive\" concept and what are the \"derived\" concepts?", answer: "The weak preference relation ($\\succeq$) is the primitive concept. The strict preference relation ($\\succ$) and the indifference relation ($\\sim$) are derived from it."},

      {id: 2, category: "Continuity and Lexicographic Preferences", question: "Why do lexicographic preferences ($\\succeq_L$) violate the axiom of continuity?", answer: "Because an infinitesimal change in the quantity of the primary good can cause a sudden, massive jump in preference, rather than a smooth transition."},
      {id: 2, category: "Continuity and Lexicographic Preferences", question: "Give a real-world example of a lexicographic ordering.", answer: "Sports tiebreakers: Teams are ranked first by points; only if points are equal is the second criterion (goal difference) considered."},
      {id: 2, category: "Continuity and Lexicographic Preferences", question: "What are two real-world examples where lexicographic preference orderings are commonly applied?", answer: "(1) Sports tiebreakers, where teams are ranked first by points and only then by goal difference. (2) Job candidate rankings, where applicants are first filtered by degree type and then by GPA."},

      {id: 3, category: "Defining the Utility Function", question: "What does it mean for utility to be an \"ordinal\" concept?", answer: "It means the numbers only provide a ranking of bundles; the specific numerical values do not measure how much more one bundle is liked than another."},
      {id: 3, category: "Defining the Utility Function", question: "What is the effect of an order-preserving (monotone) transformation on a utility function?", answer: "It represents the exact same preferences because the ranking of any two bundles remains unchanged."},
      {id: 3, category: "Defining the Utility Function", question: "Beyond physical goods, what other arguments can be included in a utility function to model complex human behavior?", answer: "Utility functions can include peer group consumption (status), personal experiences (habits), leisure, and consumption in different time periods (dynamic models)."},

      {id: 4, category: "Monotonicity and Desirability", question: "How does Strong Monotonicity (SM) differ from Monotonicity (M)?", answer: "SM requires strict preference if at least one good increases and none decrease, whereas M only requires strict preference if all goods in the bundle increase."},
      {id: 4, category: "Monotonicity and Desirability", question: "If preferences satisfy strong monotonicity, can a commodity be a bad or a neuter?", answer: "No. Under SM, more of any good must strictly increase utility, ruling out goods that decrease utility (bads) or have no effect (neuters)."},
      {id: 4, category: "Monotonicity and Desirability", question: "Why does strong monotonicity (SM) specifically rule out the existence of a bad commodity?", answer: "A bad is something where more is strictly worse; however, SM dictates that adding more of any good, holding others constant, must strictly improve preference."},

      {id: 5, category: "Substitutability and Indifference Curves", question: "What is the Marginal Rate of Substitution $MRS_{x,y}$?", answer: "It is the negative slope of the indifference curve, measuring a consumer's willingness to trade $y$ for $x$ while staying at the same utility level."},
      {id: 5, category: "Substitutability and Indifference Curves", question: "Why is it logically impossible for two indifference curves to intersect?", answer: "Intersecting curves would violate transitivity and monotonicity, as a bundle on a higher curve would simultaneously be indifferent to a bundle on a lower curve."},
      {id: 5, category: "Substitutability and Indifference Curves", question: "What does the curvature of an indifference curve indicate about the relationship between two goods?", answer: "The more curved an indifference curve is, the harder it is for the consumer to substitute one good for the other while maintaining the same utility."},

      {id: 6, category: "Convexity and Diminishing MRS", question: "What is the intuition behind the convexity of preferences?", answer: "It represents a love of variety, where consumers prefer a balanced mix of goods over extreme bundles."},
      {id: 6, category: "Convexity and Diminishing MRS", question: "What does a diminishing MRS imply about the shape of the indifference curve?", answer: "It implies the curve is bowed toward the origin, becoming flatter as the quantity of good $x$ increases."},
      {id: 6, category: "Convexity and Diminishing MRS", question: "What is the graphical meaning of the Upper Contour Set (UCS)?", answer: "The UCS is the region on or above, typically to the upper-right of, a specific indifference curve, representing all bundles at least as good as the reference bundle."},

      {id: 7, category: "Cobb-Douglas and Linear Utility", question: "What characterizes the indifference curves of perfect substitutes (linear utility)?", answer: "They are straight lines with a constant slope, and they cut the axes."},
      {id: 7, category: "Cobb-Douglas and Linear Utility", question: "For Cobb-Douglas utility $u(x,y)=x^\\alpha y^\\beta$, what is $MRS_{x,y}$?", answer: "The MRS is $\\frac{\\alpha}{\\beta} \\cdot \\frac{y}{x}$."},
      {id: 7, category: "Cobb-Douglas and Linear Utility", question: "Why is it common to normalize the exponents in a Cobb-Douglas utility function so they sum to 1?", answer: "Because utility is ordinal, raising the function to the power $\\frac{1}{\\alpha+\\beta}$ is an order-preserving transformation that simplifies calculations without changing preference rankings."},

      {id: 8, category: "Perfect Complements (Leontief)", question: "What is the shape of indifference curves for Leontief utility $u(x,y)=\\min\\{\\alpha x,\\beta y\\}$?", answer: "They are L-shaped (right-angled)."},
      {id: 8, category: "Perfect Complements (Leontief)", question: "Is Leontief utility strongly monotone?", answer: "No. It only satisfies weak monotonicity because increasing only one good, beyond the required proportion, adds zero utility."},
      {id: 8, category: "Perfect Complements (Leontief)", question: "Using the shoe analogy, why does Leontief utility fail Strong Monotonicity?", answer: "If you have 5 left shoes and 5 right shoes, adding a 6th right shoe adds zero utility; because more of one good does not strictly improve preference, it is not strongly monotone."},

      {id: 9, category: "CES, Homothetic, and Quasilinear", question: "What defines homothetic preferences?", answer: "Preferences where the MRS depends only on the ratio $y/x$, meaning the slope of indifference curves is constant along any ray from the origin."},
      {id: 9, category: "CES, Homothetic, and Quasilinear", question: "What is unique about the indifference curves of quasilinear utility $u(x,y)=x+f(y)$?", answer: "They are vertical translations of each other, and the MRS depends only on the quantity of one good."},
      {id: 9, category: "CES, Homothetic, and Quasilinear", question: "How does the parameter $\\delta$ in a CES utility function determine the substitutability of goods?", answer: "A higher $\\delta$ (closer to 1) means higher substitutability, while a lower $\\delta$ (approaching $-\\infty$) means goods are more complementary."},

      {id: 10, category: "Budget Constraints and Sets", question: "What is the slope of the budget line $p_x x + p_y y = I$?", answer: "The slope is the relative price ratio $-p_x/p_y$."},
      {id: 10, category: "Budget Constraints and Sets", question: "How does the budget set change if income $I$ increases while prices remain constant?", answer: "The budget line shifts parallel outward, expanding the feasible set without changing the slope."},
      {id: 10, category: "Budget Constraints and Sets", question: "What does the slope of the budget line represent in economic terms?", answer: "It represents the relative market price or the rate at which the market allows a consumer to trade one good for another ($-p_x/p_y$)."},

      {id: 11, category: "Optimal Choice and Tangency Conditions", question: "What is the tangency condition for an interior solution in utility maximization?", answer: "The MRS must equal the price ratio: $MRS = p_x/p_y$."},
      {id: 11, category: "Optimal Choice and Tangency Conditions", question: "What is the economic interpretation of the condition $MU_x/p_x = MU_y/p_y$?", answer: "The consumer is getting the same marginal utility per dollar spent on every good (the equimarginal principle)."},
      {id: 11, category: "Optimal Choice and Tangency Conditions", question: "What is the economic interpretation of the Lagrange multiplier ($\\omega$) in utility maximization?", answer: "It represents the marginal utility of income, or how much additional utility the consumer would gain if their budget increased by one euro or dollar."},

      {id: 12, category: "Marshallian Demand and Indirect Utility", question: "What do Marshallian demand functions $x(p,I)$ describe?", answer: "They show the optimal quantities of goods chosen as functions of prices and income."},
      {id: 12, category: "Marshallian Demand and Indirect Utility", question: "What is the Indirect Utility Function $V(p,I)$?", answer: "It identifies the maximum utility achievable given prices and income."},
      {id: 12, category: "Marshallian Demand and Indirect Utility", question: "What is the main difference between a utility function $u(x,y)$ and an indirect utility function $V(p,I)$?", answer: "$u(x,y)$ measures utility from quantities of goods, whereas $V(p,I)$ measures the maximum achievable utility given prices and income."},

      {id: 13, category: "Hicksian Demand", question: "What is the goal of the Expenditure Minimization Problem (EMP)?", answer: "To find the cheapest way to achieve a target utility level $\\bar{u}$."},
      {id: 13, category: "Hicksian Demand", question: "Why is Hicksian demand called compensated demand?", answer: "Because it assumes income is adjusted to keep the consumer at the same utility level as prices change, isolating the substitution effect."},
      {id: 13, category: "Hicksian Demand", question: "Why is Hicksian demand called compensated demand?", answer: "Because it assumes that as prices change, the consumer is compensated with enough income to remain at the exact same utility level."},

      {id: 14, category: "Expenditure Function and Shephard's Lemma", question: "What does the expenditure function $e(p, \\bar{u})$ calculate?", answer: "The minimum total cost required to reach utility $\\bar{u}$ at prices $p$."},
      {id: 14, category: "Expenditure Function and Shephard's Lemma", question: "State Shephard's Lemma.", answer: "The partial derivative of the expenditure function with respect to a good's price equals the Hicksian demand for that good."},
      {id: 14, category: "Expenditure Function and Shephard's Lemma", question: "How does the Expenditure Minimization Problem (EMP) define its opportunity set?", answer: "The opportunity set for the EMP is the Upper Contour Set—the set of all bundles that meet or exceed the target utility level $\\bar{u}$."},

      {id: 15, category: "Duality", question: "In duality theory, how are the Indirect Utility and Expenditure functions related?", answer: "They are mathematical inverses of each other."},
      {id: 15, category: "Duality", question: "What is the result of $V(p, E(p, \\bar{u}))$?", answer: "It equals $\\bar{u}$, the target utility level."},
      {id: 15, category: "Duality", question: "What identity allows you to derive Marshallian demand directly from the indirect utility function?", answer: "Roy's Identity, which involves taking the negative ratio of the partial derivatives of $V$ with respect to price and income."},

      {id: 16, question: "Consider $u(x,y) = \\alpha x + \\beta y$ and $\\hat{u}(x,y) = x^\\alpha y^\\beta$. For which preferences is substitutability higher?", answer: "For linear utility $u = \\alpha x + \\beta y$, the $MRS = \\alpha/\\beta$ is constant — goods are perfect substitutes (the IC is a straight line). For Cobb-Douglas $\\hat{u} = x^\\alpha y^\\beta$, the $MRS = (\\alpha/\\beta)(y/x)$ is diminishing and ICs are curved. Hence substitutability is higher for linear utility: the consumer is always willing to trade goods at a fixed rate.", category: "Microeconomics Ch3"},
      {id: 17, question: "Show that $MRS_{x,y}$ is independent of the units of measurement of $u(x,y)$, i.e., is the same for $u$ and $f(u)$ when $f'(\\cdot) > 0$.", answer: "For $f(u(x,y))$: $MRS = \\frac{\\partial f/\\partial x}{\\partial f/\\partial y} = \\frac{f'(u) \\cdot u_x}{f'(u) \\cdot u_y} = \\frac{u_x}{u_y}$. The $f'(u) > 0$ cancels, so MRS is the same for $u$ and $f(u)$. This confirms MRS is ordinal and unit-free.", category: "Microeconomics Ch3"},
      {id: 18, question: "How can we analytically show that $MRS_{x,y}$ is diminishing?", answer: "Compute $MRS = u_x/u_y$ as a function of $x$ (holding utility constant via the IC). Then differentiate MRS with respect to $x$ along the IC (i.e., using the constraint $u(x,y)=\\bar{u}$ to express $y$ as $y(x)$). If $d(MRS)/dx < 0$, MRS is diminishing. Equivalently, check the bordered Hessian condition for strict quasiconcavity.", category: "Microeconomics Ch3"},
      {id: 19, question: "Define upper contour sets analytically and show them graphically.", answer: "The upper contour set of $(x',y')$ is $UCS(x',y') = \\{(x,y) \\in X : (x,y) \\succeq (x',y')\\} = \\{(x,y) : u(x,y) \\geq u(x',y')\\}$. Graphically, it is the set of all bundles on or above a given indifference curve — the region to the upper-right of the IC (under monotonicity).", category: "Microeconomics Ch3"},
      {id: 20, question: "Define convex sets analytically and show them graphically.", answer: "A set $S \\subseteq \\mathbb{R}^N$ is convex if for any two points $a, b \\in S$ and any $\\lambda \\in [0,1]$, the convex combination $\\lambda a + (1-\\lambda)b \\in S$. Graphically, a convex set is one where the line segment between any two points lies entirely within the set (no 'dents' or holes).", category: "Microeconomics Ch3"},
      {id: 21, question: "Suppose $\\succeq$ is convex but not strictly convex. Discuss this case graphically.", answer: "Convex but not strictly convex preferences allow flat segments on indifference curves (linear portions). For example, linear utility $u = \\alpha x + \\beta y$ gives straight-line ICs. Any convex combination of two points on the same IC yields a bundle that is indifferent (not strictly preferred) to the endpoints. Upper contour sets are still convex, but MRS is constant (not strictly diminishing) along the flat segment.", category: "Microeconomics Ch3"},
      {id: 22, question: "For $u(x,y) = \\sqrt{xy} = x^{1/2}y^{1/2}$: (a) Find IC for $\\bar{u}=10$.", answer: "(a) $x^{1/2}y^{1/2} = 10 \\Rightarrow xy = 100 \\Rightarrow y(x) = 100/x$. The IC is a rectangular hyperbola.", category: "Microeconomics Ch3"},
      {id: 23, question: "For $u(x,y) = \\sqrt{xy}$: (b) Calculate MRS generally and at $x=5$ (point A) and $x=20$ (point B).", answer: "$MRS_{x,y} = u_x/u_y = \\frac{(1/2)x^{-1/2}y^{1/2}}{(1/2)x^{1/2}y^{-1/2}} = y/x$. On IC $\\bar{u}=10$: $y=100/x$. At $x=5$: $y=20$, $MRS=20/5=4$. At $x=20$: $y=5$, $MRS=5/20=0.25$.", category: "Microeconomics Ch3"},
      {id: 24, question: "For $u(x,y) = \\sqrt{xy}$: (c) Is MRS diminishing?", answer: "Yes. $MRS = y/x = (100/x)/x = 100/x^2$, which is strictly decreasing in $x$. So MRS is diminishing.", category: "Microeconomics Ch3"},
      {id: 25, question: "For $u(x,y) = \\sqrt{xy}$: (d) What does diminishing MRS tell us about $\\succeq$?", answer: "Diminishing MRS implies that preferences are strictly convex: the consumer values variety, and balanced bundles are strictly preferred to extreme ones. The upper contour sets are strictly convex sets and $u$ is strictly quasiconcave.", category: "Microeconomics Ch3"},
      {id: 26, question: "Check convexity for $u(x,y) = x^{1/2}y^{1/2}$.", answer: "$MRS = \\frac{\\frac{1}{2}x^{-1/2}y^{1/2}}{\\frac{1}{2}x^{1/2}y^{-1/2}} = y/x$. As $x$ increases along an IC ($y$ falls), $y/x$ decreases strictly. MRS is strictly diminishing $\\Rightarrow$ preferences are strictly convex.", category: "Microeconomics Ch3"},
      {id: 27, question: "Check convexity for $u(x,y) = x + xy + y$.", answer: "$u_x = 1 + y$, $u_y = 1 + x$. $MRS = (1+y)/(1+x)$. Along an IC, as $x$ increases, $y$ must fall. Check if MRS falls: $d(MRS)/dx = [(dy/dx)(1+x) - (1+y)] / (1+x)^2$. Along IC, $dy/dx = -MRS = -(1+y)/(1+x)$. Substituting: numerator $= [-(1+y)/(1+x)](1+x) - (1+y) = -(1+y) - (1+y) = -2(1+y) < 0$. So MRS is strictly diminishing $\\Rightarrow$ preferences are strictly convex.", category: "Microeconomics Ch3"},
      {id: 28, question: "Check convexity for $u(x,y) = \\sqrt{x^2 + y^2}$.", answer: "$u_x = x/\\sqrt{x^2+y^2}$, $u_y = y/\\sqrt{x^2+y^2}$. $MRS = x/y$. Along an IC (circle of radius $r$), $y = \\sqrt{r^2 - x^2}$, so $MRS = x/\\sqrt{r^2-x^2}$, which is increasing in $x$. So MRS is increasing, not diminishing $\\Rightarrow$ preferences are NOT convex (they are concave — the consumer prefers extremes).", category: "Microeconomics Ch3"},
      {id: 29, question: "For Cobb-Douglas $u(x,y) = x^\\alpha y^\\beta$: Do such utility functions express (strongly) monotone preferences?", answer: "Yes, strongly monotone. $u_x = \\alpha x^{\\alpha-1}y^\\beta > 0$ and $u_y = \\beta x^\\alpha y^{\\beta-1} > 0$ for $x,y > 0$ and $\\alpha,\\beta > 0$. Any increase in either good strictly increases utility.", category: "Microeconomics Ch3"},
      {id: 30, question: "For Cobb-Douglas: Draw indifference curves. Do they cut the axes?", answer: "ICs are hyperbolic curves $y = (\\bar{u}/x^\\alpha)^{1/\\beta}$, asymptotic to both axes. They do NOT cut the axes (they approach but never touch the $x$- or $y$-axis), since $u=0$ if $x=0$ or $y=0$ when $\\alpha,\\beta>0$.", category: "Microeconomics Ch3"},
      {id: 31, question: "For Cobb-Douglas: Calculate $MRS_{x,y}$.", answer: "$MRS_{x,y} = u_x/u_y = \\frac{\\alpha x^{\\alpha-1}y^\\beta}{\\beta x^\\alpha y^{\\beta-1}} = \\frac{\\alpha}{\\beta} \\cdot \\frac{y}{x}$.", category: "Microeconomics Ch3"},
      {id: 32, question: "For Cobb-Douglas: Are preferences (strictly) convex?", answer: "Yes, strictly convex. $MRS = (\\alpha/\\beta)(y/x)$ is strictly diminishing along any IC (as $x$ increases and $y$ falls, $y/x$ decreases). Equivalently, $u$ is strictly quasiconcave.", category: "Microeconomics Ch3"},
      {id: 33, question: "Why is it allowed to normalize $\\alpha+\\beta=1$ for Cobb-Douglas?", answer: "Because $v(x,y) = u(x,y)^{1/(\\alpha+\\beta)}$ is a monotone increasing transformation of $u$, and therefore represents the same preferences (ordinal utility). After normalization, the exponents sum to 1 but the preference ranking is unchanged.", category: "Microeconomics Ch3"},
      {id: 34, question: "For Linear Utility $u(x,y) = \\alpha x + \\beta y$: Do such utility functions express (strongly) monotone preferences?", answer: "Yes, monotone (and strongly monotone). $u_x = \\alpha > 0$ and $u_y = \\beta > 0$ for $\\alpha,\\beta > 0$. More of either good strictly increases utility.", category: "Microeconomics Ch3"},
      {id: 35, question: "For Linear Utility: Draw indifference curves. What do you observe? Do they cut the axes?", answer: "ICs are straight lines with slope $-\\alpha/\\beta$. They do cut the axes: set $y=0 \\Rightarrow x = \\bar{u}/\\alpha$; set $x=0 \\Rightarrow y = \\bar{u}/\\beta$. Goods are perfect substitutes at a constant rate.", category: "Microeconomics Ch3"},
      {id: 36, question: "For Linear Utility: Calculate $MRS_{x,y}$.", answer: "$MRS_{x,y} = u_x/u_y = \\alpha/\\beta$. It is constant everywhere.", category: "Microeconomics Ch3"},
      {id: 37, question: "For Linear Utility: Are preferences (strictly) convex?", answer: "Convex but NOT strictly convex. MRS is constant (not strictly diminishing), so ICs are linear. Upper contour sets are convex (half-planes), but mixed bundles are only indifferent to, not strictly preferred over, extreme bundles.", category: "Microeconomics Ch3"},
      {id: 38, question: "Is it allowed to normalize $\\alpha+\\beta=1$ for linear utility?", answer: "No, unlike Cobb-Douglas, a linear transformation (multiplying by a constant $1/(\\alpha+\\beta)$) does preserve preferences — so technically the normalized version represents the same preferences. However, normalizing $\\alpha+\\beta=1$ changes the MRS value ($\\alpha/\\beta$), which affects the specific rate of substitution. The ranking is preserved but the normalization is somewhat less natural for linear utility since the cardinal values matter less here; it is technically allowed for ordinal purposes.", category: "Microeconomics Ch3"},
      {id: 39, question: "For Leontief Utility $u(x,y) = \\min\\{\\alpha x, \\beta y\\}$: Do such utility functions express (strongly) monotone preferences?", answer: "Monotone but NOT strongly monotone. Utility increases only when the binding constraint increases. If $\\alpha x < \\beta y$ ($y$ is not the binding input), increasing $y$ alone does not increase utility. So increasing a single good may not increase utility $\\Rightarrow$ not strongly monotone. But increasing all goods strictly ($x \\gg x'$) will eventually increase utility $\\Rightarrow$ satisfies weak monotonicity.", category: "Microeconomics Ch3"},
      {id: 40, question: "For Leontief Utility: Draw indifference curves. What do you observe?", answer: "ICs are L-shaped (right angles) with the kink at $\\alpha x = \\beta y$, i.e., at $y/x = \\alpha/\\beta$. More of one good beyond the kink adds no utility. Goods are perfect complements.", category: "Microeconomics Ch3"},
      {id: 41, question: "For Leontief Utility: Calculate $MRS_{x,y}$.", answer: "MRS is not well-defined at the kink. On the horizontal part of the IC (where $\\alpha x < \\beta y$), increasing $x$ adds utility so $MRS \\to \\infty$ (effectively 0 from the $y$-for-$x$ trade perspective). On the vertical part ($\\alpha x > \\beta y$), $MRS = 0$. At the kink, MRS is undefined (any value from 0 to $\\infty$ is consistent).", category: "Microeconomics Ch3"},
      {id: 42, question: "For Leontief Utility: Are preferences (strictly) convex?", answer: "Convex but NOT strictly convex. The kink means that any convex combination of two points on the same IC is at least as good (weakly preferred), satisfying convexity. But it is not strictly convex because points on the flat segments of the IC are indifferent to, not strictly preferred over, each other.", category: "Microeconomics Ch3"},
      {id: 43, question: "For CES Utility: Graphically illustrate cases for further values of $\\delta$.", answer: "$\\delta=1$: straight-line ICs (perfect substitutes). $\\delta\\to 0$: Cobb-Douglas-shaped ICs (smooth, bowed toward origin). $\\delta$ between 0 and 1: ICs intermediate between linear and Cobb-Douglas. $\\delta<0$: ICs more curved than Cobb-Douglas, approaching L-shape. $\\delta\\to-\\infty$: Leontief L-shaped ICs (perfect complements). The more negative $\\delta$, the less substitutable the goods.", category: "Microeconomics Ch3"},
      {id: 44, question: "Show: as $\\delta\\to 0$, CES $\\to$ Cobb-Douglas.", answer: "Take logs of $U = (\\alpha x^\\delta + \\beta y^\\delta)^{1/\\delta}$. As $\\delta\\to 0$, apply L'Hôpital's rule to $(1/\\delta)\\cdot\\ln(\\alpha x^\\delta + \\beta y^\\delta)$. Differentiating numerator and denominator with respect to $\\delta$ yields $[\\alpha x^\\delta \\ln x + \\beta y^\\delta \\ln y]/(\\alpha x^\\delta + \\beta y^\\delta)$. As $\\delta\\to 0$, $x^\\delta\\to 1$ and $y^\\delta\\to 1$, so this limit $\\to (\\alpha \\ln x + \\beta \\ln y)/(\\alpha+\\beta)$. Exponentiating: $U \\to \\exp((\\alpha \\ln x + \\beta \\ln y)/(\\alpha+\\beta)) = x^{\\alpha/(\\alpha+\\beta)} \\cdot y^{\\beta/(\\alpha+\\beta)}$, which is Cobb-Douglas.", category: "Microeconomics Ch3"},
      {id: 45, question: "Do all CES utility functions represent homothetic preferences?", answer: "Yes. For CES, $MRS_{x,y} = (\\alpha/\\beta)\\cdot(x/y)^{\\delta-1}$, which depends only on the ratio $y/x$ (equivalently $x/y$), not on the absolute levels of $x$ and $y$. Therefore all CES utility functions represent homothetic preferences.", category: "Microeconomics Ch3"},
      {id: 46, question: "Does a Cobb-Douglas utility function represent homothetic preferences?", answer: "Yes. $MRS = (\\alpha/\\beta)\\cdot(y/x)$ depends only on the ratio $y/x$. So Cobb-Douglas preferences are homothetic.", category: "Microeconomics Ch3"},
      {id: 47, question: "Does a linear utility function represent homothetic preferences?", answer: "Yes. $MRS = \\alpha/\\beta$ is constant, which trivially depends only on $y/x$ (or equivalently is independent of levels). Linear preferences are homothetic.", category: "Microeconomics Ch3"},
      {id: 48, question: "Do all utility functions represent homothetic preferences?", answer: "No. A counterexample is quasilinear utility $u(x,y) = x + \\ln y$. Its $MRS = u_x/u_y = 1/(1/y) = y$, which depends only on $y$, not the ratio $y/x$. So it is non-homothetic: as we move along a ray through the origin (doubling both $x$ and $y$), MRS changes.", category: "Microeconomics Ch3"},
      {id: 49, question: "For Quasilinear Utility $u(x,y) = x + \\ln y$: Do such utility functions express (strongly) monotone preferences?", answer: "Yes, (strongly) monotone. $u_x = 1 > 0$ and $u_y = 1/y > 0$ for $y > 0$. More of either good strictly increases utility.", category: "Microeconomics Ch3"},
      {id: 50, question: "For Quasilinear Utility: Draw indifference curves. What do you observe? Do they cut the axes?", answer: "ICs are vertical translations of each other: $y(x) = e^{(\\bar{u} - x)}$. They are decreasing and convex, asymptotic to the $x$-axis ($y\\to 0$ as $x\\to\\infty$) but never touching it. They do NOT cut the $x$-axis ($y>0$ always) but can cut the $y$-axis (set $x=0$: $y=e^{\\bar{u}}$).", category: "Microeconomics Ch3"},
      {id: 51, question: "For Quasilinear Utility: Calculate $MRS_{x,y}$.", answer: "$MRS = u_x/u_y = 1/(1/y) = y$. The MRS depends only on $y$, not on $x$.", category: "Microeconomics Ch3"},
      {id: 52, question: "Are quasilinear preferences homothetic?", answer: "No. $MRS = y$ depends only on $y$, not on the ratio $y/x$. Along a ray through the origin (where $y/x$ is fixed but levels scale up), $y$ changes, so MRS changes. Therefore quasilinear preferences are NOT homothetic.", category: "Microeconomics Ch3"},

      {id: 53, question: "Derive $MRS_{x,y}$ by total differentiation. Express the FOC for interior optimum in terms of marginal utilities.", answer: "Totally differentiate $u(x,y) = \\bar{u}$: $u_x\\, dx + u_y\\, dy = 0$. So $dy/dx|_{\\bar{u}} = -u_x/u_y$, and $MRS = u_x/u_y = MU_x/MU_y$. Interior FOC: $MU_x/MU_y = p_x/p_y$, equivalently $MU_x/p_x = MU_y/p_y$ (equimarginal principle).", category: "Microeconomics Ch4"},
      {id: 54, question: "Is the tangency condition $MRS = p_x/p_y$ necessary and sufficient for a best choice?", answer: "Necessary for an interior optimum (with differentiable $u$). NOT sufficient in general — a tangency may be a local minimum or saddle point with non-convex preferences. It is sufficient if preferences are strictly convex ($u$ is strictly quasiconcave).", category: "Microeconomics Ch4"},
      {id: 55, question: "Describe the two cases for perfect substitutes $u = \\alpha x + \\beta y$: corner solution with tangency NOT satisfied, and corner solution where it IS satisfied.", answer: "Not satisfied: if $p_x/p_y \\neq \\alpha/\\beta$ (say $p_x/p_y < \\alpha/\\beta$), the consumer spends all income on $x$. The IC is steeper than the budget line — no tangency. Satisfied: if $p_x/p_y = \\alpha/\\beta$ exactly, budget line and ICs have equal slopes; every point on the budget line is optimal.", category: "Microeconomics Ch4"},
      {id: 56, question: "Can the optimum be at $(0,0)$ under monotonicity with $I > 0$?", answer: "No. Under monotonicity with $I > 0$, any bundle $(x,0)$ with $x > 0$ is affordable and strictly preferred to $(0,0)$. The constraint is always binding and the origin is never optimal.", category: "Microeconomics Ch4"},
      {id: 57, question: "Can there be corner solutions with quasilinear utility $u = x + \\ln y$?", answer: "Yes, at $x = 0$ if $I < p_x$. Interior FOC: $MRS = y = p_x/p_y \\Rightarrow y^* = p_x/p_y$. Then $x^* = (I - p_x)/p_x$. If $I < p_x$, $x^* < 0$ is infeasible, so $x^* = 0$, $y^* = I/p_y$. There is no corner at $y = 0$ because $\\ln(0) = -\\infty$.", category: "Microeconomics Ch4"},
      {id: 58, question: "What does the Lagrange multiplier $\\omega$ represent in the UMP?", answer: "$\\omega = MU_x/p_x = MU_y/p_y$ is the marginal utility of income: the additional utility gained from one extra euro of budget. By the envelope theorem: $\\omega = \\partial V/\\partial I$. It is the shadow price of the income constraint.", category: "Microeconomics Ch4"},
      {id: 59, question: "State the principle of optimality and explain why it must hold at an interior optimum.", answer: "$MU_x/p_x = MU_y/p_y$ at the interior optimum. If $MU_x/p_x > MU_y/p_y$, shifting one euro from $y$ to $x$ raises utility (more bang per buck on $x$), so the consumer should reallocate. The condition holds when no such profitable reallocation is possible.", category: "Microeconomics Ch4"},
      {id: 60, question: "Interpret $(\\partial u/\\partial x)/\\omega$ in terms of willingness to pay. What does the optimality condition $p_x = MU_x/\\omega$ say?", answer: "$(\\partial u/\\partial x)/\\omega = MU_x/\\omega$ is the consumer's marginal willingness to pay for one more unit of $x$ — the maximum euros the consumer would give up. At the optimum, market price $p_x$ equals marginal WTP. If $p_x < WTP$, the consumer should buy more $x$.", category: "Microeconomics Ch4"},
      {id: 61, question: "For $u = x^{1/2}y^{1/2}$, find Marshallian demands and $\\omega$.", answer: "FOCs: $y/x = p_x/p_y \\Rightarrow p_x x = p_y y$. Budget: $2p_x x = I$. So $x^* = I/(2p_x)$, $y^* = I/(2p_y)$. Each good receives exactly half of income. $\\omega = 1/(2\\sqrt{p_x p_y})$. Higher prices $\\Rightarrow$ lower marginal utility of income.", category: "Microeconomics Ch4"},
      {id: 62, question: "For CES utility $u = x^{1/2} + y^{1/2}$, find Marshallian demands.", answer: "FOCs: $(1/2)x^{-1/2} = \\omega p_x$ and $(1/2)y^{-1/2} = \\omega p_y$. Ratio: $(y/x)^{1/2} = p_x/p_y \\Rightarrow y = x(p_x/p_y)^2$. Substituting into budget: $x^* = I p_y / [p_x(p_x + p_y)]$, $y^* = I p_x / [p_y(p_x + p_y)]$.", category: "Microeconomics Ch4"},
      {id: 63, question: "Is Cobb-Douglas or CES more realistic for explaining consumer behaviour?", answer: "Cobb-Douglas predicts constant expenditure shares (independent of prices) — empirically too restrictive. CES allows varying elasticity of substitution $\\sigma = 1/(1-\\delta)$, so expenditure shares respond to price changes. CES is more flexible and attractive for empirical work; Cobb-Douglas is simpler as a baseline.", category: "Microeconomics Ch4"},
      {id: 64, question: "For $u = \\min\\{x, 4y\\}$, find Marshallian demands.", answer: "Lagrangian cannot be applied (not differentiable). Use complementarity: $x^* = 4y^*$ (fixed proportion). Budget: $p_x \\cdot 4y + p_y y = I \\Rightarrow y^*(4p_x + p_y) = I \\Rightarrow y^* = I/(4p_x + p_y)$, $x^* = 4I/(4p_x + p_y)$.", category: "Microeconomics Ch4"},
      {id: 65, question: "What are the key properties of the indirect utility function $V(p_x, p_y, I)$?", answer: "1) Increasing in $I$ ($\\partial V/\\partial I = \\omega > 0$). 2) Decreasing in prices. 3) Homogeneous of degree 0 in $(p_x, p_y, I)$. 4) Quasiconvex in prices. 5) Roy's identity: $x(p,I) = -(\\partial V/\\partial p_x)/(\\partial V/\\partial I)$.", category: "Microeconomics Ch4"},
      {id: 66, question: "For $u = x^{1/2}y^{1/2}$, derive $V(p_x, p_y, I)$ and verify $\\partial V/\\partial I = \\omega$.", answer: "Substitute $x^* = I/(2p_x)$, $y^* = I/(2p_y)$: $V = (I/2p_x)^{1/2}\\cdot(I/2p_y)^{1/2} = I/(2\\sqrt{p_x p_y})$. Then $\\partial V/\\partial I = 1/(2\\sqrt{p_x p_y}) = \\omega$. ✓ This confirms the envelope theorem result.", category: "Microeconomics Ch4"},
      {id: 67, question: "For $u = \\min\\{x, 4y\\}$, derive $V(p_x, p_y, I)$.", answer: "At optimum $x^* = 4I/(4p_x+p_y)$ and $y^* = I/(4p_x+p_y)$. $V = \\min\\{x^*, 4y^*\\} = \\min\\{4I/(4p_x+p_y), 4I/(4p_x+p_y)\\} = 4I/(4p_x+p_y)$. Both arguments are equal at the kink.", category: "Microeconomics Ch4"},
      {id: 68, question: "Compare the EMP and UMP first-order conditions. What is the same and what differs?", answer: "Both give the same tangency condition: $MRS = p_x/p_y$. The difference is the third condition: UMP fixes income ($p_x x + p_y y = I$); EMP fixes utility ($u(x,y) = \\bar{u}$). Both problems are dual and yield the same optimal bundle when calibrated consistently ($\\bar{u} = V(p,I)$).", category: "Microeconomics Ch4"},
      {id: 69, question: "What are the key properties of the expenditure function $E(p_x, p_y, \\bar{u})$?", answer: "1) Increasing in $\\bar{u}$. 2) Increasing in prices. 3) Homogeneous of degree 1 in $(p_x, p_y)$. 4) Concave in prices (consumer substitutes away from expensive goods). 5) Shephard's lemma: $\\partial E/\\partial p_x = x^c(p, \\bar{u})$.", category: "Microeconomics Ch4"},
      {id: 70, question: "Analytically define the budget set and the upper contour set. How do the UMP and EMP use them?", answer: "Budget set: $B(p,I) = \\{(x,y) \\in X: p_x x + p_y y \\leq I\\}$. $UCS(\\bar{u}) = \\{(x,y) \\in X: u(x,y) \\geq \\bar{u}\\}$. UMP finds the highest IC touching the budget set. EMP finds the lowest budget line touching the UCS. Both share the same tangency condition.", category: "Microeconomics Ch4"},
      {id: 71, question: "For $u = x^{1/2}y^{1/2}$, find Hicksian demands and $E(p_x, p_y, \\bar{u})$.", answer: "EMP FOC gives $y/x = p_x/p_y \\Rightarrow y^c = x^c p_x/p_y$. Utility constraint: $x^c (p_x/p_y)^{1/2} = \\bar{u} \\Rightarrow x^c = \\bar{u}(p_y/p_x)^{1/2}$, $y^c = \\bar{u}(p_x/p_y)^{1/2}$. $E = p_x x^c + p_y y^c = 2\\bar{u}\\sqrt{p_x p_y}$. Verify: inverting $V = I/(2\\sqrt{p_x p_y})$ gives $I = 2\\bar{u}\\sqrt{p_x p_y} = E$. ✓", category: "Microeconomics Ch4"},
      {id: 72, question: "For $u = \\min\\{ax, by\\}$, find Hicksian demands and $E(p_x, p_y, \\bar{u})$.", answer: "At optimum: $ax^c = by^c = \\bar{u} \\Rightarrow x^c = \\bar{u}/a$, $y^c = \\bar{u}/b$. Expenditure function: $E = p_x \\bar{u}/a + p_y \\bar{u}/b = \\bar{u}(p_x/a + p_y/b)$. Hicksian demands are independent of prices (the consumer always uses fixed proportions).", category: "Microeconomics Ch4"},
      {id: 73, question: "What is the relationship between Marshallian and Hicksian demand? State the Slutsky equation.", answer: "When $\\bar{u} = V(p,I)$, $x(p,I) = x^c(p,V(p,I))$ — they coincide. Marshallian demand captures substitution + income effects; Hicksian captures only the substitution effect. Slutsky equation: $\\frac{\\partial x}{\\partial p_x} = \\frac{\\partial x^c}{\\partial p_x} - x \\cdot \\frac{\\partial x}{\\partial I}$.", category: "Microeconomics Ch4"},
      {id: 74, question: "Verify Roy's Identity for Cobb-Douglas $V = I/(2\\sqrt{p_x p_y})$.", answer: "$\\partial V/\\partial p_x = -I/(4p_x^{3/2} p_y^{1/2})$, $\\partial V/\\partial I = 1/(2\\sqrt{p_x p_y})$. Roy: $x = -(\\partial V/\\partial p_x)/(\\partial V/\\partial I) = [I/(4p_x^{3/2}p_y^{1/2})] \\cdot 2\\sqrt{p_x p_y} = I/(2p_x)$. ✓ Matches Marshallian demand $x^* = I/(2p_x)$.", category: "Microeconomics Ch4"},
      {id: 75, question: "Give the economic intuition for Shephard's Lemma: $\\partial E/\\partial p_x = x^c$.", answer: "By the envelope theorem, when $p_x$ rises by one unit, the cost increase through re-optimization is zero at the margin (FOCs hold). Only the direct effect matters: the consumer pays one extra euro per unit of $x^c$ consumed. Hence $\\partial E/\\partial p_x = x^c$ (the quantity of $x$ at the optimum).", category: "Microeconomics Ch4"},
      {id: 76, question: "Given $V = I/(2p_x^{1/2}p_y^{1/2})$, invert to find $E(p_x, p_y, \\bar{u})$.", answer: "Set $V(p_x, p_y, E) = \\bar{u}$: $E/(2\\sqrt{p_x p_y}) = \\bar{u} \\Rightarrow E = 2\\bar{u}\\sqrt{p_x p_y}$. This matches the expenditure function derived directly from the Cobb-Douglas EMP.", category: "Microeconomics Ch4"},
      {id: 77, question: "Given $V = I/(p_x + (1/4)p_y)$, find Hicksian demand $y^c$ using Shephard's lemma.", answer: "Step 1: $E = \\bar{u}(p_x + (1/4)p_y)$ (invert $V$). Step 2: $y^c = \\partial E/\\partial p_y = \\bar{u}/4$. The Hicksian demand for $y$ is $\\bar{u}/4$, independent of prices — the substitution effect for $y$ is zero in this case.", category: "Microeconomics Ch4"},
    ],

lt: [
    {id: 1, category: "Axioms of Choice", question: "What does transitivity mean in consumer theory?", answer: "{{Transitivity}} ensures internal consistency by stating that if $A\\succeq B$ and $B\\succeq C$, then it must follow that $A\\succeq C$."},
    {id: 1, category: "Axioms of Choice", question: "Why is the axiom of completeness criticized?", answer: "Economists criticize the axiom of {{completeness}} because individuals may face {{uncertainty}} or lack information, making it difficult to rank disparate options like a vacation vs. a career move."},
    {id: 1, category: "Axioms of Choice", question: "When is a preference relation rational?", answer: "A preference relation is rational if it is both {{complete}} and {{transitive}}. This rationality implies that individual choices are {{internally consistent}}."},

    {id: 2, category: "Continuity and Lexicographic Preferences", question: "What does continuity imply for demand?", answer: "The assumption of {{continuity}} implies that small changes in prices or income will result in {{small changes}} in demand."},
    {id: 2, category: "Continuity and Lexicographic Preferences", question: "How does lexicographic ordering work?", answer: "In a {{lexicographic}} preference ordering, the consumer ranks choices by a primary criterion first and only uses secondary criteria to {{break ties}}."},
    {id: 2, category: "Continuity and Lexicographic Preferences", question: "Why do lexicographic preferences violate continuity?", answer: "Lexicographic preferences violate the axiom of {{continuity}} because even an infinitesimal change ($\\varepsilon$) in the primary good can cause a {{sudden jump}} in preference ranking."},

    {id: 3, category: "Defining the Utility Function", question: "How does a utility function rank bundles?", answer: "A utility function $u(x,y)$ assigns a {{real number}} to every choice such that preferred choices receive {{higher}} values."},
    {id: 3, category: "Defining the Utility Function", question: "What can appear as arguments in a utility function?", answer: "Examples of arguments in a utility function include physical goods, {{leisure}}, habits, and {{peer group}} status."},
    {id: 3, category: "Defining the Utility Function", question: "What does it mean that utility is ordinal?", answer: "Utility is an {{ordinal}} concept, meaning it only provides a {{ranking}} of bundles; any {{order-preserving transformation}} will represent the exact same underlying preferences."},

    {id: 4, category: "Monotonicity and Desirability", question: "What is the intuition behind monotonicity?", answer: "The economic intuition behind {{monotonicity}} is the simple idea that \"{{more}} is better\"."},
    {id: 4, category: "Monotonicity and Desirability", question: "What is a neuter good?", answer: "If a consumer is indifferent to more of good $x$, then $x$ is called a {{neuter}}."},
    {id: 4, category: "Monotonicity and Desirability", question: "How is strong monotonicity stricter than weak monotonicity?", answer: "Strong monotonicity is {{stricter}} than weak monotonicity because it requires utility to increase if at least {{one}} good increases, while weak monotonicity only requires an increase if {{all}} goods increase."},

    {id: 5, category: "Substitutability and Indifference Curves", question: "What does an indifference curve show?", answer: "An {{indifference curve}} connects all consumption bundles $(x,y)$ that yield the same {{utility level}}."},
    {id: 5, category: "Substitutability and Indifference Curves", question: "How many indifference curves describe preferences?", answer: "Graphically, preferences are described by {{infinitely many}} indifference curves, one for each possible level of satisfaction."},
    {id: 5, category: "Substitutability and Indifference Curves", question: "Why can indifference curves not intersect?", answer: "If preferences are monotone and transitive, indifference curves {{cannot intersect}} because intersection would create a {{logical contradiction}} regarding which bundle is preferred."},

    {id: 6, category: "Convexity and Diminishing MRS", question: "What is the upper contour set?", answer: "Preferences are convex if the {{upper contour set}} (the set of bundles at least as good as bundle A) is a {{convex set}}."},
    {id: 6, category: "Convexity and Diminishing MRS", question: "What does strict convexity imply about balanced bundles?", answer: "For strictly convex preferences, a {{balanced bundle}} (weighted average) is strictly preferred to extreme bundles."},
    {id: 6, category: "Convexity and Diminishing MRS", question: "How are strictly convex preferences described mathematically?", answer: "A consumer who prefers a {{balanced bundle}} over an extreme one is said to have {{strictly convex}} preferences, which is mathematically represented by a utility function that is {{strictly quasiconcave}}."},

    {id: 7, category: "Cobb-Douglas and Linear Utility", question: "What is special about linear utility?", answer: "In the case of {{linear utility}}, the Marginal Rate of Substitution is {{constant}} everywhere."},
    {id: 7, category: "Cobb-Douglas and Linear Utility", question: "How do Cobb-Douglas indifference curves behave near the axes?", answer: "Indifference curves for the {{Cobb-Douglas}} utility function are hyperbolas that approach but {{never touch}} the axes."},
    {id: 7, category: "Cobb-Douglas and Linear Utility", question: "What type of optimum is common under linear utility?", answer: "For {{linear utility}}, the optimal consumption bundle is typically a {{corner solution}} where the consumer spends all income on the good with the lower {{price per unit of utility}}."},

    {id: 8, category: "Perfect Complements (Leontief)", question: "What are perfect complements?", answer: "Goods that must be consumed in fixed proportions are called {{perfect complements}}."},
    {id: 8, category: "Perfect Complements (Leontief)", question: "What happens to the MRS at the kink of a Leontief curve?", answer: "At the kink of a Leontief indifference curve, the Marginal Rate of Substitution is {{undefined}}."},
    {id: 8, category: "Perfect Complements (Leontief)", question: "What defines Leontief preferences?", answer: "Leontief goods are called {{perfect complements}} and are always consumed in {{fixed proportions}}; their indifference curves are {{L-shaped}} with a kink where $\\alpha x = \\beta y$."},

    {id: 9, category: "CES, Homothetic, and Quasilinear", question: "What does the CES function generalize?", answer: "The {{CES}} utility function is a major generalization that nests linear, {{Cobb-Douglas}}, and Leontief forms as special cases."},
    {id: 9, category: "CES, Homothetic, and Quasilinear", question: "Why are quasilinear preferences non-homothetic?", answer: "Quasilinear preferences are generally {{non-homothetic}} because the MRS depends on absolute levels, not just the {{ratio}} of goods."},
    {id: 9, category: "CES, Homothetic, and Quasilinear", question: "What defines homothetic preferences?", answer: "Preferences are {{homothetic}} if the MRS depends only on the {{ratio}} of the goods ($y/x$); while Cobb-Douglas and CES are homothetic, {{quasilinear}} utility is generally not."},

    {id: 10, category: "Budget Constraints and Sets", question: "What does the budget set contain?", answer: "The {{budget set}} includes all bundles that are affordable given the consumer's {{income}} and market prices."},
    {id: 10, category: "Budget Constraints and Sets", question: "How many units of x can be bought if all income is spent on x?", answer: "If a consumer spends all income on good $x$, they can purchase {{$I / p_x$}} units."},
    {id: 10, category: "Budget Constraints and Sets", question: "What are the intercepts of the budget line?", answer: "If a consumer has an income $I$ and prices $p_x$, $p_y$, the horizontal intercept of the budget line is {{$I / p_x$}} and the vertical intercept is {{$I / p_y$}}."},

    {id: 11, category: "Optimal Choice and Tangency Conditions", question: "What does $\\omega$ represent in the Lagrange method?", answer: "In the {{Lagrange method}}, the variable $\\omega$ represents the {{Lagrange multiplier}}."},
    {id: 11, category: "Optimal Choice and Tangency Conditions", question: "What is an interior solution?", answer: "An {{interior solution}} occurs when the consumer chooses to consume {{positive}} amounts of all goods."},
    {id: 11, category: "Optimal Choice and Tangency Conditions", question: "What must hold at an interior optimum?", answer: "At an {{interior optimum}}, the tangency condition requires that the consumer's {{subjective}} marginal rate of substitution equals the {{objective}} market price ratio."},

    {id: 12, category: "Marshallian Demand and Indirect Utility", question: "How is the indirect utility function derived?", answer: "By substituting Marshallian demands back into the original {{utility function}}, we derive the {{indirect utility}} function."},
    {id: 12, category: "Marshallian Demand and Indirect Utility", question: "What does Roy's Identity do?", answer: "{{Roy's Identity}} allows us to find Marshallian demand by differentiating the {{indirect utility}} function."},
    {id: 12, category: "Marshallian Demand and Indirect Utility", question: "Why is Marshallian demand called uncompensated?", answer: "Marshallian demand functions are often called {{uncompensated}} demand because they reflect both {{substitution}} and income effects as prices change."},

    {id: 13, category: "Hicksian Demand", question: "What does Hicksian demand depend on?", answer: "Unlike Marshallian demand, {{Hicksian}} demand functions $x^c(p, \\bar{u})$ depend on a target {{utility level}} rather than income."},
    {id: 13, category: "Hicksian Demand", question: "What effect does Hicksian demand isolate?", answer: "Hicksian demand only accounts for the {{substitution effect}}."},
    {id: 13, category: "Hicksian Demand", question: "How does Hicksian demand differ from Marshallian demand?", answer: "While Marshallian demand is a function of income ($I$), {{Hicksian}} demand is a function of a target {{utility level}} ($\\bar{u}$)."},

    {id: 14, category: "Expenditure Function and Shephard's Lemma", question: "What do we get when differentiating the expenditure function with respect to $p_x$?", answer: "Differentiating $E(p, \\bar{u})$ with respect to $p_x$ yields the {{Hicksian demand}} function for $x$."},
    {id: 14, category: "Expenditure Function and Shephard's Lemma", question: "How is the expenditure function related to indirect utility?", answer: "The {{expenditure function}} is the dual counterpart to the {{indirect utility}} function."},
    {id: 14, category: "Expenditure Function and Shephard's Lemma", question: "What does Shephard's Lemma state?", answer: "According to {{Shephard's Lemma}}, if you take the partial derivative of the {{expenditure function}} with respect to price $p_x$, you obtain the {{Hicksian demand}} for good $x$."},

    {id: 15, category: "Duality", question: "What is duality?", answer: "The concept of {{duality}} shows that utility maximization and {{expenditure minimization}} are two sides of the same optimization problem."},
    {id: 15, category: "Duality", question: "What happens when solving $E(p, V(p, I))$?", answer: "Solving $E(p, V(p, I))$ results in the original {{income}} level $I$."},
    {id: 15, category: "Duality", question: "How are the indirect utility and expenditure functions related?", answer: "The concepts of utility maximization and expenditure minimization are {{duals}} of each other, meaning the indirect utility function and the expenditure function are {{mathematical inverses}}."},

    ],
    theory: [
      {id: 1, title: "Axioms of Choice: Completeness, Transitivity, and Rationality", html: `
  <h2>Preferences and Fundamental Assumptions</h2>
  <p>The foundation of consumer theory is the <strong>weak preference relation</strong> $\\succeq$, which is treated as a primitive concept from which other choice relations are derived.</p>
  <p><strong>Completeness</strong> means that for any two consumption bundles $A$ and $B$, the consumer can compare them and say either $A \\succeq B$, $B \\succeq A$, or both, in which case the consumer is indifferent.</p>
  <p><strong>Transitivity</strong> requires internal consistency of choice. If a consumer prefers $A$ to $B$ and $B$ to $C$, then the consumer must also prefer $A$ to $C$.</p>
  <p>A preference relation is called <strong>rational</strong> if it satisfies both <strong>completeness</strong> and <strong>transitivity</strong>.</p>
  <p>From the weak preference relation, two additional relations are derived:</p>
  <ul>
    <li><strong>Strict preference</strong>: $A \\succ B$</li>
    <li><strong>Indifference</strong>: $A \\sim B$</li>
  </ul>
  <p>Example: A student comparing universities is complete if they can compare every pair of schools. Their preferences are transitive if, when they prefer Graz to Vienna and Vienna to Salzburg, they must also prefer Graz to Salzburg.</p>
`},

{id: 2, title: "Continuity and Lexicographic Preferences", html: `
  <h2>Preferences and Fundamental Assumptions</h2>
  <p><strong>Continuity</strong> is the assumption that if bundle $A$ is preferred to bundle $B$, then any bundle $A'$ that is sufficiently close to $A$ must also be preferred to $B$.</p>
  <p>This assumption is important because it ensures that small changes in prices or income lead to small changes in behavior rather than sudden jumps, and it supports the existence of utility functions.</p>
  <p>A well-known violation of continuity occurs with <strong>lexicographic preferences</strong> $\\succeq_L$.</p>
  <p>Under lexicographic preferences for two goods $(x_1, x_2)$, the consumer first compares only the amount of $x_1$. Only if the two bundles have the same amount of $x_1$ does the consumer compare $x_2$.</p>
  <p>Example: A safety-obsessed car buyer may rank cars only by safety rating. If Car A is even slightly safer than Car B, Car A is chosen regardless of price or color. Only if safety is identical does price matter. This violates continuity because an infinitesimally small change in safety can completely reverse the ranking.</p>
`},

{id: 3, title: "Defining the Utility Function", html: `
  <h2>The Concept of Utility and its Properties</h2>
  <p>A <strong>utility function</strong> $u(x,y)$ assigns real numbers to consumption bundles such that more preferred bundles receive higher numbers.</p>
  <p>In modern microeconomics, utility is understood as an <strong>ordinal</strong> concept. The numerical value itself does not measure how much more a bundle is preferred; it only indicates the ranking.</p>
  <p>Therefore, any <strong>monotone transformation</strong> of a utility function represents the same preferences, as long as the order of bundles is preserved.</p>
  <p>The arguments of the utility function may include not only physical goods, but also leisure, habits, or the consumption of others when status matters.</p>
  <p>Example: If preferences are represented by $u(x,y)=x^{\\alpha}y^{\\beta}$, they can also be represented by $v(x,y)=\\alpha\\ln x+\\beta\\ln y$. Since the natural logarithm is strictly increasing, both functions generate the same ranking of bundles.</p>
`},

{id: 4, title: "Monotonicity and Desirability", html: `
  <h2>The Concept of Utility and its Properties</h2>
  <p><strong>Monotonicity</strong> expresses the idea that more of a good thing is preferred to less.</p>
  <p>Under <strong>Strong Monotonicity (SM)</strong>, if bundle $x$ has at least as much of every good as bundle $x'$ and strictly more of at least one good, then $x \\succ x'$.</p>
  <p>This rules out the existence of <strong>bads</strong> and <strong>neuters</strong>. A bad lowers utility, while a neuter has no effect on utility.</p>
  <p><strong>Weak Monotonicity (M)</strong> is less restrictive. It requires only that $x \\succ x'$ if $x$ contains strictly more of every good than $x'$.</p>
  <p>Example: If a consumer is offered the same amount of pizza and one extra soda, strong monotonicity requires that they strictly prefer the new bundle. If the bundle also contains packaging waste, and the consumer is indifferent to the amount of waste, this violates strong monotonicity because the waste acts as a neuter.</p>
`},

{id: 5, title: "Substitutability and Indifference Curves", html: `
  <h2>The Concept of Utility and its Properties</h2>
  <p><strong>Substitutability</strong> describes the trade-offs a consumer is willing to make between goods while maintaining the same level of utility.</p>
  <p>This idea is represented by <strong>indifference curves</strong>, which connect all bundles $(x,y)$ that yield the same utility level $\\bar{u}$.</p>
  <p>The <strong>Marginal Rate of Substitution</strong> $MRS_{x,y}$ is the negative slope of the indifference curve and is given by:</p>
  $$MRS_{x,y} = \\frac{MU_x}{MU_y}$$
  <p>It measures how much of good $y$ the consumer is willing to give up for one more unit of good $x$.</p>
  <p>A key implication of transitivity and monotonicity is that indifference curves for different utility levels <strong>cannot intersect</strong>.</p>
  <p>Example: If a consumer is willing to give up 4 units of juice for 1 extra unit of curry, their MRS is 4. As they get more curry, the willingness to sacrifice juice usually falls, so the indifference curve becomes flatter.</p>
`},

{id: 6, title: "Convexity and Diminishing MRS", html: `
  <h2>The Concept of Utility and its Properties</h2>
  <p><strong>Convexity</strong> captures the idea that consumers usually prefer balanced bundles to extreme ones.</p>
  <p>Preferences are <strong>strictly convex</strong> if any weighted average of two indifferent bundles is strictly preferred to either of the original bundles.</p>
  <p>This is equivalent to saying that the <strong>upper contour set</strong> is convex.</p>
  <p>Analytically, strict convexity implies a <strong>diminishing marginal rate of substitution</strong>. As the quantity of good $x$ increases, the consumer is willing to give up less and less of good $y$ for an additional unit of $x$.</p>
  <p>Example: If bundles $A=(5,20)$ and $B=(20,5)$ are indifferent, a convex consumer prefers the balanced bundle $C=(12.5,12.5)$. For the utility function $u=\\sqrt{xy}$, the MRS falls as $x$ increases, showing diminishing willingness to substitute.</p>
`},

{id: 7, title: "Cobb-Douglas and Linear Utility", html: `
  <h2>Common Mathematical Models of Utility</h2>
  <p>The <strong>Cobb-Douglas utility function</strong> is:</p>
  $$u(x,y)=x^{\\alpha}y^{\\beta}$$
  <p>It is widely used because it represents smooth, strictly monotone, and strictly convex preferences.</p>
  <p>Its indifference curves are hyperbolic and approach the axes without touching them.</p>
  <p>By contrast, <strong>linear utility</strong> takes the form:</p>
  $$u(x,y)=\\alpha x+\\beta y$$
  <p>This represents <strong>perfect substitutes</strong>. The MRS is constant at $\\alpha/\\beta$, so the consumer is always willing to substitute one good for the other at a fixed rate.</p>
  <p>Example: If Pepsi and Coca-Cola are seen as identical, utility can be written as $u=x+y$. The consumer will always trade one for the other at a 1:1 rate, which gives straight-line indifference curves.</p>
`},

{id: 8, title: "Perfect Complements (Leontief)", html: `
  <h2>Common Mathematical Models of Utility</h2>
  <p><strong>Leontief utility</strong> is written as:</p>
  $$u(x,y)=\\min\\{ax,by\\}$$
  <p>This represents <strong>perfect complements</strong>, meaning goods must be consumed in fixed proportions.</p>
  <p>The indifference curves are <strong>L-shaped</strong> with a kink where $ax=by$.</p>
  <p>At the kink, the MRS is undefined because the slope changes abruptly.</p>
  <p>These preferences are <strong>weakly monotone</strong> but not strongly monotone, because additional units of one good alone do not increase utility once the required proportion has already been met.</p>
  <p>Example: Left and right shoes are perfect complements. If someone has 5 left shoes and 10 right shoes, utility is still only 5. Utility rises only if more left shoes are also added.</p>
`},

{id: 9, title: "Generalizations: CES, Homothetic, and Quasilinear", html: `
  <h2>Common Mathematical Models of Utility</h2>
  <p>A major generalization is the <strong>CES utility function</strong>:</p>
  $$U(x,y)=[\\alpha x^{\\delta}+\\beta y^{\\delta}]^{1/\\delta}$$
  <p>The parameter $\\delta$ determines the degree of substitutability:</p>
  <ul>
    <li>as $\\delta \\to 1$, the function becomes linear,</li>
    <li>as $\\delta \\to 0$, it approaches Cobb-Douglas,</li>
    <li>as $\\delta \\to -\\infty$, it approaches Leontief.</li>
  </ul>
  <p>Preferences are <strong>homothetic</strong> if the MRS depends only on the ratio $y/x$. Graphically, indifference curves then have identical slopes along any ray from the origin.</p>
  <p><strong>Quasilinear utility</strong> has the form $u=x+f(y)$. In this case, indifference curves are vertical translations of one another, and the MRS depends only on one good.</p>
  <p>Example: For $u(x,y)=x+\\ln y$, the MRS depends only on $y$. The willingness to trade $y$ for $x$ is the same regardless of how much $x$ the consumer already has.</p>
`},

{id: 10, title: "Budget Constraints and Sets", html: `
  <h2>Utility Maximization (Marshallian Demand)</h2>
  <p>The consumer faces the <strong>budget constraint</strong>:</p>
  $$p_x x + p_y y \\leq I$$
  <p>where $p_x$ and $p_y$ are prices and $I$ is income.</p>
  <p>The <strong>budget line</strong> contains all bundles that exactly exhaust income, while the <strong>budget set</strong> contains all affordable bundles on or below the line.</p>
  <p>The slope of the budget line is the relative price ratio:</p>
  $$-\\frac{p_x}{p_y}$$
  <p>The intercepts are $I/p_x$ on the $x$-axis and $I/p_y$ on the $y$-axis.</p>
  <p>Example: If income is 100, the price of pizza is 10 and the price of soda is 5, then the budget constraint is $10x+5y=100$. The consumer can buy at most 10 pizzas or 20 sodas. The slope is $-2$, so 1 pizza costs 2 sodas in market terms.</p>
`},

{id: 11, title: "Optimal Choice and Tangency Conditions", html: `
  <h2>Utility Maximization (Marshallian Demand)</h2>
  <p>The <strong>Utility Maximization Problem (UMP)</strong> asks which affordable bundle places the consumer on the highest attainable indifference curve.</p>
  <p>For smooth and convex preferences, the optimum is usually an <strong>interior solution</strong> where the budget line is tangent to the indifference curve.</p>
  <p>At this point:</p>
  $$MRS = \\frac{p_x}{p_y}$$
  <p>Equivalently, the first-order condition is:</p>
  $$\\frac{MU_x}{MU_y} = \\frac{p_x}{p_y}$$
  <p>Example: If a consumer's MRS is 3 but the market price ratio is 2, the consumer values one more pizza more highly than the market does. They should consume more pizza until their MRS falls to 2.</p>
`},

{id: 12, title: "Marshallian Demand and Indirect Utility", html: `
  <h2>Utility Maximization (Marshallian Demand)</h2>
  <p>Solving the utility maximization problem for all prices and income levels yields the <strong>Marshallian demand functions</strong>:</p>
  <p>$x(p_x, p_y, I)$ and $y(p_x, p_y, I)$</p>
  <p>These are also called <strong>uncompensated demand functions</strong>.</p>
  <p>Substituting the optimal bundle back into the utility function gives the <strong>indirect utility function</strong>:</p>
  <p>$V(p_x, p_y, I)$</p>
  <p>This shows the maximum utility achievable at given prices and income.</p>
  <p><strong>Roy's Identity</strong> makes it possible to recover Marshallian demand directly from the indirect utility function.</p>
  <p>Example: For $u=\\sqrt{xy}$, the Marshallian demands are $x=\\frac{I}{2p_x}$ and $y=\\frac{I}{2p_y}$. Substituting these into utility yields the indirect utility function.</p>
`},

{id: 13, title: "Hicksian (Compensated) Demand", html: `
  <h2>Expenditure Minimization and Duality</h2>
  <p>The <strong>Expenditure Minimization Problem (EMP)</strong> is the dual problem to utility maximization.</p>
  <p>Instead of maximizing utility subject to a budget, the consumer minimizes expenditure subject to achieving a target utility level $\\bar{u}$.</p>
  <p>The solution gives the <strong>Hicksian demand functions</strong>:</p>
  <p>$x^c(p_x, p_y, \\bar{u})$ and $y^c(p_x, p_y, \\bar{u})$</p>
  <p>These are called <strong>compensated demands</strong> because income is adjusted to keep utility constant when prices change.</p>
  <p>Therefore, Hicksian demand isolates the <strong>substitution effect</strong>.</p>
  <p>Example: For perfect complements $u=\\min\\{x,4y\\}$, the consumer must consume in fixed proportions. Hicksian demand for $y$ is $y^c=\\bar{u}/4$.</p>
`},

{id: 14, title: "The Expenditure Function and Shephard's Lemma", html: `
  <h2>Expenditure Minimization and Duality</h2>
  <p>The <strong>expenditure function</strong> $E(p_x, p_y, \\bar{u})$ gives the minimum cost required to reach utility level $\\bar{u}$ at given prices.</p>
  <p>It is calculated as total spending on the Hicksian demand bundle:</p>
  $$E = p_x x^c + p_y y^c$$
  <p>A central result is <strong>Shephard's Lemma</strong>, which states that the partial derivative of the expenditure function with respect to a price equals the corresponding Hicksian demand:</p>
  $$\\frac{\\partial E}{\\partial p_x} = x^c(p, \\bar{u})$$
  <p>Example: If $E(p_x, p_y, \\bar{u})=2\\bar{u}\\sqrt{p_x p_y}$, then differentiating with respect to $p_x$ yields the Hicksian demand for $x$.</p>
`},

{id: 15, title: "Relationships and Inverses: Duality", html: `
  <h2>Expenditure Minimization and Duality</h2>
  <p>The UMP and EMP are connected by the principle of <strong>duality</strong>.</p>
  <p>The <strong>indirect utility function</strong> $V(p,I)$ and the <strong>expenditure function</strong> $E(p,\\bar{u})$ are mathematical inverses of each other.</p>
  <p>This means:</p>
  $$V(p, E(p, \\bar{u})) = \\bar{u}$$
  <p>and</p>
  $$E(p, V(p, I)) = I$$
  <p>Thus, if one knows the expenditure needed to achieve a target utility, plugging that expenditure into the indirect utility function returns the same target utility. Conversely, plugging the maximum achievable utility into the expenditure function returns the original income.</p>
  <p>Example: If $V=\\frac{I}{2\\sqrt{p_x p_y}}$, then solving for $I$ gives the expenditure function $E=2\\bar{u}\\sqrt{p_x p_y}$, confirming the inverse relationship.</p>
`},
   {id: 16, title: "Substitutability: Linear vs. Cobb-Douglas", html: `
    <h2>Substitutability: Linear vs. Cobb-Douglas</h2>
    <p>Substitutability is higher for linear utility $u(x, y) = \\alpha x + \\beta y$.</p>
    <p>The degree of substitutability is captured by the MRS and the curvature of the indifference curves:</p>
    <p><strong>For linear utility:</strong> $MRS_{x,y} = \\alpha/\\beta$, a constant. The consumer is always willing to trade goods at the fixed rate $\\alpha/\\beta$, regardless of how much of each good they currently have. The IC is a straight line — perfectly flat (or straight). Goods are perfect substitutes.</p>
    <p><strong>For Cobb-Douglas utility:</strong> $MRS_{x,y} = (\\alpha/\\beta)(y/x)$, which diminishes as $x$ increases along an IC. The IC is strictly convex (bowed toward the origin). As the consumer has more $x$ relative to $y$, they become less willing to trade $y$ for additional $x$. Substitution becomes progressively harder.</p>
    <p>Economically, the more curved the indifference curve, the harder it is to substitute one good for another. Straight ICs represent the extreme case of perfect substitutability, while the Leontief (L-shaped) IC represents perfect complementarity (no substitutability at all). Cobb-Douglas lies between these extremes.</p>
  `},
  {id: 17, title: "MRS is Independent of Utility Units", html: `
    <h2>MRS is Independent of Utility Units</h2>
    <p>Let $v(x, y) = f(u(x, y))$ where $f$ is a strictly increasing function ($f' > 0$). We compute the MRS for $v$:</p>
    $$MRS^v_{x,y} = \\frac{\\partial v/\\partial x}{\\partial v/\\partial y}$$
    <p>By the chain rule:</p>
    <ul>
      <li>$\\frac{\\partial v}{\\partial x} = f'(u) \\cdot u_x$</li>
      <li>$\\frac{\\partial v}{\\partial y} = f'(u) \\cdot u_y$</li>
    </ul>
    <p>Therefore:</p>
    $$MRS^v_{x,y} = \\frac{f'(u) \\cdot u_x}{f'(u) \\cdot u_y} = \\frac{u_x}{u_y} = MRS^u_{x,y}$$
    <p>The $f'(u) > 0$ cancels exactly from numerator and denominator. The MRS is unchanged by any strictly increasing transformation of utility.</p>
    <p>This result confirms that the MRS is a purely ordinal concept: it captures the relative marginal valuation of goods (the rate at which the consumer is willing to substitute), which depends only on the shape of the indifference curves, not on the specific utility numbers assigned to them.</p>
  `},
  {id: 18, title: "Analytically Showing Diminishing MRS", html: `
    <h2>Analytically Showing Diminishing MRS</h2>
    <p>There are two main approaches:</p>
    <h3>Approach 1 — Direct differentiation along the IC</h3>
    <p>Compute $MRS_{x,y} = u_x / u_y$ as a function of $x$, using the constraint $u(x, y) = \\bar{u}$ to express $y$ as a function $y(x)$. Then differentiate MRS with respect to $x$:</p>
    $$\\frac{d(MRS)}{dx} = \\frac{d}{dx}\\left[\\frac{u_x(x, y(x))}{u_y(x, y(x))}\\right]$$
    <p>where $dy/dx = -MRS$ along the IC. If this derivative is negative for all $(x, y)$ on the IC, MRS is diminishing.</p>
    <h3>Approach 2 — Bordered Hessian / Quasiconcavity</h3>
    <p>Preferences are strictly convex (equivalently, MRS is strictly diminishing) if and only if $u$ is strictly quasiconcave. Strict quasiconcavity can be checked via the bordered Hessian $\\bar{H}$:</p>
    <p>MRS is strictly diminishing if and only if $\\det(\\bar{H}) > 0$. This is the standard second-order condition for strict quasiconcavity in two variables.</p>
    <p>In practice, for simple utility functions, the direct approach (substituting $y(x)$ into MRS and differentiating) is most straightforward.</p>
  `},
  {id: 19, title: "Upper Contour Sets", html: `
    <h2>Upper Contour Sets</h2>
    <p>The upper contour set of a bundle $(x', y')$ is the set of all bundles that are at least as good as $(x', y')$:</p>
    $$UCS(x', y') = \\{(x, y) \\in X : (x, y) \\succeq (x', y')\\} = \\{(x, y) \\in X : u(x, y) \\geq u(x', y')\\}$$
    <p>It is the set of all consumption bundles yielding utility at least as high as the reference bundle.</p>
    <p>Graphically (under monotonicity), the UCS of a point $P$ on indifference curve $IC_0$ is the region on or above (and to the upper-right of) the IC passing through $P$. It is the "at-least-as-good-as" region: all bundles that lie on the same IC or on higher ICs.</p>
    <p>The UCS is bounded below by the indifference curve itself (the boundary) and extends outward/upward indefinitely (since more goods mean higher utility under monotonicity).</p>
    <p>The shape of UCS is directly tied to convexity of preferences: preferences are (weakly) convex if and only if all upper contour sets are convex sets.</p>
  `},
  {id: 20, title: "Convex Sets", html: `
    <h2>Convex Sets</h2>
    <p>A set $S \\subseteq \\mathbb{R}^N$ is called convex if, for any two points $a, b \\in S$ and any scalar $\\lambda \\in [0, 1]$, the convex combination (weighted average) also belongs to $S$:</p>
    $$\\lambda a + (1 - \\lambda)b \\in S \\quad \\text{for all } \\lambda \\in [0, 1]$$
    <p>In words: the entire line segment connecting any two points in $S$ lies within $S$.</p>
    <h3>Graphically in $\\mathbb{R}^2$</h3>
    <ul>
      <li>A <strong>convex set</strong> has no "dents" or "indentations" — it is a "fat" region. Examples: a disk, a rectangle, a half-plane, a triangle (including interior).</li>
      <li>A <strong>non-convex set</strong> has at least one pair of points whose connecting segment partially lies outside the set. Example: a crescent shape, a star, or a set with a hole.</li>
    </ul>
    <p>The relevance to economics: upper contour sets being convex captures the idea that "averages are preferred to extremes." If bundle $A$ and bundle $B$ are both at least as good as some reference bundle $C$, then any convex combination $\\lambda A + (1-\\lambda)B$ is also at least as good as $C$. This is the formal statement of convex preferences.</p>
  `},
  {id: 21, title: "Convex but Not Strictly Convex Preferences", html: `
    <h2>Convex but Not Strictly Convex Preferences</h2>
    <p>Convex (but not strictly convex) preferences allow indifference curves to contain flat (linear) segments.</p>
    <p>Strict convexity requires that any convex combination of two distinct bundles on the same IC is strictly preferred to both. Non-strict convexity only requires that the combination is at least as good (weakly preferred).</p>
    <p>A flat segment on an IC means there exist two distinct bundles $A$ and $B$ with $A \\sim B$, but $\\lambda A + (1-\\lambda)B \\sim A \\sim B$ (the mixture is indifferent to, not strictly better than, the endpoints). The consumer gains nothing from variety over that range.</p>
    <p>The key example is <strong>linear utility</strong> $u(x, y) = \\alpha x + \\beta y$: the entire IC is a straight line. Every mixture of two bundles on the same IC yields the same utility. Upper contour sets are half-planes (convex), but $MRS = \\alpha/\\beta$ is constant, not strictly diminishing.</p>
    <p><strong>Leontief utility</strong> offers another illustration: along the flat portions of the L-shaped IC (horizontal and vertical arms), the MRS is constant (0 or $\\infty$), so preferences are convex but not strictly convex there.</p>
    <p>In summary: convex but not strictly convex preferences permit perfect substitute-like behavior over some ranges, while still satisfying the weaker convexity requirement.</p>
  `},
  {id: 22, title: "u(x,y) = √(xy): Indifference Curve for ū = 10", html: `
    <h2>$u(x,y) = \\sqrt{xy}$: Indifference Curve for $\\bar{u} = 10$</h2>
    <p>Setting $u(x, y) = \\bar{u} = 10$:</p>
    $$\\sqrt{xy} = 10 \\implies xy = 100 \\implies y(x) = \\frac{100}{x}$$
    <p>The indifference curve for $\\bar{u} = 10$ is the rectangular hyperbola $y = 100/x$.</p>
    <p>This curve is strictly decreasing and strictly convex, asymptotic to both coordinate axes ($y \\to \\infty$ as $x \\to 0$, and $y \\to 0$ as $x \\to \\infty$). It passes through points such as $(5, 20)$, $(10, 10)$, and $(20, 5)$. The curve never touches either axis because $x = 0$ or $y = 0$ would give $u = 0$, which is below $\\bar{u} = 10$.</p>
  `},
  {id: 23, title: "u(x,y) = √(xy): MRS Generally and at x=5, x=20", html: `
    <h2>$u(x,y) = \\sqrt{xy}$: MRS Generally and at $x=5$, $x=20$</h2>
    <p>Computing the partial derivatives:</p>
    <ul>
      <li>$u_x = \\frac{1}{2} x^{-1/2} y^{1/2}$</li>
      <li>$u_y = \\frac{1}{2} x^{1/2} y^{-1/2}$</li>
    </ul>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{y}{x}$$
    <p>This is the general formula: $MRS = y/x$. On the IC $\\bar{u} = 10$, we have $y = 100/x$, so:</p>
    $$MRS = \\frac{100/x}{x} = \\frac{100}{x^2}$$
    <p><strong>At $x = 5$ (point A):</strong> $y = 100/5 = 20$, $MRS = 20/5 = 4$. (The consumer is willing to give up 4 units of $y$ for 1 unit of $x$ at this point.)</p>
    <p><strong>At $x = 20$ (point B):</strong> $y = 100/20 = 5$, $MRS = 5/20 = 0.25$. (The consumer is only willing to give up 0.25 units of $y$ for 1 unit of $x$ — much less than at point A.)</p>
    <p>The sharp decline from $MRS = 4$ to $MRS = 0.25$ as $x$ increases from 5 to 20 illustrates the rapidly diminishing marginal rate of substitution.</p>
  `},
  {id: 24, title: "u(x,y) = √(xy): Is MRS Diminishing?", html: `
    <h2>$u(x,y) = \\sqrt{xy}$: Is MRS Diminishing?</h2>
    <p>Yes, MRS is strictly diminishing.</p>
    <p>From the IC $\\bar{u} = 10$, $MRS = 100/x^2$. Differentiating with respect to $x$:</p>
    $$\\frac{d(MRS)}{dx} = -\\frac{200}{x^3} < 0 \\quad \\text{for all } x > 0.$$
    <p>This is strictly negative for all positive $x$, confirming that MRS strictly decreases as $x$ increases (with $y$ adjusting to remain on the IC).</p>
    <p>More generally, $MRS = y/x$, and as we move along any IC (increasing $x$ implies $y$ falls proportionally), the ratio $y/x$ declines. This is because the IC $y = \\bar{u}^2/x$ implies $y/x = \\bar{u}^2/x^2$, which is strictly decreasing in $x$.</p>
  `},
  {id: 25, title: "u(x,y) = √(xy): What Diminishing MRS Tells Us", html: `
    <h2>$u(x,y) = \\sqrt{xy}$: What Diminishing MRS Tells Us About $\\succeq$</h2>
    <p>Diminishing MRS implies that the preference relation $\\succeq$ is <strong>strictly convex</strong>.</p>
    <p>Strictly convex preferences have three equivalent characterizations:</p>
    <ol>
      <li>MRS is strictly diminishing as $x$ increases along any IC.</li>
      <li>Upper contour sets are strictly convex sets.</li>
      <li>The utility function $u$ is strictly quasiconcave.</li>
    </ol>
    <p>All three hold for $u = \\sqrt{xy}$:</p>
    <ul>
      <li>$MRS = y/x$ is strictly diminishing.</li>
      <li>Any convex combination of two distinct bundles on the same IC lies strictly above that IC (strictly preferred to the endpoints).</li>
      <li>$\\sqrt{xy}$ is a strictly quasiconcave function.</li>
    </ul>
    <p>Economically, strict convexity means the consumer has a "love of variety": balanced bundles (moderate amounts of both $x$ and $y$) are strictly preferred to extreme bundles (a lot of one and very little of the other), holding utility constant. This is why optimum consumption bundles under budget constraints typically involve positive quantities of both goods when preferences are strictly convex.</p>
  `},
  {id: 26, title: "Convexity Check: u(x,y) = x^(1/2)y^(1/2)", html: `
    <h2>Convexity Check: $u(x,y) = x^{1/2}y^{1/2}$</h2>
    <p>This is a Cobb-Douglas utility function with $\\alpha = \\beta = 1/2$, so it represents the same preferences as $\\sqrt{xy}$.</p>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{\\frac{1}{2}x^{-1/2}y^{1/2}}{\\frac{1}{2}x^{1/2}y^{-1/2}} = \\frac{y}{x}$$
    <p>Along an indifference curve, $y = \\bar{u}^2/x$ (from $x^{1/2}y^{1/2} = \\bar{u}$, squaring: $xy = \\bar{u}^2$, so $y = \\bar{u}^2/x$). Then:</p>
    $$MRS = \\frac{\\bar{u}^2/x}{x} = \\frac{\\bar{u}^2}{x^2}$$
    <p>This is strictly decreasing in $x$ ($d(MRS)/dx = -2\\bar{u}^2/x^3 < 0$).</p>
    <p><strong>Conclusion:</strong> MRS is strictly diminishing. Therefore, preferences represented by $u = x^{1/2}y^{1/2}$ are <strong>strictly convex</strong>. ✓</p>
  `},
  {id: 27, title: "Convexity Check: u(x,y) = x + xy + y", html: `
    <h2>Convexity Check: $u(x,y) = x + xy + y$</h2>
    <p>Compute the partial derivatives:</p>
    <ul>
      <li>$u_x = 1 + y$</li>
      <li>$u_y = 1 + x$</li>
    </ul>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{1 + y}{1 + x}$$
    <p>To determine if MRS is diminishing, differentiate with respect to $x$ along an IC (using $dy/dx = -MRS$):</p>
    $$\\frac{d}{dx}\\left[\\frac{1+y}{1+x}\\right] = \\frac{(dy/dx)(1+x) - (1+y)}{(1+x)^2}$$
    <p>Substituting $dy/dx = -MRS = -(1+y)/(1+x)$:</p>
    <p>Numerator $= \\left[\\frac{-(1+y)}{1+x}\\right](1+x) - (1+y) = -(1+y) - (1+y) = -2(1+y)$</p>
    <p>Since $y > 0$ in the relevant domain, $(1+y) > 0$, so the numerator $= -2(1+y) < 0$.</p>
    <p><strong>Conclusion:</strong> $d(MRS)/dx < 0$, so MRS is strictly diminishing. Preferences represented by $u = x + xy + y$ are <strong>strictly convex</strong>. ✓</p>
  `},
  {id: 28, title: "Convexity Check: u(x,y) = sqrt(x^2 + y^2)", html: `
    <h2>Convexity Check: $u(x,y) = \\sqrt{x^2 + y^2}$</h2>
    <p>Compute the partial derivatives:</p>
    <ul>
      <li>$u_x = \\dfrac{x}{\\sqrt{x^2 + y^2}}$</li>
      <li>$u_y = \\dfrac{y}{\\sqrt{x^2 + y^2}}$</li>
    </ul>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{x}{y}$$
    <p>The IC is $u = \\bar{u}$, meaning $\\sqrt{x^2 + y^2} = \\bar{u}$, i.e., $x^2 + y^2 = \\bar{u}^2$ — a circle of radius $\\bar{u}$.</p>
    <p>On this circle, $y = \\sqrt{\\bar{u}^2 - x^2}$, so:</p>
    $$MRS = \\frac{x}{\\sqrt{\\bar{u}^2 - x^2}}$$
    <p>Differentiating: $\\dfrac{d(MRS)}{dx} = \\dfrac{\\bar{u}^2}{(\\bar{u}^2 - x^2)^{3/2}} > 0$</p>
    <p>MRS is <strong>strictly increasing</strong> in $x$ along the IC — the opposite of diminishing MRS.</p>
    <p><strong>Conclusion:</strong> Preferences represented by $u = \\sqrt{x^2 + y^2}$ are <strong>NOT convex</strong>. Upper contour sets (the interior and boundary of circles beyond radius $\\bar{u}$) are non-convex. These preferences exhibit a "love of extremes": bundles concentrated heavily on one good are preferred to balanced bundles. ✗</p>
  `},
  {id: 29, title: "Cobb-Douglas: Strong Monotonicity", html: `
    <h2>Cobb-Douglas $u(x,y) = x^{\\alpha}y^{\\beta}$: Strong Monotonicity</h2>
    <p>Yes, Cobb-Douglas preferences are strongly monotone on the strictly positive orthant $X = \\mathbb{R}^2_{++} = \\{(x,y) : x > 0, y > 0\\}$.</p>
    <p>The partial derivatives are:</p>
    <ul>
      <li>$u_x = \\alpha x^{\\alpha-1} y^{\\beta} > 0$ (since $\\alpha > 0$, $x > 0$, $y > 0$)</li>
      <li>$u_y = \\beta x^{\\alpha} y^{\\beta-1} > 0$ (since $\\beta > 0$, $x > 0$, $y > 0$)</li>
    </ul>
    <p>Both marginal utilities are strictly positive. Therefore, increasing either good (holding the other fixed) strictly increases utility. If $x \\geq x'$ and $x \\neq x'$ (at least one component is strictly larger), then $u(x) > u(x')$, so $x \\succ x'$. This is precisely strong monotonicity.</p>
    <p><em>Note:</em> On the boundary of the positive orthant (when $x = 0$ or $y = 0$), utility equals zero regardless of the other good. So strong monotonicity holds in the interior but needs care at the axes.</p>
  `},
  {id: 30, title: "Cobb-Douglas: Indifference Curves and Axes", html: `
    <h2>Cobb-Douglas: Indifference Curves and Axes</h2>
    <p>The indifference curve for utility level $\\bar{u} > 0$ is given by:</p>
    $$x^{\\alpha} y^{\\beta} = \\bar{u} \\implies y = \\bar{u}^{1/\\beta} \\cdot x^{-\\alpha/\\beta}$$
    <p>This is a strictly decreasing, strictly convex curve (a generalized hyperbola).</p>
    <h3>Key properties of the IC</h3>
    <ul>
      <li>As $x \\to 0^+$, $y \\to +\\infty$: the curve rises steeply near the $y$-axis.</li>
      <li>As $x \\to +\\infty$, $y \\to 0^+$: the curve flattens near the $x$-axis.</li>
      <li>The curve is <strong>asymptotic to both axes</strong> — it approaches but never touches them.</li>
    </ul>
    <p>Therefore, Cobb-Douglas ICs do <strong>NOT cut the axes</strong>. This reflects the fact that $u(0, y) = 0$ and $u(x, 0) = 0$ for any $\\bar{u} > 0$ — having none of either good yields zero utility, which is below any positive $\\bar{u}$. To maintain positive utility, the consumer always needs strictly positive quantities of both goods.</p>
  `},
  {id: 31, title: "Cobb-Douglas: MRS_{x,y}", html: `
    <h2>Cobb-Douglas: $MRS_{x,y}$</h2>
    <p>Using $MRS = u_x / u_y$:</p>
    <ul>
      <li>$u_x = \\alpha x^{\\alpha-1} y^{\\beta}$</li>
      <li>$u_y = \\beta x^{\\alpha} y^{\\beta-1}$</li>
    </ul>
    $$MRS_{x,y} = \\frac{\\alpha x^{\\alpha-1} y^{\\beta}}{\\beta x^{\\alpha} y^{\\beta-1}} = \\frac{\\alpha}{\\beta} \\cdot \\frac{y}{x}$$
    <p>The MRS equals $\\frac{\\alpha}{\\beta}$ times the ratio of the quantities $y$ and $x$. It is:</p>
    <ul>
      <li><strong>Strictly diminishing:</strong> as $x$ increases along an IC ($y$ decreases), the ratio $y/x$ decreases, so MRS falls.</li>
      <li><strong>Proportional to $\\alpha/\\beta$:</strong> the coefficients $\\alpha$ and $\\beta$ reflect the relative importance of the goods.</li>
      <li><strong>Homogeneous of degree 0 in $(x, y)$:</strong> MRS depends only on the ratio $y/x$, confirming that Cobb-Douglas preferences are homothetic.</li>
    </ul>
  `},
  {id: 32, title: "Cobb-Douglas: Strict Convexity", html: `
    <h2>Cobb-Douglas: Strict Convexity</h2>
    <p>Yes, Cobb-Douglas preferences are <strong>strictly convex</strong>.</p>
    <p>The $MRS = (\\alpha/\\beta)(y/x)$ is strictly diminishing along every indifference curve:</p>
    <p>As $x$ increases along an IC (with $y$ falling to keep $u$ constant), the ratio $y/x$ decreases strictly, so $MRS = (\\alpha/\\beta)(y/x)$ decreases strictly.</p>
    <p>Formally, $d(MRS)/dx$ along the IC:</p>
    $$\\frac{d(MRS)}{dx} = \\frac{\\alpha}{\\beta} \\cdot \\frac{d(y/x)}{dx} = \\frac{\\alpha}{\\beta} \\cdot \\frac{(dy/dx) \\cdot x - y}{x^2}$$
    <p>With $dy/dx = -MRS = -(\\alpha/\\beta)(y/x)$:</p>
    $$\\text{Numerator} = \\frac{\\alpha}{\\beta}\\left[-\\frac{\\alpha}{\\beta}\\frac{y}{x} \\cdot x - y\\right] = \\frac{\\alpha}{\\beta}\\left(-\\frac{\\alpha y}{\\beta} - y\\right) = -\\frac{\\alpha}{\\beta}y\\left(\\frac{\\alpha}{\\beta} + 1\\right) < 0$$
    <p>So $d(MRS)/dx < 0$. MRS is strictly diminishing, confirming strict convexity.</p>
    <p>Equivalently, $u = x^{\\alpha} y^{\\beta}$ is strictly quasiconcave for $\\alpha, \\beta > 0$, and all upper contour sets are strictly convex sets.</p>
  `},
  {id: 33, title: "Cobb-Douglas: Normalizing α+β=1", html: `
    <h2>Cobb-Douglas: Why Normalizing $\\alpha+\\beta=1$ is Allowed</h2>
    <p>Because the transformation $v(x,y) = u(x,y)^{1/(\\alpha+\\beta)}$ is a strictly increasing monotone transformation, and therefore $v$ represents the same preferences as $u$.</p>
    <p>Specifically:</p>
    $$v(x,y) = [x^{\\alpha} y^{\\beta}]^{1/(\\alpha+\\beta)} = x^{\\alpha/(\\alpha+\\beta)} \\cdot y^{\\beta/(\\alpha+\\beta)}$$
    <p>Let $\\alpha' = \\alpha/(\\alpha+\\beta)$ and $\\beta' = \\beta/(\\alpha+\\beta)$. Then $\\alpha' + \\beta' = (\\alpha+\\beta)/(\\alpha+\\beta) = 1$. So $v$ has the same Cobb-Douglas form with exponents summing to 1.</p>
    <p>Since $f(t) = t^{1/(\\alpha+\\beta)}$ is a strictly increasing function for $t > 0$ and $1/(\\alpha+\\beta) > 0$, the transformation preserves the preference ordering:</p>
    $$u(x,y) \\geq u(x',y') \\iff v(x,y) \\geq v(x',y')$$
    <p>Therefore $v$ represents the same $\\succeq$ as $u$. The normalization is purely cosmetic — it simplifies expressions (e.g., expenditure shares equal $\\alpha'$ and $\\beta'$) without changing any economic predictions about demand, MRS, or comparative statics.</p>
  `},
  {id: 34, title: "Linear Utility: Strong Monotonicity", html: `
    <h2>Linear Utility $u(x,y) = \\alpha x + \\beta y$: Strong Monotonicity</h2>
    <p>Yes, linear utility functions express strongly monotone preferences (for $\\alpha, \\beta > 0$).</p>
    <ul>
      <li>$u_x = \\alpha > 0$</li>
      <li>$u_y = \\beta > 0$</li>
    </ul>
    <p>Both partial derivatives are strictly positive constants. Therefore:</p>
    <ul>
      <li>Increasing $x$ alone (holding $y$ fixed) strictly increases utility by $\\alpha > 0$.</li>
      <li>Increasing $y$ alone (holding $x$ fixed) strictly increases utility by $\\beta > 0$.</li>
      <li>If $x \\geq x'$ and $x \\neq x'$, then $u(x) = \\alpha x_1 + \\beta x_2 > \\alpha x_1' + \\beta x_2' = u(x')$ (at least one component is strictly larger and contributes positively).</li>
    </ul>
    <p>This satisfies the definition of strong monotonicity: $(x \\geq x') \\land (x \\neq x') \\implies x \\succ x'$. Neither good can be a neuter or a bad as long as $\\alpha > 0$ and $\\beta > 0$.</p>
  `},
  {id: 35, title: "Linear Utility: Indifference Curves and Axes", html: `
    <h2>Linear Utility: Indifference Curves and Axes</h2>
    <p>The indifference curve for utility level $\\bar{u}$ is:</p>
    $$\\alpha x + \\beta y = \\bar{u} \\implies y = \\frac{\\bar{u}}{\\beta} - \\frac{\\alpha}{\\beta}x$$
    <p>This is a straight line with slope $-\\alpha/\\beta$ and $y$-intercept $\\bar{u}/\\beta$.</p>
    <h3>Key observations</h3>
    <ul>
      <li>ICs are <strong>parallel straight lines</strong> with the same slope $-\\alpha/\\beta$. As $\\bar{u}$ increases, the IC shifts outward (higher intercept).</li>
      <li>ICs <strong>DO cut both axes</strong>: setting $x = 0$ gives $y = \\bar{u}/\\beta$ ($y$-axis intercept), and setting $y = 0$ gives $x = \\bar{u}/\\alpha$ ($x$-axis intercept). The consumer can achieve any utility level with either good alone.</li>
      <li>The constant slope reflects <strong>perfect substitutability</strong>: the consumer always trades $x$ for $y$ at the fixed rate $\\alpha/\\beta$, regardless of current consumption.</li>
      <li>Unlike Cobb-Douglas, there is no need for strictly positive quantities of both goods to achieve any given utility level.</li>
    </ul>
  `},
  {id: 36, title: "Linear Utility: MRS_{x,y}", html: `
    <h2>Linear Utility: $MRS_{x,y}$</h2>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{\\alpha}{\\beta}$$
    <p>The MRS is <strong>constant</strong> — it equals $\\alpha/\\beta$ everywhere in the consumption space, regardless of $x$ and $y$.</p>
    <p><strong>Economic interpretation:</strong> the consumer is always willing to trade $\\beta/\\alpha$ units of $y$ for 1 unit of $x$ (or equivalently, $\\alpha/\\beta$ units of $x$ for 1 unit of $y$). This rate does not change with the quantities consumed. The consumer does not value variety — a bundle with all $x$ (and no $y$) is just as good as any other bundle with the same total value.</p>
    <p>This constant MRS reflects that $x$ and $y$ are <strong>perfect substitutes</strong>: the consumer is indifferent about how the total utility is allocated between the two goods, as long as the total is the same.</p>
  `},
  {id: 37, title: "Linear Utility: Convexity", html: `
    <h2>Linear Utility: Convexity</h2>
    <p>Linear preferences are <strong>convex but NOT strictly convex</strong>.</p>
    <p>Since $MRS = \\alpha/\\beta$ is constant (not strictly diminishing), the characterization of strict convexity fails. Specifically:</p>
    <ul>
      <li>Upper contour sets are half-planes (convex sets), so convexity holds.</li>
      <li>However, for any two bundles $A$ and $B$ on the same IC, their convex combination $\\lambda A + (1-\\lambda)B$ also lies on the same IC (indifferent, not strictly preferred). So the strict convexity condition "mixtures are strictly preferred to extremes" fails.</li>
    </ul>
    <p>In practice, this means that the consumer's optimal bundle under a budget constraint is typically a <strong>corner solution</strong>: the consumer spends everything on whichever good has the lower price per unit of utility ($\\alpha/p_x$ vs $\\beta/p_y$). Interior solutions only arise when prices are exactly proportional to the MRS.</p>
    <p><em>Is normalization $\\alpha + \\beta = 1$ allowed?</em> Unlike Cobb-Douglas (where multiplying by $1/(\\alpha+\\beta)$ is a power transformation), for linear utility multiplying by $1/(\\alpha+\\beta)$ is also a strictly increasing linear transformation (scaling), which preserves preferences. So normalization is allowed here too. However, it changes the absolute values of marginal utilities (though not their ratio, the MRS), so it is less commonly applied.</p>
  `},
  {id: 38, title: "Linear Utility: Normalization α+β=1", html: `
    <h2>Linear Utility: Is Normalization $\\alpha+\\beta=1$ Allowed?</h2>
    <p>Unlike Cobb-Douglas, a linear transformation (multiplying by a constant $1/(\\alpha+\\beta)$) does preserve preferences — so technically the normalized version represents the same preferences.</p>
    <p>However, normalizing $\\alpha+\\beta=1$ changes the MRS value ($\\alpha/\\beta$), which affects the specific rate of substitution. The ranking is preserved but the normalization is somewhat less natural for linear utility since the cardinal values matter less here; it is technically allowed for ordinal purposes.</p>
    <p>The key distinction: for Cobb-Douglas, the normalization is a <em>power</em> transformation (non-linear), while for linear utility it is a <em>linear</em> scaling. Both are strictly increasing and therefore order-preserving. So while the answer is technically "yes, it is allowed," the normalization is rarely applied in practice for linear utility because it changes the coefficients in a way that may be less natural economically.</p>
  `},
  {id: 39, title: "Leontief Utility: Monotonicity", html: `
    <h2>Leontief Utility $u(x,y) = \\min\\{\\alpha x, \\beta y\\}$: Monotonicity</h2>
    <p>Leontief preferences satisfy <strong>weak monotonicity but NOT strong monotonicity</strong>.</p>
    <p>Consider a bundle at the kink: $\\alpha x < \\beta y$ (the $y$ constraint is slack). Increasing $y$ alone does not increase utility because $\\min\\{\\alpha x, \\beta y\\} = \\alpha x$ is determined solely by $x$. So having more $y$ does not make the consumer better off — a violation of strong monotonicity (where increasing any single good should strictly improve preference).</p>
    <p>However, <strong>weak monotonicity</strong> ($x \\gg x' \\implies x \\succ x'$) is satisfied. If all components are strictly larger, then $\\min\\{\\alpha x_1, \\beta x_2\\} > \\min\\{\\alpha x_1', \\beta x_2'\\}$ because both $\\alpha x_1 > \\alpha x_1'$ and $\\beta x_2 > \\beta x_2'$, so the minimum is also strictly larger.</p>
    <p>In summary:</p>
    <ul>
      <li><strong>Strong monotonicity:</strong> Fails (increasing the non-binding good has no effect).</li>
      <li><strong>Weak monotonicity:</strong> Holds (increasing all goods strictly improves utility).</li>
    </ul>
    <p>This reflects the complementary nature of Leontief goods: both must be available in the right proportion to gain any benefit.</p>
  `},
  {id: 40, title: "Leontief Utility: Indifference Curves", html: `
    <h2>Leontief Utility: Indifference Curves</h2>
    <p>Leontief indifference curves are L-shaped (right-angled), with the kink at the point where $\\alpha x = \\beta y$, i.e., $y/x = \\alpha/\\beta$.</p>
    <p>For a given utility level $\\bar{u} = \\min\\{\\alpha x, \\beta y\\}$:</p>
    <ul>
      <li><strong>On the horizontal arm</strong> ($\\alpha x > \\beta y$, $y$ is the binding constraint): utility $= \\beta y = \\bar{u}$, so $y = \\bar{u}/\\beta$ is fixed regardless of $x$. The IC is a horizontal line.</li>
      <li><strong>On the vertical arm</strong> ($\\alpha x < \\beta y$, $x$ is the binding constraint): utility $= \\alpha x = \\bar{u}$, so $x = \\bar{u}/\\alpha$ is fixed regardless of $y$. The IC is a vertical line.</li>
      <li><strong>At the kink</strong> ($\\alpha x = \\beta y$): both constraints are binding simultaneously. The kink point is $(\\bar{u}/\\alpha, \\bar{u}/\\beta)$.</li>
    </ul>
    <p>The kink lies on the ray $y/x = \\alpha/\\beta$ through the origin. Higher ICs (larger $\\bar{u}$) have kinks further from the origin.</p>
    <p><strong>Economic interpretation:</strong> $x$ and $y$ are perfect complements used in fixed proportions $\\alpha:\\beta$. Adding more of one good beyond the required proportion generates zero additional utility — like adding a left shoe without a right shoe.</p>
  `},
  {id: 41, title: "Leontief Utility: MRS_{x,y}", html: `
    <h2>Leontief Utility: $MRS_{x,y}$</h2>
    <p>The MRS for Leontief utility is not well-defined at the kink, and takes extreme values on the arms:</p>
    <p><strong>On the horizontal arm</strong> ($\\alpha x > \\beta y$, $y$ is binding):</p>
    <p>Utility $= \\beta y$. Moving horizontally (increasing $x$) does not increase utility. $MRS_{x,y} \\to 0$. (The IC is flat here, slope $= 0$, so MRS $= 0$.)</p>
    <p><strong>On the vertical arm</strong> ($\\alpha x < \\beta y$, $x$ is binding):</p>
    <p>Utility $= \\alpha x$. Moving vertically (increasing $y$) does not increase utility. The IC is vertical, slope $\\to -\\infty$, so MRS $\\to +\\infty$.</p>
    <p><strong>At the kink point:</strong></p>
    <p>The IC has a corner, so the derivative does not exist. The MRS is undefined (or can take any value in $[0, \\infty]$). This is the optimal consumption point under most budget constraints: the consumer always demands goods in the ratio $y/x = \\alpha/\\beta$.</p>
    <p>The kink is where consumers locate their optimal bundle, and standard MRS conditions for optimality do not apply there in the conventional sense.</p>
  `},
  {id: 42, title: "Leontief Utility: Convexity", html: `
    <h2>Leontief Utility: Convexity</h2>
    <p>Leontief preferences are <strong>convex but NOT strictly convex</strong>.</p>
    <p>To check convexity: consider two bundles $A$ and $B$ on the same IC (same utility level $\\bar{u}$). Any convex combination $\\lambda A + (1-\\lambda)B$ also achieves at least $\\bar{u}$ in utility:</p>
    $$u(\\lambda A + (1-\\lambda)B) = \\min\\{\\alpha(\\lambda x_A + (1-\\lambda)x_B),\\, \\beta(\\lambda y_A + (1-\\lambda)y_B)\\}$$
    $$\\geq \\lambda \\cdot \\min\\{\\alpha x_A, \\beta y_A\\} + (1-\\lambda) \\cdot \\min\\{\\alpha x_B, \\beta y_B\\} = \\lambda\\bar{u} + (1-\\lambda)\\bar{u} = \\bar{u}$$
    <p>So $u(\\lambda A + (1-\\lambda)B) \\geq \\bar{u}$. Upper contour sets are convex. ✓</p>
    <p>However, <strong>strict convexity fails</strong>: on the flat arm of the IC (say $x$ varies while $y = \\bar{u}/\\beta$ is fixed), any mixture of two points on that arm gives the same utility $\\bar{u}$. The mixture is indifferent to, not strictly preferred over, the endpoints. ✗</p>
    <p>In summary, Leontief preferences are convex (upper contour sets are convex) but not strictly convex (no love of variety — the right proportions matter, not variety per se).</p>
  `},
  {id: 43, title: "CES Utility: Cases for Different Values of δ", html: `
    <h2>CES Utility: Cases for Different Values of $\\delta$</h2>
    <p>The CES utility function $U(x, y) = (\\alpha x^{\\delta} + \\beta y^{\\delta})^{1/\\delta}$ nests several utility functions depending on $\\delta \\leq 1$:</p>
    <table>
      <tr><th>$\\delta$</th><th>IC shape</th><th>Interpretation</th></tr>
      <tr><td>$\\delta = 1$</td><td>Straight lines</td><td>Perfect substitutes</td></tr>
      <tr><td>$0 &lt; \\delta &lt; 1$</td><td>Bowed, less curved than CD</td><td>Imperfect substitutes (high elasticity)</td></tr>
      <tr><td>$\\delta \\to 0$</td><td>Cobb-Douglas hyperbolas</td><td>Standard diminishing MRS</td></tr>
      <tr><td>$-1 &lt; \\delta &lt; 0$</td><td>More curved than CD</td><td>Intermediate complements</td></tr>
      <tr><td>$\\delta \\to -\\infty$</td><td>L-shapes</td><td>Perfect complements (Leontief)</td></tr>
    </table>
    <p>The parameter $\\delta$ controls the elasticity of substitution $\\sigma = 1/(1-\\delta)$: higher $\\delta$ means more substitutability ($\\sigma$ larger), lower $\\delta$ means more complementarity ($\\sigma \\to 0$ as $\\delta \\to -\\infty$, $\\sigma \\to \\infty$ as $\\delta \\to 1$).</p>
  `},
  {id: 44, title: "CES → Cobb-Douglas as δ→0", html: `
    <h2>CES Converges to Cobb-Douglas as $\\delta\\to 0$</h2>
    <p>We take the logarithm of $U(x,y) = (\\alpha x^{\\delta} + \\beta y^{\\delta})^{1/\\delta}$ and find the limit as $\\delta \\to 0$.</p>
    <p>Let $L = \\ln U = \\frac{1}{\\delta} \\cdot \\ln(\\alpha x^{\\delta} + \\beta y^{\\delta})$.</p>
    <p>As $\\delta \\to 0$, this is a $0/0$ indeterminate form. Apply L'Hôpital's rule (differentiating numerator and denominator with respect to $\\delta$):</p>
    <ul>
      <li>Numerator derivative: $\\dfrac{d}{d\\delta}[\\ln(\\alpha x^{\\delta} + \\beta y^{\\delta})] = \\dfrac{\\alpha x^{\\delta} \\ln x + \\beta y^{\\delta} \\ln y}{\\alpha x^{\\delta} + \\beta y^{\\delta}}$</li>
      <li>Denominator derivative: $\\dfrac{d}{d\\delta}[\\delta] = 1$</li>
    </ul>
    <p>As $\\delta \\to 0$: $x^{\\delta} \\to 1$ and $y^{\\delta} \\to 1$, so:</p>
    $$\\text{Limit} = \\frac{\\alpha \\ln x + \\beta \\ln y}{\\alpha + \\beta}$$
    <p>Therefore:</p>
    $$\\ln U \\to \\frac{\\alpha \\ln x + \\beta \\ln y}{\\alpha + \\beta} = \\ln\\left[x^{\\alpha/(\\alpha+\\beta)} \\cdot y^{\\beta/(\\alpha+\\beta)}\\right]$$
    <p>Exponentiating: <strong>$U \\to x^{\\alpha/(\\alpha+\\beta)} \\cdot y^{\\beta/(\\alpha+\\beta)}$</strong></p>
    <p>This is precisely the normalized Cobb-Douglas utility function. Thus, CES utility converges to Cobb-Douglas as $\\delta \\to 0$. ✓</p>
  `},
  {id: 45, title: "CES Utility: Homothetic Preferences", html: `
    <h2>CES Utility: Homothetic Preferences</h2>
    <p>Yes. All CES utility functions represent homothetic preferences.</p>
    <p>Recall: preferences are homothetic (given monotonicity) if $MRS_{x,y}$ depends only on the ratio $y/x$, not on the absolute levels of $x$ and $y$.</p>
    <p>For CES utility $U = (\\alpha x^{\\delta} + \\beta y^{\\delta})^{1/\\delta}$:</p>
    <ul>
      <li>$U_x = (\\alpha x^{\\delta} + \\beta y^{\\delta})^{1/\\delta - 1} \\cdot \\alpha x^{\\delta-1}$</li>
      <li>$U_y = (\\alpha x^{\\delta} + \\beta y^{\\delta})^{1/\\delta - 1} \\cdot \\beta y^{\\delta-1}$</li>
    </ul>
    $$MRS_{x,y} = \\frac{U_x}{U_y} = \\frac{\\alpha}{\\beta} \\cdot \\left(\\frac{x}{y}\\right)^{\\delta-1} = \\frac{\\alpha}{\\beta} \\cdot \\left(\\frac{y}{x}\\right)^{1-\\delta}$$
    <p>This depends only on the ratio $y/x$ (or equivalently $x/y$), not on the scale of $(x, y)$ separately. Therefore MRS is constant along any ray through the origin, confirming that CES preferences are homothetic for all valid $\\delta$.</p>
    <p>This includes all special cases: $\\delta \\to 1$ (linear, constant MRS), $\\delta \\to 0$ (Cobb-Douglas, MRS $\\propto y/x$), and $\\delta \\to -\\infty$ (Leontief, MRS $= 0$ or $\\infty$ depending on proportions).</p>
  `},
  {id: 46, title: "Cobb-Douglas: Homothetic Preferences", html: `
    <h2>Cobb-Douglas: Homothetic Preferences</h2>
    <p>Yes. Cobb-Douglas utility $u(x,y) = x^{\\alpha} y^{\\beta}$ represents homothetic preferences.</p>
    $$MRS_{x,y} = \\frac{\\alpha}{\\beta} \\cdot \\frac{y}{x}$$
    <p>This depends only on the ratio $y/x$, not on the individual levels of $x$ and $y$. Therefore, MRS is constant along any ray through the origin ($y/x = \\text{constant}$ implies MRS $= \\text{constant}$ along that ray).</p>
    <p>This means that if we scale both goods by the same factor $t > 0$ (moving along a ray: $(tx, ty)$), the MRS is unchanged: MRS at $(tx, ty) = (\\alpha/\\beta)(ty/tx) = (\\alpha/\\beta)(y/x) = $ same as at $(x, y)$.</p>
    <p>Economically, this means that <strong>income expansion paths are straight lines through the origin</strong>. As income doubles (with prices fixed), the optimal bundle simply doubles in scale. This is a hallmark of homothetic preferences and makes Cobb-Douglas particularly tractable for macro and trade models.</p>
  `},
  {id: 47, title: "Linear Utility: Homothetic Preferences", html: `
    <h2>Linear Utility: Homothetic Preferences</h2>
    <p>Yes. Linear utility $u(x,y) = \\alpha x + \\beta y$ represents homothetic preferences.</p>
    $$MRS_{x,y} = \\frac{\\alpha}{\\beta}$$
    <p>This is a constant — it does not depend on $x$ or $y$ at all, let alone on their ratio. A constant is trivially a function of $y/x$ only (or of any other variable), so linear preferences are homothetic.</p>
    <p>Geometrically: along any ray through the origin (where $y/x$ is fixed), the MRS is $\\alpha/\\beta$, same as everywhere else. The indifference curves are parallel straight lines with the same slope $-\\alpha/\\beta$ everywhere.</p>
    <p>As a special case of homotheticity: the income expansion path is any mix of goods achieving the optimal MRS. Since MRS $= \\alpha/\\beta$ is fixed, the consumer is indifferent among all proportions (corner solutions or any mix), but the demand for each good is linear in income. This income-linearity of demand is a general property of homothetic preferences.</p>
  `},
  {id: 48, title: "Not All Utility Functions are Homothetic", html: `
    <h2>Not All Utility Functions are Homothetic</h2>
    <p>No. Not all utility functions represent homothetic preferences. A clear counterexample is quasilinear utility.</p>
    <p>Consider $u(x, y) = x + \\ln y$:</p>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{1}{1/y} = y$$
    <p>The MRS depends only on $y$, not on the ratio $y/x$. This means that along a ray through the origin (where $y/x = k$ is constant, so $y = kx$), as $x$ and $y$ scale up together: MRS $= y = kx$, which <strong>increases</strong> as we move further along the ray. The MRS is not constant along rays.</p>
    <p>Therefore, quasilinear preferences are <strong>non-homothetic</strong>. The income expansion path is NOT a straight line through the origin: as income increases, the demand for $y$ stays roughly constant (because the consumer's willingness to pay for $y$ is determined by MRS $= y$, which is independent of $x$), while all extra income goes toward $x$.</p>
    <p>Other examples of non-homothetic preferences include utility functions with subsistence levels, Stone-Geary utility, and any function where MRS depends on levels rather than ratios.</p>
  `},
  {id: 49, title: "Quasilinear Utility: Strong Monotonicity", html: `
    <h2>Quasilinear Utility $u(x,y) = x + \\ln y$: Strong Monotonicity</h2>
    <p>Yes, quasilinear preferences as given are strongly monotone on the domain $x \\in \\mathbb{R}$, $y > 0$.</p>
    <ul>
      <li>$u_x = 1 > 0$</li>
      <li>$u_y = 1/y > 0$ for all $y > 0$</li>
    </ul>
    <p>Both partial derivatives are strictly positive. Therefore:</p>
    <ul>
      <li>More $x$ (holding $y$ fixed) always strictly increases utility by exactly 1 per unit.</li>
      <li>More $y$ (holding $x$ fixed) always strictly increases utility (by $1/y$ per unit, which is positive for $y > 0$).</li>
    </ul>
    <p>Since both marginal utilities are positive, increasing any component strictly increases utility. If $x \\geq x'$ and $x \\neq x'$, then $u(x) > u(x')$, satisfying strong monotonicity.</p>
    <p><em>Note:</em> as $y \\to 0^+$, $u_y = 1/y \\to \\infty$, meaning the marginal utility of $y$ becomes very large when $y$ is scarce (consistent with $\\ln y \\to -\\infty$ as $y \\to 0$).</p>
  `},
  {id: 50, title: "Quasilinear Utility: Indifference Curves", html: `
    <h2>Quasilinear Utility: Indifference Curves</h2>
    <p>Setting $u(x, y) = \\bar{u}$:</p>
    $$x + \\ln y = \\bar{u} \\implies x = \\bar{u} - \\ln y \\implies y = e^{(\\bar{u} - x)}$$
    <h3>Key observations about the ICs</h3>
    <p><strong>Shape:</strong> Each IC is of the form $y = e^{(\\bar{u} - x)} = e^{\\bar{u}} \\cdot e^{-x}$. These are exponential decay curves — strictly decreasing and strictly convex. The ICs are all <strong>vertical translations</strong> of each other in the $(x, y)$ plane — each IC has exactly the same shape, just shifted up or down (for different $\\bar{u}$ values, only the constant $e^{\\bar{u}}$ changes).</p>
    <h3>Axis intersections</h3>
    <ul>
      <li><strong>$x$-axis ($y = 0$):</strong> $y = e^{(\\bar{u} - x)} > 0$ for all finite $x$, so the IC never touches the $x$-axis ($y$ approaches 0 only as $x \\to +\\infty$). The IC does <strong>NOT cut the $x$-axis</strong>.</li>
      <li><strong>$y$-axis ($x = 0$):</strong> $y = e^{\\bar{u}} > 0$, which is well-defined. The IC <strong>DOES cut the $y$-axis</strong> at $y = e^{\\bar{u}}$.</li>
    </ul>
    <p><strong>Homotheticity:</strong> Since all ICs are vertical shifts of one another (not radial expansions from the origin), they are NOT homothetic — the ICs for different utility levels are not scaled versions of each other.</p>
  `},
  {id: 51, title: "Quasilinear Utility: MRS_{x,y}", html: `
    <h2>Quasilinear Utility: $MRS_{x,y}$</h2>
    $$MRS_{x,y} = \\frac{u_x}{u_y} = \\frac{1}{1/y} = y$$
    <p>The MRS equals the quantity of $y$ currently consumed. This has several notable properties:</p>
    <p><strong>Depends only on $y$, not on $x$:</strong> No matter how much or how little $x$ the consumer has, the MRS is determined entirely by the level of $y$. This is the defining feature of quasilinear utility — the marginal utility of $x$ is constant ($= 1$), so the willingness to trade $y$ for $x$ depends only on how much $y$ the consumer already has.</p>
    <p><strong>Diminishing MRS:</strong> As $x$ increases along an IC (and $y$ falls accordingly), $MRS = y$ falls. The MRS is diminishing, confirming that quasilinear preferences are strictly convex.</p>
    <p><strong>Income effect on $y$ is zero:</strong> Because MRS $= y$ depends only on $y$, the optimal level of $y$ is pinned down by the price ratio alone ($MRS = p_x/p_y \\Rightarrow y^* = p_x/p_y$), independent of income. All income effects go entirely to good $x$. This is why quasilinear preferences are used to model goods with no income effect (e.g., numeraire goods).</p>
  `},
  {id: 52, title: "Quasilinear Preferences: Not Homothetic", html: `
    <h2>Quasilinear Preferences: Not Homothetic</h2>
    <p>No. Quasilinear preferences $u(x, y) = x + \\ln y$ are <strong>NOT homothetic</strong>.</p>
    <p>Recall: preferences are homothetic if $MRS_{x,y}$ depends only on the ratio $y/x$.</p>
    <p>For quasilinear utility, $MRS = y$. This depends only on the level of $y$ — not on the ratio $y/x$.</p>
    <p>To see why this violates homotheticity, consider two points on the same ray through the origin: $(x, y)$ and $(2x, 2y)$ (doubling both goods). At $(x, y)$: MRS $= y$. At $(2x, 2y)$: MRS $= 2y \\neq y$. The MRS changes as we scale up along the ray, so the preference relation is NOT homothetic.</p>
    <p>The income expansion path confirms this: as income increases (with prices fixed), the optimal $y^* = p_x/p_y$ stays constant ($y$ is a "luxury" with zero income elasticity in this model), while all additional income goes to $x$. This is non-homothetic behavior — homothetic preferences would require demand for both goods to scale proportionally with income.</p>
    <p>Quasilinear utility is specifically designed to capture situations where one good (here $x$, the numeraire) absorbs all income effects.</p>
  `},

  {id: 53, title: "MRS via Total Differentiation and Equimarginal Principle", html: `
    <h2>MRS via Total Differentiation</h2>
    <p>Totally differentiate the indifference condition $u(x,y) = \\bar{u}$:</p>
    $$u_x\\, dx + u_y\\, dy = 0 \\implies \\left.\\frac{dy}{dx}\\right|_{\\bar{u}} = -\\frac{u_x}{u_y}$$
    <p>Therefore: $MRS_{x,y} = -\\left.\\frac{dy}{dx}\\right|_{\\bar{u}} = \\frac{u_x}{u_y} = \\frac{MU_x}{MU_y}$</p>
    <h3>Interior First-Order Condition</h3>
    <p>The tangency condition becomes:</p>
    $$\\frac{MU_x}{MU_y} = \\frac{p_x}{p_y} \\iff \\frac{MU_x}{p_x} = \\frac{MU_y}{p_y}$$
    <p>This is the <strong>equimarginal principle</strong>: at the optimum, the marginal utility per euro spent is equal across all goods.</p>
  `},

  {id: 54, title: "FOC Necessity and Sufficiency for Best Choice", html: `
    <h2>Is the Tangency Condition $MRS = p_x/p_y$ Necessary and Sufficient?</h2>
    <p><strong>Necessity:</strong> The FOC is necessary for an interior optimum (assuming $u$ is differentiable and the constraint is binding). At an interior optimum, the gradient conditions must hold.</p>
    <p><strong>Not sufficient in general.</strong> A tangency may be:</p>
    <ul>
      <li>A local minimum or saddle point (with non-convex preferences)</li>
      <li>One of multiple tangencies — we need to find the global maximiser</li>
    </ul>
    <p><strong>Sufficient when:</strong> preferences are strictly convex ($u$ is strictly quasiconcave). In this case, a unique interior tangency is the global maximum.</p>
  `},

  {id: 55, title: "Corner Solutions with Perfect Substitutes", html: `
    <h2>Corner Solutions: $u = \\alpha x + \\beta y$ (Perfect Substitutes)</h2>
    <p>All ICs have constant slope $-\\alpha/\\beta$.</p>
    <h3>Case 1: Tangency NOT satisfied</h3>
    <p>If $p_x/p_y < \\alpha/\\beta$ ($x$ gives more utility per euro), the consumer spends all income on $x$: $(x^*, y^*) = (I/p_x, 0)$. The IC through the optimum is steeper than the budget line — no tangency.</p>
    <h3>Case 2: Tangency IS satisfied (degenerate)</h3>
    <p>If $p_x/p_y = \\alpha/\\beta$ exactly, the budget line and all ICs are parallel. Every bundle on the budget line — including corners — is optimal. The FOC $MRS = p_x/p_y$ holds everywhere but does not pin down a unique solution.</p>
  `},

  {id: 56, title: "Can the Optimum be at (0,0)?", html: `
    <h2>Can the Optimum be at Zero for Both Goods?</h2>
    <p><strong>No</strong>, under monotonicity with $I > 0$.</p>
    <p>If $I > 0$ and preferences are monotonic, $(0,0)$ is affordable but any bundle $(x, 0)$ with $x > 0$ is also affordable and strictly preferred by monotonicity. The consumer always prefers to spend all income.</p>
    <p><strong>Exception:</strong> If $I = 0$, the only affordable bundle is $(0,0)$ and it is trivially the optimum.</p>
  `},

  {id: 57, title: "Corner Solution with Quasilinear Preferences", html: `
    <h2>Corner Solution: $u = x + \\ln y$</h2>
    <p>Interior FOC: $MRS = y = p_x/p_y$, so $y^* = p_x/p_y$.</p>
    <p>Budget constraint: $x^* = \\frac{I - p_x(p_x/p_y)(p_y/p_x)}{p_x} = \\frac{I - p_x}{p_x}$.</p>
    <p>This requires $I \\geq p_x$. If $I < p_x$, then $x^* < 0$ is infeasible, so the corner solution applies: <strong>$x^* = 0$, $y^* = I/p_y$</strong>.</p>
    <p>Example ($p_x=2$, $p_y=1$, $I=1$): $y^*=1$, $x^*=0$ — all income spent on $y$.</p>
    <p>There is generally no corner at $y = 0$ because $\\ln(0) = -\\infty$ (infinite disutility).</p>
  `},

  {id: 58, title: "Lagrange Multiplier ω: Marginal Utility of Income", html: `
    <h2>Economic Interpretation of $\\omega$</h2>
    <p>From the UMP FOCs: $\\omega = MU_x/p_x = MU_y/p_y$.</p>
    <p>If $I$ rises by 1 euro spent on $x$: additional units $= 1/p_x$, additional utility $\\approx u_x/p_x = \\omega$.</p>
    <p><strong>$\\omega$ = marginal utility of income</strong>: how much utility rises when the budget increases by one euro.</p>
    <p>By the envelope theorem: $\\partial V(p,I)/\\partial I = \\omega$.</p>
    <p>$\\omega$ is the "shadow price" of the budget constraint — the marginal value of relaxing it by one unit. Higher prices $\\Rightarrow$ lower $\\omega$.</p>
  `},

  {id: 59, title: "Principle of Optimality: MU_x/p_x = MU_y/p_y", html: `
    <h2>Principle of Optimality</h2>
    <p>At the interior optimum: $\\dfrac{MU_x}{p_x} = \\dfrac{MU_y}{p_y} = \\omega$</p>
    <p>The marginal utility per euro spent is equal across all goods ("bang for the buck").</p>
    <h3>Why must this hold?</h3>
    <p>Suppose $MU_x/p_x > MU_y/p_y$. Shifting 1 euro from $y$ to $x$ raises utility (more gained from $x$ than lost from $y$). This reallocation is profitable until equality holds. Similarly if $MU_x/p_x < MU_y/p_y$, shift toward $y$. At the optimum, no such profitable reallocation is possible.</p>
  `},

  {id: 60, title: "Willingness to Pay and the Optimality Condition", html: `
    <h2>Marginal Willingness to Pay</h2>
    <p>The ratio $MU_x/MU_y = MRS_{x,y}$ is the consumer's <em>subjective</em> value of $x$ in terms of $y$.</p>
    <p>$MU_x/\\omega$ converts marginal utility into money: it is the consumer's <strong>marginal willingness to pay (WTP)</strong> for one more unit of $x$ — the maximum euros the consumer would give up.</p>
    <h3>Optimality condition: $p_x = MU_x/\\omega$</h3>
    <ul>
      <li>If $p_x < WTP$: $x$ is underpriced relative to what the consumer values it — buy more</li>
      <li>If $p_x > WTP$: $x$ is overpriced — buy less (or none: corner solution)</li>
      <li>At optimum: market price equals marginal WTP</li>
    </ul>
  `},

  {id: 61, title: "Marshallian Demand: Cobb-Douglas u = x^(1/2)y^(1/2)", html: `
    <h2>Marshallian Demand: Cobb-Douglas</h2>
    <p>$u(x,y) = x^{1/2}y^{1/2}$, budget $p_x x + p_y y = I$.</p>
    <h3>FOCs</h3>
    $$\\frac{1}{2}x^{-1/2}y^{1/2} = \\omega p_x \\quad \\text{and} \\quad \\frac{1}{2}x^{1/2}y^{-1/2} = \\omega p_y$$
    <p>Dividing: $y/x = p_x/p_y \\implies p_y y = p_x x$</p>
    <p>Substituting into budget: $2p_x x = I \\implies$</p>
    $$x^* = \\frac{I}{2p_x}, \\quad y^* = \\frac{I}{2p_y}$$
    <p>Each good receives exactly half of income (expenditure shares $= 1/2$ each), independent of prices.</p>
    <p>Lagrange multiplier: $\\omega = \\dfrac{1}{2\\sqrt{p_x p_y}}$</p>
  `},

  {id: 62, title: "Marshallian Demand: CES u = x^(1/2) + y^(1/2)", html: `
    <h2>Marshallian Demand: CES ($\\delta = 1/2$)</h2>
    <p>$u(x,y) = x^{1/2} + y^{1/2}$</p>
    <h3>FOCs</h3>
    $$\\frac{1}{2}x^{-1/2} = \\omega p_x \\quad \\text{and} \\quad \\frac{1}{2}y^{-1/2} = \\omega p_y$$
    <p>Ratio: $(y/x)^{1/2} = p_x/p_y \\implies y = x(p_x/p_y)^2$</p>
    <p>Substituting into budget:</p>
    $$x^* = \\frac{I p_y}{p_x(p_x+p_y)}, \\quad y^* = \\frac{I p_x}{p_y(p_x+p_y)}$$
    <p>Unlike Cobb-Douglas, expenditure shares here depend on prices — the key advantage of CES.</p>
  `},

  {id: 63, title: "Cobb-Douglas vs CES: Empirical Realism", html: `
    <h2>Cobb-Douglas vs CES: Which is More Realistic?</h2>
    <h3>Cobb-Douglas</h3>
    <p>Predicts constant expenditure shares ($p_x x^*/I = \\alpha/(\\alpha+\\beta)$) regardless of prices. Empirically, shares do shift with prices, so Cobb-Douglas is too restrictive. Advantage: very tractable, widely used as baseline.</p>
    <h3>CES</h3>
    <p>More flexible — allows varying elasticity of substitution $\\sigma = 1/(1-\\delta)$. Expenditure shares respond to price changes. Nests Cobb-Douglas as $\\delta \\to 0$, linear utility as $\\delta \\to 1$, Leontief as $\\delta \\to -\\infty$.</p>
    <p><strong>Conclusion:</strong> CES is more attractive for empirical work. Both are stylised — neither captures non-homothetic income effects, satiation, or discontinuities.</p>
  `},

  {id: 64, title: "Marshallian Demand: Perfect Complements min{x, 4y}", html: `
    <h2>Marshallian Demand: Perfect Complements</h2>
    <p>$u(x,y) = \\min\\{x, 4y\\}$. The Lagrangian cannot be applied (not differentiable at the kink).</p>
    <h3>Complementarity condition</h3>
    <p>At the optimum, goods are consumed in fixed proportion: $x^* = 4y^*$ (otherwise resources are wasted on the abundant good).</p>
    <p>From $x = 4y$ and budget $p_x x + p_y y = I$:</p>
    $$4p_x y + p_y y = I \\implies y(4p_x + p_y) = I$$
    $$y^* = \\frac{I}{4p_x + p_y}, \\quad x^* = \\frac{4I}{4p_x + p_y}$$
    <p>Both goods are normal and own-price elastic.</p>
  `},

  {id: 65, title: "Properties of the Indirect Utility Function V(p, I)", html: `
    <h2>Properties of $V(p_x, p_y, I)$</h2>
    <ol>
      <li><strong>Increasing in $I$:</strong> Higher income allows higher utility. $\\partial V/\\partial I = \\omega > 0$.</li>
      <li><strong>Decreasing in prices:</strong> Higher prices shrink the budget set. $\\partial V/\\partial p_x \\leq 0$.</li>
      <li><strong>Homogeneous of degree 0</strong> in $(p_x, p_y, I)$: Doubling all prices and income leaves the budget set unchanged. $V(\\lambda p_x, \\lambda p_y, \\lambda I) = V(p_x, p_y, I)$.</li>
      <li><strong>Quasiconvex in prices:</strong> Upper contour sets in price space are convex.</li>
      <li><strong>Roy's Identity:</strong> $x(p,I) = -\\dfrac{\\partial V/\\partial p_x}{\\partial V/\\partial I}$ — Marshallian demand recoverable from $V$.</li>
    </ol>
  `},

  {id: 66, title: "Indirect Utility: Cobb-Douglas", html: `
    <h2>Indirect Utility: Cobb-Douglas $u = x^{1/2}y^{1/2}$</h2>
    <p>Substitute Marshallian demands $x^* = I/(2p_x)$ and $y^* = I/(2p_y)$:</p>
    $$V = \\left(\\frac{I}{2p_x}\\right)^{1/2} \\cdot \\left(\\frac{I}{2p_y}\\right)^{1/2} = \\frac{I}{2\\sqrt{p_x p_y}}$$
    $$V(p_x, p_y, I) = \\frac{I}{2\\sqrt{p_x p_y}}$$
    <h3>Verification of envelope theorem</h3>
    $$\\frac{\\partial V}{\\partial I} = \\frac{1}{2\\sqrt{p_x p_y}} = \\omega \\checkmark$$
    <p>$V$ is increasing in $I$, decreasing in both prices, and homogeneous of degree 0 in $(p_x, p_y, I)$.</p>
  `},

  {id: 67, title: "Indirect Utility: Perfect Complements min{x, 4y}", html: `
    <h2>Indirect Utility: Perfect Complements</h2>
    <p>At the optimum $x^* = 4I/(4p_x+p_y)$ and $y^* = I/(4p_x+p_y)$.</p>
    $$V = \\min\\{x^*, 4y^*\\} = \\min\\left\\{\\frac{4I}{4p_x+p_y},\\, \\frac{4I}{4p_x+p_y}\\right\\}$$
    $$V(p_x, p_y, I) = \\frac{4I}{4p_x+p_y}$$
    <p>Both arguments are equal at the kink — the consumer is always at the corner of the L-shaped IC.</p>
  `},

  {id: 68, title: "EMP First-Order Conditions vs UMP", html: `
    <h2>Expenditure Minimization: FOCs</h2>
    <p>EMP Lagrangian: $\\mathcal{L} = p_x x + p_y y + \\omega(\\bar{u} - u(x,y))$</p>
    <p>FOCs: $p_x = \\omega u_x$, $p_y = \\omega u_y$, $u(x,y) = \\bar{u}$</p>
    <p>Dividing: $\\dfrac{p_x}{p_y} = \\dfrac{u_x}{u_y} = MRS_{x,y}$</p>
    <h3>Comparison with UMP</h3>
    <p><strong>Same tangency condition.</strong> The difference is in the third condition:</p>
    <ul>
      <li>UMP: fixes income — $p_x x + p_y y = I$</li>
      <li>EMP: fixes utility — $u(x,y) = \\bar{u}$</li>
    </ul>
    <p>When $\\bar{u} = V(p,I)$, Hicksian and Marshallian demands coincide. The two problems are dual.</p>
  `},

  {id: 69, title: "Properties of the Expenditure Function E(p, ū)", html: `
    <h2>Properties of $E(p_x, p_y, \\bar{u})$</h2>
    <ol>
      <li><strong>Increasing in $\\bar{u}$:</strong> Higher target utility costs more. $\\partial E/\\partial \\bar{u} \\geq 0$.</li>
      <li><strong>Increasing in prices:</strong> Higher prices raise minimum cost. $\\partial E/\\partial p_x \\geq 0$.</li>
      <li><strong>Homogeneous of degree 1</strong> in $(p_x, p_y)$: $E(\\lambda p_x, \\lambda p_y, \\bar{u}) = \\lambda E$.</li>
      <li><strong>Concave in prices:</strong> The consumer substitutes toward cheaper goods. $E$ is a concave function of $(p_x, p_y)$.</li>
      <li><strong>Shephard's Lemma:</strong> $\\partial E/\\partial p_x = x^c(p, \\bar{u})$.</li>
    </ol>
    <p>$\\partial E/\\partial \\bar{u}$ = marginal cost of utility — the minimum additional expenditure to raise utility by one unit. By the envelope theorem, $\\partial E/\\partial \\bar{u} = \\omega$ (the EMP Lagrange multiplier).</p>
  `},

  {id: 70, title: "Budget Set vs Upper Contour Set", html: `
    <h2>Budget Set vs Upper Contour Set</h2>
    <p><strong>Budget set:</strong> $B(p,I) = \\{(x,y) \\in X : p_x x + p_y y \\leq I\\}$<br>
    — all affordable bundles at income $I$. A triangle bounded by the budget line and the axes.</p>
    <p><strong>Upper contour set:</strong> $UCS(\\bar{u}) = \\{(x,y) \\in X : u(x,y) \\geq \\bar{u}\\}$<br>
    — all bundles yielding at least utility $\\bar{u}$. The region on and above the IC for $\\bar{u}$.</p>
    <h3>How each problem uses them</h3>
    <ul>
      <li><strong>UMP:</strong> feasible set $=$ budget set; objective $=$ highest IC (find highest IC touching $B$)</li>
      <li><strong>EMP:</strong> feasible set $= UCS(\\bar{u})$; objective $=$ lowest budget line (find cheapest budget line touching UCS)</li>
    </ul>
    <p>Both share the same tangency condition $MRS = p_x/p_y$ at the optimum.</p>
  `},

  {id: 71, title: "Hicksian Demand: Cobb-Douglas", html: `
    <h2>Hicksian Demand: $u = x^{1/2}y^{1/2}$</h2>
    <p>EMP FOC gives $y/x = p_x/p_y \\Rightarrow y^c = x^c p_x/p_y$</p>
    <p>Utility constraint: $(x^c)^{1/2}(y^c)^{1/2} = \\bar{u} \\implies x^c(p_x/p_y)^{1/2} = \\bar{u}$</p>
    $$x^c = \\bar{u}\\left(\\frac{p_y}{p_x}\\right)^{1/2}, \\quad y^c = \\bar{u}\\left(\\frac{p_x}{p_y}\\right)^{1/2}$$
    <h3>Expenditure function</h3>
    $$E = p_x x^c + p_y y^c = \\bar{u}\\sqrt{p_x p_y} + \\bar{u}\\sqrt{p_x p_y} = 2\\bar{u}\\sqrt{p_x p_y}$$
    <p>Verification: $V = I/(2\\sqrt{p_x p_y}) \\implies I = 2\\bar{u}\\sqrt{p_x p_y} = E$ ✓</p>
  `},

  {id: 72, title: "Hicksian Demand: Perfect Complements min{ax, by}", html: `
    <h2>Hicksian Demand: $u = \\min\\{ax, by\\}$</h2>
    <p>At the EMP optimum, goods are consumed in fixed proportions: $ax^c = by^c = \\bar{u}$</p>
    $$x^c = \\frac{\\bar{u}}{a}, \\quad y^c = \\frac{\\bar{u}}{b}$$
    <p>These are independent of prices — perfect complements have zero substitution effect.</p>
    <h3>Expenditure function</h3>
    $$E = p_x \\cdot \\frac{\\bar{u}}{a} + p_y \\cdot \\frac{\\bar{u}}{b} = \\bar{u}\\left(\\frac{p_x}{a} + \\frac{p_y}{b}\\right)$$
    <p>Shephard's lemma: $\\partial E/\\partial p_x = \\bar{u}/a = x^c$ ✓</p>
  `},

  {id: 73, title: "Marshallian vs Hicksian Demand: Slutsky Equation", html: `
    <h2>Relationship Between Marshallian and Hicksian Demand</h2>
    <p>When $\\bar{u} = V(p,I)$, the demands coincide: $x(p,I) = x^c(p, V(p,I))$</p>
    <p>They represent the same bundle but respond differently to price changes:</p>
    <ul>
      <li><strong>Marshallian:</strong> holds income constant — captures substitution + income effects</li>
      <li><strong>Hicksian:</strong> holds utility constant — captures only the pure substitution effect</li>
    </ul>
    <h3>Slutsky Equation</h3>
    $$\\frac{\\partial x}{\\partial p_x} = \\frac{\\partial x^c}{\\partial p_x} - x \\cdot \\frac{\\partial x}{\\partial I}$$
    <p>Total price effect $=$ substitution effect ($\\leq 0$) $+$ income effect</p>
    <p>The substitution effect is always non-positive (law of demand for Hicksian demand). The income effect depends on whether the good is normal or inferior.</p>
  `},

  {id: 74, title: "Roy's Identity: Cobb-Douglas Verification", html: `
    <h2>Roy's Identity Verification: $V = \\dfrac{I}{2\\sqrt{p_x p_y}}$</h2>
    $$\\frac{\\partial V}{\\partial p_x} = -\\frac{I}{4p_x^{3/2}p_y^{1/2}}$$
    $$\\frac{\\partial V}{\\partial I} = \\frac{1}{2\\sqrt{p_x p_y}}$$
    <h3>Roy's Identity: $x = -\\dfrac{\\partial V/\\partial p_x}{\\partial V/\\partial I}$</h3>
    $$x = -\\frac{-I/(4p_x^{3/2}p_y^{1/2})}{1/(2\\sqrt{p_x p_y})} = \\frac{I}{4p_x^{3/2}p_y^{1/2}} \\cdot 2\\sqrt{p_x p_y} = \\frac{I}{2p_x} \\checkmark$$
    <p>This matches the Marshallian demand $x^* = I/(2p_x)$ derived directly from the UMP.</p>
  `},

  {id: 75, title: "Shephard's Lemma: Intuition", html: `
    <h2>Shephard's Lemma: $\\partial E/\\partial p_x = x^c$</h2>
    <h3>Formal derivation (envelope theorem)</h3>
    $$\\frac{dE}{dp_x} = x^c + p_x\\frac{\\partial x^c}{\\partial p_x} + p_y\\frac{\\partial y^c}{\\partial p_x}$$
    <p>By the envelope theorem, the last two terms vanish at the optimum (first-order conditions hold), leaving: $\\partial E/\\partial p_x = x^c$.</p>
    <h3>Economic intuition</h3>
    <p>Holding utility fixed at $\\bar{u}$, if $p_x$ rises by one euro, the increase in minimum expenditure is approximately equal to the amount of $x$ currently consumed. The substitution response away from the now-costlier $x$ is of second order (infinitesimally small). Hence the derivative of $E$ w.r.t. $p_x$ captures exactly the Hicksian quantity of $x$.</p>
  `},

  {id: 76, title: "V and E as Inverses: Cobb-Douglas", html: `
    <h2>$V$ and $E$ Are Mathematical Inverses</h2>
    <p>The key duality relationships:</p>
    $$V(p, E(p, \\bar{u})) = \\bar{u} \\quad \\text{and} \\quad E(p, V(p, I)) = I$$
    <h3>Example: $V = \\dfrac{I}{2\\sqrt{p_x p_y}}$</h3>
    <p>Find $E$ by solving $V(p, E) = \\bar{u}$:</p>
    $$\\frac{E}{2\\sqrt{p_x p_y}} = \\bar{u} \\implies E(p, \\bar{u}) = 2\\bar{u}\\sqrt{p_x p_y}$$
    <p>This matches the expenditure function derived directly from the Cobb-Douglas EMP — confirming the duality.</p>
  `},

  {id: 77, title: "Hicksian Demand from V via Shephard's Lemma", html: `
    <h2>Deriving Hicksian Demand from $V$: Example</h2>
    <p>Given: $V(p_x, p_y, I) = \\dfrac{I}{p_x + \\frac{1}{4}p_y}$</p>
    <h3>Step 1: Find $E$ by inverting $V$</h3>
    <p>Set $V(p, E) = \\bar{u}$:</p>
    $$\\frac{E}{p_x + \\frac{1}{4}p_y} = \\bar{u} \\implies E(p, \\bar{u}) = \\bar{u}\\left(p_x + \\frac{1}{4}p_y\\right)$$
    <h3>Step 2: Apply Shephard's Lemma</h3>
    $$y^c = \\frac{\\partial E}{\\partial p_y} = \\bar{u} \\cdot \\frac{1}{4} = \\frac{\\bar{u}}{4}$$
    <p>The Hicksian demand for $y$ is $\\bar{u}/4$, independent of prices — the substitution effect for $y$ is zero. This corresponds to preferences where $y$ always enters in fixed proportion (like a perfect complement with $x$).</p>
  `},

  /* ================================================================
     IDs 78–84: Problem Sets 1 & 2 — Schritt-für-Schritt Lösungen
     ================================================================ */

  {id: 78, title: "PS1 – 1.1: Indifferenzkurven & MRS für 5 Nutzenfunktionen", html: `
    <h2>Problem Set 1 – Aufgabe 1.1</h2>
    <p>Für jede Nutzenfunktion: Indifferenzkurven skizzieren und prüfen, ob $MRS_{x,y}$ mit steigendem $x$ fällt (⟹ konvexe ICs).</p>
    <p><strong>Formel:</strong> $MRS_{x,y} = -\\frac{dy}{dx}\\Big|_{u=\\text{const}} = \\frac{MU_x}{MU_y}$</p>

    <hr>
    <h3>(a) $u(x,y) = 3x + y$ — Perfekte Substitute</h3>
    <p>$MU_x = 3,\\ MU_y = 1$</p>
    <p>$$MRS_{x,y} = \\frac{3}{1} = 3 \\quad (\\text{konstant, unabhängig von } x)$$</p>
    <p>Die Indifferenzkurven sind <strong>Geraden</strong> mit Steigung $-3$. Die MRS ist konstant → <strong>nicht strikt konvex</strong> (linear).</p>

    <hr>
    <h3>(b) $u(x,y) = \\sqrt{xy}$ — Cobb-Douglas</h3>
    <p>$MU_x = \\frac{\\sqrt{y}}{2\\sqrt{x}},\\ MU_y = \\frac{\\sqrt{x}}{2\\sqrt{y}}$</p>
    <p>$$MRS_{x,y} = \\frac{MU_x}{MU_y} = \\frac{y}{x}$$</p>
    <p>Entlang einer IC mit $u = k$: $xy = k^2$, also $y = k^2/x$. Dann $MRS = k^2/x^2$, fällt mit steigendem $x$ → <strong>konvex ✓</strong>.</p>

    <hr>
    <h3>(c) $u(x,y) = \\sqrt{x} + y$ — Quasi-linear</h3>
    <p>$MU_x = \\frac{1}{2\\sqrt{x}},\\ MU_y = 1$</p>
    <p>$$MRS_{x,y} = \\frac{1}{2\\sqrt{x}}$$</p>
    <p>Fällt mit steigendem $x$ (da $1/\\sqrt{x}$ abnimmt) → <strong>konvex ✓</strong>. Die ICs sind vertikale Translationen voneinander (Merkmal quasi-linearer Funktionen).</p>

    <hr>
    <h3>(d) $u(x,y) = \\sqrt{x^2 - y^2}$ — $y$ ist ein „Bad"</h3>
    <p>$MU_x = \\frac{x}{\\sqrt{x^2-y^2}} > 0,\\ MU_y = \\frac{-y}{\\sqrt{x^2-y^2}} < 0$</p>
    <p>$$\\frac{dy}{dx}\\Big|_{u=\\text{const}} = -\\frac{MU_x}{MU_y} = -\\frac{x/u}{-y/u} = \\frac{x}{y} > 0$$</p>
    <p>Die Indifferenzkurven haben eine <strong>positive Steigung</strong> — $y$ ist ein schlechtes Gut (mehr $y$ senkt den Nutzen). Auf einer IC gilt $x^2 - y^2 = k^2$, d.h. $x/y$ wächst mit $x$ → MRS wächst → <strong>nicht konvex ✗</strong>.</p>

    <hr>
    <h3>(e) $u(x,y) = \\frac{xy}{x+y}$ — Harmonisches Mittel</h3>
    <p>$MU_x = \\frac{y^2}{(x+y)^2},\\ MU_y = \\frac{x^2}{(x+y)^2}$</p>
    <p>$$MRS_{x,y} = \\frac{y^2}{x^2} = \\left(\\frac{y}{x}\\right)^2$$</p>
    <p>Entlang einer IC fällt $y/x$ mit steigendem $x$ → $(y/x)^2$ fällt → <strong>konvex ✓</strong>.</p>

    <hr>
    <h3>Zusammenfassung</h3>
    <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
      <tr style="border-bottom:1px solid var(--border);"><th style="padding:6px;">Funktion</th><th style="padding:6px;">$MRS_{x,y}$</th><th style="padding:6px;">Konvex?</th></tr>
      <tr><td style="padding:4px 8px;">$3x+y$</td><td style="padding:4px 8px;">$3$ (konstant)</td><td style="padding:4px 8px;">✗ (linear)</td></tr>
      <tr><td style="padding:4px 8px;">$\\sqrt{xy}$</td><td style="padding:4px 8px;">$y/x$</td><td style="padding:4px 8px;">✓</td></tr>
      <tr><td style="padding:4px 8px;">$\\sqrt{x}+y$</td><td style="padding:4px 8px;">$1/(2\\sqrt{x})$</td><td style="padding:4px 8px;">✓</td></tr>
      <tr><td style="padding:4px 8px;">$\\sqrt{x^2-y^2}$</td><td style="padding:4px 8px;">$x/y$ (steigend)</td><td style="padding:4px 8px;">✗ ($y$ ist Bad)</td></tr>
      <tr><td style="padding:4px 8px;">$xy/(x+y)$</td><td style="padding:4px 8px;">$(y/x)^2$</td><td style="padding:4px 8px;">✓</td></tr>
    </table>
  `},

  {id: 79, title: "PS1 – 1.2: Cobb-Douglas MRS, Normierung & Homothetizität", html: `
    <h2>Problem Set 1 – Aufgabe 1.2</h2>
    <p>Nutzenfunktion: $u(x,y) = x^\\alpha y^\\beta$</p>

    <h3>Herleitung der MRS</h3>
    <p>$$MU_x = \\alpha x^{\\alpha-1} y^\\beta, \\quad MU_y = \\beta x^\\alpha y^{\\beta-1}$$</p>
    <p>$$MRS_{x,y} = \\frac{MU_x}{MU_y} = \\frac{\\alpha x^{\\alpha-1} y^\\beta}{\\beta x^\\alpha y^{\\beta-1}} = \\frac{\\alpha}{\\beta} \\cdot \\frac{y}{x}$$</p>

    <hr>
    <h3>(a) Hängt die MRS von $\\alpha + \\beta = 1$ ab?</h3>
    <p><strong>Nein.</strong> Die Formel $MRS = (\\alpha/\\beta)(y/x)$ gilt unabhängig von der Normierung. Die Bedingung $\\alpha+\\beta=1$ ist lediglich eine <em>ordinale Normierung</em> für die Nutzenfunktion (man erhöht $u^{1/(\\alpha+\\beta)}$, was eine ordnungserhaltende Transformation ist). Sie vereinfacht Rechnungen, ändert aber die Präferenzen nicht.</p>

    <hr>
    <h3>(b) Fall $y = x$</h3>
    <p>Wenn $y = x$: $MRS = \\frac{\\alpha}{\\beta} \\cdot 1 = \\frac{\\alpha}{\\beta}$</p>
    <p><strong>Intuition für $\\alpha > \\beta$:</strong> Der Konsument gewichtet Gut $x$ stärker. An der Diagonalen (gleiche Mengen) ist der Grenznutzen von $x$ relativ hoch → er ist bereit, mehr als eine Einheit $y$ aufzugeben, um eine Einheit $x$ zu erhalten → $MRS > 1$.</p>
    <p><em>Grafisch:</em> Die IC-Kurve schneidet die Diagonale $y=x$ mit einer Steigung $-\\alpha/\\beta$. Je größer $\\alpha$ relativ zu $\\beta$, desto steiler die IC an diesem Punkt.</p>

    <hr>
    <h3>(c) Subsistenzniveaus: $u(x,y) = (x-x_0)^\\alpha(y-y_0)^\\beta$ — Homothethisch?</h3>
    <p>Eine Funktion ist homothetisch, wenn die MRS nur vom Verhältnis $y/x$ abhängt (äquivalent: sie ist eine monotone Transformation einer homogenen Funktion).</p>
    <p>$$MRS = \\frac{\\alpha(x-x_0)^{\\alpha-1}(y-y_0)^\\beta}{\\beta(x-x_0)^\\alpha(y-y_0)^{\\beta-1}} = \\frac{\\alpha}{\\beta}\\cdot\\frac{y-y_0}{x-x_0}$$</p>
    <p>Die MRS hängt von $(y-y_0)/(x-x_0)$ ab, <em>nicht</em> von $y/x$. Bei einer proportionalen Skalierung $(tx, ty)$:</p>
    <p>$$MRS(tx,ty) = \\frac{\\alpha}{\\beta}\\cdot\\frac{ty - y_0}{tx - x_0} \\neq \\frac{\\alpha}{\\beta}\\cdot\\frac{y-y_0}{x-x_0}$$</p>
    <p><strong>→ Die Funktion ist nicht homothetisch</strong> (außer wenn $x_0 = y_0 = 0$). Strahlen aus dem Ursprung haben keine konstante Steigung der Indifferenzkurven.</p>
  `},

  {id: 80, title: "PS1 – 1.3: CES-Nutzenfunktion: Homothetizität, MRS & Krümmung", html: `
    <h2>Problem Set 1 – Aufgabe 1.3</h2>
    <p>CES-Nutzenfunktion: $u(x,y) = \\alpha\\,\\frac{x^\\delta}{\\delta} + \\beta\\,\\frac{y^\\delta}{\\delta}$</p>

    <hr>
    <h3>(a) Homothetizität und MRS</h3>
    <p>$$MU_x = \\alpha x^{\\delta-1}, \\quad MU_y = \\beta y^{\\delta-1}$$</p>
    <p>$$MRS_{x,y} = \\frac{\\alpha x^{\\delta-1}}{\\beta y^{\\delta-1}} = \\frac{\\alpha}{\\beta}\\left(\\frac{x}{y}\\right)^{\\delta-1} = \\frac{\\alpha}{\\beta}\\left(\\frac{y}{x}\\right)^{1-\\delta}$$</p>
    <p>Die MRS hängt <strong>nur vom Verhältnis $y/x$</strong> ab → <strong>homothetisch ✓</strong></p>
    <p>Formaler Beweis: $f(tx,ty) = \\alpha(tx)^\\delta/\\delta + \\beta(ty)^\\delta/\\delta = t^\\delta f(x,y)$ → $f$ ist homogen vom Grad $\\delta$, also ist $u$ eine monotone Transformation einer homogenen Funktion.</p>

    <hr>
    <h3>(b) Spezialfälle: $\\delta=1$ und $\\delta \\to 0$</h3>
    <p><strong>$\\delta = 1$ (Perfekte Substitute):</strong></p>
    <p>$u = \\alpha x + \\beta y$, $MRS = \\alpha/\\beta$ (konstant) ✓</p>
    <p><strong>$\\delta \\to 0$ (Cobb-Douglas-Grenzfall):</strong></p>
    <p>$MRS = (\\alpha/\\beta)(y/x)^{1-0} = (\\alpha/\\beta)(y/x)$ ✓ — stimmt mit der Cobb-Douglas-MRS aus Aufgabe 1.2 überein.</p>

    <hr>
    <h3>(c) Strikt fallende MRS für $\\delta < 1$</h3>
    <p>Wir differenzieren $MRS = (\\alpha/\\beta)(y/x)^{1-\\delta}$ nach $x$ entlang einer Indifferenzkurve.</p>
    <p>Entlang einer IC gilt $dy/dx < 0$ (bei normalen Gütern), also fällt $y/x$ wenn $x$ steigt. Da $1-\\delta > 0$ für $\\delta < 1$, fällt $(y/x)^{1-\\delta}$ ebenfalls → <strong>strikt fallende MRS ✓</strong></p>

    <hr>
    <h3>(d) Numerisches Beispiel (mit $\\alpha=\\beta=1$)</h3>
    <p>$MRS = (y/x)^{1-\\delta}$</p>
    <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
      <tr style="border-bottom:1px solid var(--border);"><th style="padding:6px;">$\\delta$</th><th style="padding:6px;">$1-\\delta$</th><th style="padding:6px;">$MRS$ bei $y/x=0.9$</th><th style="padding:6px;">$MRS$ bei $y/x=1.1$</th><th style="padding:6px;">Änderung</th></tr>
      <tr><td style="padding:4px 8px;">$0.5$</td><td style="padding:4px 8px;">$0.5$</td><td style="padding:4px 8px;">$0.9^{0.5}\\approx 0.949$</td><td style="padding:4px 8px;">$1.1^{0.5}\\approx 1.049$</td><td style="padding:4px 8px;">$\\approx 0.100$</td></tr>
      <tr><td style="padding:4px 8px;">$-1$</td><td style="padding:4px 8px;">$2$</td><td style="padding:4px 8px;">$0.9^2 = 0.81$</td><td style="padding:4px 8px;">$1.1^2 = 1.21$</td><td style="padding:4px 8px;">$= 0.40$</td></tr>
    </table>
    <p><strong>Interpretation:</strong> Für $\\delta = -1$ ändert sich die MRS viermal stärker. Das entspricht stärker gekrümmten Indifferenzkurven → die Güter sind <em>komplementärer</em> zueinander, der Konsument ist weniger bereit zu substituieren.</p>
    <p>Grafisch: Bei $\\delta=-1$ liegen die ICs näher an der L-Form der Leontief-Präferenzen; bei $\\delta=0.5$ sind sie flacher und der perfekten-Substitute-Gerade ähnlicher.</p>
  `},

  {id: 81, title: "PS1 – 1.4: Quasi-lineare Nutzenfunktion $u = x + \\ln y$", html: `
    <h2>Problem Set 1 – Aufgabe 1.4</h2>
    <p>Nutzenfunktion: $u(x,y) = x + \\ln y$</p>

    <hr>
    <h3>(a) MRS berechnen und interpretieren</h3>
    <p>$$MU_x = 1, \\quad MU_y = \\frac{1}{y}$$</p>
    <p>$$MRS_{x,y} = \\frac{MU_x}{MU_y} = \\frac{1}{1/y} = y$$</p>
    <p><strong>Interpretation:</strong> Der Konsument ist bereit, $y$ Einheiten von $x$ aufzugeben, um eine weitere Einheit $y$ zu erhalten. Die MRS hängt <em>nicht von $x$</em> ab — nur von der Menge an $y$. Das ist das Markenzeichen <strong>quasi-linearer</strong> Nutzenfunktionen: Die Indifferenzkurven sind vertikale Translationen.</p>

    <hr>
    <h3>(b) Quasi-Konkavität nachweisen</h3>
    <p>Für $u(x,y) = x + f(y)$ ist Quasi-Konkavität äquivalent zu $f''(y) \\leq 0$.</p>
    <p>Hier $f(y) = \\ln y$: $f'(y) = 1/y > 0$, $f''(y) = -1/y^2 < 0$ ✓</p>
    <p>Alternativ über den <em>Bordered Hessian</em>:</p>
    <p>$u_{xx}=0,\\ u_{yy}=-1/y^2,\\ u_{xy}=0$</p>
    <p>$$|\\bar{H}| = -u_x^2 u_{yy} + 2u_x u_y u_{xy} - u_y^2 u_{xx} = -(1)^2(-1/y^2) + 0 - 0 = \\frac{1}{y^2} > 0 \\quad ✓$$</p>

    <hr>
    <h3>(c) Gleichung der Indifferenzkurve</h3>
    <p>Setze $u(x,y) = k$ (Konstante):</p>
    <p>$$x + \\ln y = k \\implies x = k - \\ln y$$</p>
    <p>Form: Eine nach links verschobene Logarithmuskurve in der $(x,y)$-Ebene. Für höhere $k$ verschiebt sich die Kurve <em>parallel nach oben</em> (rein horizontale Verschiebung um $k$).</p>

    <hr>
    <h3>(d) Vergleich der Grenznutzen</h3>
    <p>$MU_x = 1$ (konstant) — jede zusätzliche Einheit $x$ bringt immer den gleichen Nutzenzuwachs.</p>
    <p>$MU_y = 1/y$ (fallend) — je mehr $y$ vorhanden, desto geringer der Grenznutzen von $y$.</p>
    <p><strong>Konsequenz für das Konsumverhalten:</strong> Im Optimum gilt $MRS = MU_x/MU_y = y = p_x/p_y$. Also:</p>
    <p>$$y^* = \\frac{p_x}{p_y} \\quad (\\text{konstant, unabhängig vom Einkommen } I!)$$</p>
    <p>Das gesamte zusätzliche Einkommen fließt in Gut $x$. $x$ fungiert als <strong>numeraire-Gut ohne Einkommenseffekt</strong>.</p>

    <hr>
    <h3>(e) Anwendungsfälle</h3>
    <ul>
      <li><strong>Umweltökonomik:</strong> $y$ = Umweltqualität (Zahlungsbereitschaft unabhängig vom Einkommen)</li>
      <li><strong>Öffentliche Güter:</strong> Wenn Einkommenseffekte für das öffentliche Gut vernachlässigbar sind</li>
      <li><strong>Partialgleichgewicht:</strong> $x$ = Numeraire-Gut (Geld), $y$ = analysiertes Gut</li>
      <li><strong>Modellvereinfachung:</strong> Kein Einkommenseffekt → die Marshallsche Nachfragekurve entspricht der Hicksschen</li>
    </ul>
  `},

  {id: 82, title: "PS2 – 2.1: Lineare Nutzenfunktion — Expenditure Function", html: `
    <h2>Problem Set 2 – Aufgabe 2.1</h2>
    <p>Nutzenfunktion: $u(x,y) = ax + by$</p>
    <p>Gesucht: Die Expenditure Function $E(p_x, p_y, V)$ — minimale Ausgaben, um Nutzenniveau $V$ zu erreichen.</p>

    <hr>
    <h3>Idee: Perfekte Substitute — Eckenlösung</h3>
    <p>Der Konsument kauft ausschließlich das Gut, das pro Nutzeneinheit günstiger ist.</p>
    <ul>
      <li>Gut $x$ kostet pro Nutzeneinheit: $p_x/a$</li>
      <li>Gut $y$ kostet pro Nutzeneinheit: $p_y/b$</li>
    </ul>

    <hr>
    <h3>Fall 1: $p_x/a < p_y/b$ (Gut $x$ günstiger pro Util)</h3>
    <p>Konsument kauft nur $x$: $ax^* = V \\implies x^* = V/a$</p>
    <p>$$E = p_x \\cdot \\frac{V}{a} = V \\cdot \\frac{p_x}{a}$$</p>

    <hr>
    <h3>Fall 2: $p_x/a > p_y/b$ (Gut $y$ günstiger pro Util)</h3>
    <p>Konsument kauft nur $y$: $by^* = V \\implies y^* = V/b$</p>
    <p>$$E = p_y \\cdot \\frac{V}{b} = V \\cdot \\frac{p_y}{b}$$</p>

    <hr>
    <h3>Fall 3: $p_x/a = p_y/b$ (Preisratio = MRS)</h3>
    <p>Jede Kombination mit $ax+by=V$ ist optimal — alle haben dieselben Kosten.</p>

    <hr>
    <h3>Ergebnis: Expenditure Function mit Knick</h3>
    <p>$$\boxed{E(p_x, p_y, V) = V \\cdot \\min\\!\\left(\\frac{p_x}{a},\\, \\frac{p_y}{b}\\right)}$$</p>
    <p>Der <strong>Knick</strong> tritt bei $p_x/p_y = a/b$ auf — dort wechselt der Konsument von ausschließlich $x$ zu ausschließlich $y$.</p>

    <h3>Grafische Intuition</h3>
    <p>Als Funktion von $p_x$ (bei festem $p_y$): $E = V\\cdot p_x/a$ für kleine $p_x$, dann konstant bei $V\\cdot p_y/b$ sobald $p_x/a > p_y/b$ → flacher Abschnitt. Das ergibt die für Expenditure Functions typische konkave (hier stückweise lineare) Form.</p>
  `},

  {id: 83, title: "PS2 – 2.2: Stone-Geary — Subsistenz & Ausgabenanteile", html: `
    <h2>Problem Set 2 – Aufgabe 2.2: Stone-Geary Nutzenfunktion</h2>
    <p>$u(x,y) = (x - x_0)^\\alpha \\cdot y^\\beta,\\quad \\alpha + \\beta = 1, \\quad I > p_x x_0$</p>
    <p>$x_0$ ist das <strong>Subsistenzminimum</strong> — die Menge Nahrung, die zum Überleben benötigt wird.</p>

    <hr>
    <h3>Teil (a): Nutzenmaximierung</h3>
    <p><strong>Schlüsselbeobachtung:</strong> Definiere $\\tilde{x} = x - x_0$ (Überschuss über Subsistenz) und $\\tilde{I} = I - p_x x_0$ (supernumeräres Einkommen).</p>
    <p>Das Budget wird:</p>
    <p>$$p_x x + p_y y = I \\implies p_x(\\tilde{x}+x_0) + p_y y = I \\implies p_x \\tilde{x} + p_y y = I - p_x x_0 = \\tilde{I}$$</p>
    <p>Das Problem ist jetzt eine <strong>Standard-Cobb-Douglas-Maximierung</strong> von $(\\tilde{x})^\\alpha y^\\beta$ unter $p_x \\tilde{x} + p_y y = \\tilde{I}$.</p>
    <p>Aus der Cobb-Douglas-Lösung folgt direkt:</p>
    <p>$$p_x \\tilde{x}^* = \\alpha \\tilde{I} = \\alpha(I - p_x x_0)$$</p>
    <p>$$p_y y^* = \\beta \\tilde{I} = \\beta(I - p_x x_0)$$</p>
    <p>Rücksubstitution für $x^* = \\tilde{x}^* + x_0$:</p>
    <p>$$\\boxed{p_x x^* = p_x x_0 + \\alpha(I - p_x x_0)}$$</p>
    <p>$$\\boxed{p_y y^* = \\beta(I - p_x x_0)}$$</p>

    <p><strong>Interpretation:</strong> Vom Einkommen $I$ werden zunächst die Ausgaben für das Subsistenzminimum $p_x x_0$ „abgezogen". Das verbleibende <em>supernumeräre Einkommen</em> $\\tilde{I}$ wird im Verhältnis $\\alpha:\\beta$ auf $x$ und $y$ aufgeteilt — genau wie bei einer Standard-Cobb-Douglas-Funktion.</p>

    <hr>
    <h3>Teil (b): Ausgabenanteile und Engelkurven</h3>
    <p>Ausgabenanteil für $x$:</p>
    <p>$$\\frac{p_x x^*}{I} = \\frac{p_x x_0 + \\alpha(I - p_x x_0)}{I} = \\alpha + \\frac{(1-\\alpha)p_x x_0}{I}$$</p>
    <p>Ausgabenanteil für $y$:</p>
    <p>$$\\frac{p_y y^*}{I} = \\frac{\\beta(I-p_x x_0)}{I} = \\beta - \\frac{\\beta p_x x_0}{I}$$</p>
    <p>Wenn $I$ steigt ($x_0, p_x$ fest):</p>
    <ul>
      <li>Anteil für $x$ fällt (von oben gegen $\\alpha$) — $x$ ist ein <strong>notwendiges Gut</strong> (Engel-Gesetz)</li>
      <li>Anteil für $y$ steigt (von unten gegen $\\beta$) — $y$ ist ein <strong>normales Gut</strong></li>
    </ul>
    <p>Bei sehr hohem Einkommen nähern sich die Anteile den Cobb-Douglas-Werten $\\alpha$ und $\\beta$ an.</p>
  `},

  {id: 84, title: "PS2 – 2.3: CES Indirekte Nutzenfunktion & Expenditure Function", html: `
    <h2>Problem Set 2 – Aufgabe 2.3: CES Dualität</h2>
    <p>$u(x,y) = (x^\\delta + y^\\delta)^{1/\\delta},\\quad r = \\frac{\\delta}{\\delta-1}$</p>

    <hr>
    <h3>Teil (a): Indirekte Nutzenfunktion $V = I\\cdot(p_x^r + p_y^r)^{-1/r}$</h3>
    <p><strong>Schritt 1 — Marshallsche Nachfragen (aus FOC):</strong></p>
    <p>Lagrange-Bedingungen: $\\lambda p_x = x^{\\delta-1}(x^\\delta+y^\\delta)^{1/\\delta-1}$ und analog für $y$.</p>
    <p>Verhältnis: $\\frac{p_x}{p_y} = \\left(\\frac{x}{y}\\right)^{\\delta-1} \\implies y = x\\left(\\frac{p_x}{p_y}\\right)^{1/(\\delta-1)}$</p>
    <p>Mit $1/(\\delta-1) = r/\\delta - 1$... nach Einsetzen ins Budget erhält man:</p>
    <p>$$x^* = \\frac{I \\cdot p_x^{r-1}}{p_x^r + p_y^r}, \\quad y^* = \\frac{I \\cdot p_y^{r-1}}{p_x^r + p_y^r}$$</p>
    <p><strong>Schritt 2 — In Nutzenfunktion einsetzen:</strong></p>
    <p>Sei $D = p_x^r + p_y^r$. Dann $(x^*)^\\delta = I^\\delta p_x^{\\delta(r-1)}/D^\\delta$.</p>
    <p>Schlüsselidentität: $\\delta(r-1) = \\delta \\cdot \\frac{1}{\\delta-1} = \\frac{\\delta}{\\delta-1} = r$ ✓</p>
    <p>$$(x^*)^\\delta + (y^*)^\\delta = \\frac{I^\\delta(p_x^r+p_y^r)}{D^\\delta} = \\frac{I^\\delta}{D^{\\delta-1}}$$</p>
    <p>$$V = \\left(\\frac{I^\\delta}{D^{\\delta-1}}\\right)^{1/\\delta} = I \\cdot D^{-(\\delta-1)/\\delta} = I \\cdot D^{-1/r}$$</p>
    <p>$$\\boxed{V(p_x, p_y, I) = I\\cdot(p_x^r + p_y^r)^{-1/r}}$$</p>

    <hr>
    <h3>Teil (b): Homogenität Grad 0 in $(p_x, p_y, I)$</h3>
    <p>$$V(tp_x, tp_y, tI) = tI \\cdot \\left((tp_x)^r+(tp_y)^r\\right)^{-1/r} = tI \\cdot t^{-1}(p_x^r+p_y^r)^{-1/r} = V \\quad ✓$$</p>
    <p>Verdopplung aller Preise und Einkommen ändert den Nutzen nicht (kein Geldillusion).</p>

    <hr>
    <h3>Teil (c): Strikt steigend in $I$</h3>
    <p>$$\\frac{\\partial V}{\\partial I} = (p_x^r+p_y^r)^{-1/r} > 0 \\quad ✓$$</p>

    <hr>
    <h3>Teil (d): Strikt fallend in $p_x$</h3>
    <p>$$\\frac{\\partial V}{\\partial p_x} = I\\cdot\\left(-\\frac{1}{r}\\right)(p_x^r+p_y^r)^{-1/r-1}\\cdot r\\cdot p_x^{r-1} = -I\\cdot p_x^{r-1}(p_x^r+p_y^r)^{-1/r-1} < 0 \\quad ✓$$</p>
    <p>(Alle Faktoren positiv für $I, p_x > 0$, daher negatives Vorzeichen.)</p>

    <hr>
    <h3>Teil (e): Expenditure Function $E = V\\cdot(p_x^r+p_y^r)^{1/r}$</h3>
    <p>Aus der Dualität: $V = I\\cdot D^{-1/r}$ nach $I$ auflösen (setze $I = E$):</p>
    <p>$$E(p_x,p_y,V) = V\\cdot(p_x^r+p_y^r)^{1/r}$$</p>

    <hr>
    <h3>Teil (f): Homogenität Grad 1 in Preisen</h3>
    <p>$$E(tp_x, tp_y, V) = V\\cdot\\left((tp_x)^r+(tp_y)^r\\right)^{1/r} = V\\cdot t\\cdot(p_x^r+p_y^r)^{1/r} = t\\cdot E \\quad ✓$$</p>
    <p>Eine Verdopplung aller Preise verdoppelt die Mindestausgaben (keine Substitution möglich ohne Nutzenverlust).</p>

    <hr>
    <h3>Teil (g): Steigend in Preisen</h3>
    <p>$$\\frac{\\partial E}{\\partial p_x} = V\\cdot p_x^{r-1}(p_x^r+p_y^r)^{1/r-1} > 0 \\quad ✓$$</p>

    <hr>
    <h3>Teil (h): Konkav in Preisen</h3>
    <p>$$\\frac{\\partial^2 E}{\\partial p_x^2} = V\\cdot p_x^{r-2}(p_x^r+p_y^r)^{1/r-2}\\cdot(r-1)\\cdot p_y^r$$</p>
    <p>Alle Faktoren außer $(r-1)$ sind positiv. Für Konkavität brauchen wir $r - 1 \\leq 0$, d.h. $r \\leq 1$.</p>
    <p>Beweis: $r = \\delta/(\\delta-1) \\leq 1 \\iff \\delta/(\\delta-1) - 1 = 1/(\\delta-1) \\leq 0 \\iff \\delta - 1 < 0 \\iff \\delta < 1$ ✓</p>
    <p>Da CES-Nutzenfunktionen standardmäßig $\\delta < 1$ erfordern (damit $\\sigma > 0$), gilt $\\partial^2 E/\\partial p_x^2 \\leq 0$ ✓</p>
    <p><strong>Ökonomische Intuition:</strong> Steigt $p_x$, kann der Konsument zu $y$ substituieren → die Kostensteigerung ist schwächer als proportional → konkave Expenditure Function.</p>
  `},

    ],

  mc: [
    {id:1, category:"Axioms of Choice", question:"When is a preference relation called 'rational' in microeconomic theory?", options:["When it satisfies both completeness and transitivity.", "When it maximises utility subject to a budget constraint.", "When it is represented by a continuous utility function.", "When it satisfies monotonicity and convexity."], correct:0},
    {id:1, category:"Axioms of Choice", question:"What is the 'primitive' concept in preference theory?", options:["The weak preference relation ⪰", "The strict preference relation ≻", "The indifference relation ∼", "The utility function u(x,y)"], correct:0},
    {id:2, category:"Continuity", question:"Why do lexicographic preferences violate continuity?", options:["An infinitesimal change in the primary good causes a sudden jump in preference.", "They are not transitive.", "They fail completeness.", "The MRS is not defined."], correct:0},
    {id:3, category:"Utility Functions", question:"Utility is an 'ordinal' concept. What does this mean?", options:["Only the ranking of bundles matters; the specific numbers do not.", "Higher utility numbers indicate proportionally higher well-being.", "The utility function is unique up to a linear transformation.", "Utility can be measured in monetary units."], correct:0},
    {id:4, category:"Monotonicity", question:"How does Strong Monotonicity (SM) differ from plain Monotonicity (M)?", options:["SM requires strict preference if at least one good increases (others unchanged); M requires all goods to increase.", "M requires strict preference if at least one good increases; SM requires all goods to increase.", "SM and M are equivalent for more than two goods.", "SM allows for bads; M does not."], correct:0},
    {id:5, category:"Indifference Curves", question:"Why is it impossible for two indifference curves to intersect?", options:["It would violate transitivity and monotonicity.", "It would violate completeness.", "The MRS would be undefined at the intersection.", "Utility functions are always strictly convex."], correct:0},
    {id:6, category:"Convexity", question:"What is the economic intuition behind convex preferences?", options:["Consumers prefer a balanced mix of goods ('love of variety').", "Consumers always prefer more of both goods.", "The budget line is tangent to the indifference curve.", "Marginal utility is constant."], correct:0},
    {id:7, category:"Utility Functions", question:"For Cobb-Douglas utility $u(x,y) = x^\\alpha y^\\beta$, what is $MRS_{x,y}$?", options:["$(\\alpha/\\beta) \\cdot (y/x)$", "$(\\beta/\\alpha) \\cdot (x/y)$", "$\\alpha \\cdot \\beta$", "$(\\alpha/\\beta) \\cdot (x/y)$"], correct:0},
    {id:8, category:"Leontief Utility", question:"What is the shape of indifference curves for Leontief utility $u(x,y) = \\min\\{\\alpha x, \\beta y\\}$?", options:["L-shaped (right-angled)", "Straight lines with constant slope", "Smooth convex curves bowed toward the origin", "Upward-sloping straight lines"], correct:0},
    {id:9, category:"Homothetic & Quasilinear", question:"What defines homothetic preferences?", options:["The MRS depends only on the ratio $y/x$, so indifference curve slopes are constant along any ray from the origin.", "The MRS is constant everywhere.", "Indifference curves are vertical translations of each other.", "Utility is linear in all goods."], correct:0},
    {id:10, category:"Budget Constraints", question:"What is the slope of the budget line $p_x x + p_y y = I$?", options:["$-p_x / p_y$", "$p_y / p_x$", "$-I / p_x$", "$p_x / I$"], correct:0},
    {id:11, category:"Optimal Choice", question:"What is the tangency condition for an interior utility-maximising solution?", options:["$MRS = p_x / p_y$", "$MU_x = MU_y$", "$MRS = I / p_x$", "$MU_x / MU_y = I$"], correct:0},
    {id:12, category:"Marshallian Demand", question:"What does the Indirect Utility Function $V(p, I)$ represent?", options:["The maximum utility achievable given prices $p$ and income $I$.", "The minimum expenditure needed to reach utility $\\bar{u}$.", "The Hicksian demand at prices $p$.", "The Lagrange multiplier at the optimum."], correct:0},
    {id:13, category:"Hicksian Demand", question:"Why is Hicksian demand called 'compensated' demand?", options:["Income is adjusted to keep the consumer at the same utility level as prices change.", "It compensates producers for price changes.", "It measures the income effect only.", "It uses current prices to deflate nominal income."], correct:0},
    {id:14, category:"Expenditure Function", question:"What does Shephard's Lemma state?", options:["$\\partial E(p,\\bar{u})/\\partial p_i = h_i(p,\\bar{u})$ — the partial derivative of the expenditure function w.r.t. a price equals the Hicksian demand for that good.", "$\\partial V(p,I)/\\partial p_i = x_i(p,I)$ — the derivative of indirect utility w.r.t. price equals Marshallian demand.", "$\\partial E/\\partial \\bar{u} = \\lambda$ — the derivative w.r.t. utility equals the Lagrange multiplier.", "$\\partial E/\\partial I = 1$ — expenditure is linear in income."], correct:0},
    {id:15, category:"Duality", question:"What does Roy's Identity allow you to do?", options:["Derive Marshallian demand from the indirect utility function.", "Derive Hicksian demand from the expenditure function.", "Convert nominal income into real income.", "Verify the second-order conditions for utility maximisation."], correct:0},
  ]
}
);
