/* Oekonometrie 1 */
SUBJECTS.push({
    name: "Oekonometrie 1",
    icon: "📊",
    description: "Econometric methods, regression analysis, and causal inference",
    kk: [
        {id: 1, question: "What is the literal meaning of the term 'Econometrics'?", answer: "Measurement in Economics."},
        {id: 1, question: "Econometrics is the combined application of mathematical economics, mathematical statistics, and which other field?", answer: "Economic theory."},
        {id: 1, question: "What is the primary goal of the field of econometrics?", answer: "To provide empirical evidence for relationships suggested by economic theory."},
        {id: 1, question: "Why is econometrics considered an independent field from general statistics?", answer: "Economic data is primarily non-experimental and requires specialized methods to handle unique observational problems."},
        {id: 1, question: "What are the four main steps in an econometric analysis?", answer: "1. Model specification, 2. Data collection, 3. Estimation and testing, 4. Interpretation."},
        {id: 1, question: "What type of economic data consists of observations on a sample of units at a single point in time?", answer: "Cross-sectional data."},
        {id: 1, question: "What is the term for data sets that contain observations of the same individuals over several points in time?", answer: "Panel data (or longitudinal data)."},
        {id: 1, question: "How is 'random sampling' defined in the context of cross-sectional data?", answer: "The data is obtained as a set of independent draws from the underlying population."},
        {id: 1, question: "What does 'cardinal data' signify in economic measurement?", answer: "Data where the numerical values and the extent of differences between them have specific meaning."},
        {id: 1, question: "What is 'nominal' or 'qualitative' data?", answer: "Data where variables only distinguish between categories, such as a dummy variable for gender."},
        {id: 1, question: "What is the main difference between pooled cross-sections and panel data?", answer: "Pooled cross-sections involve different random samples over time, whereas panel data follows the same units over time."},
        {id: 1, question: "Which data structure is characterized by a natural chronological order and potential correlation over time?", answer: "Time series data."},
        {id: 1, question: "What is the purpose of Microeconometrics?", answer: "The study of econometric methods applied to individual, household, or firm-level data."},
        {id: 1, question: "What does a 'sample-selection problem' indicate in cross-sectional data?", answer: "The data was not obtained through random sampling, leading to a non-representative sample of the population."},
        {id: 1, question: "What is the difference between cardinal and ordinal data?", answer: "Cardinal data has numerical meaning and measurable differences, while ordinal data only indicates relative ranking."},
        {id: 1, question: "What does 'statistical verification of theoretically established doctrines' mean for econometrics?", answer: "Using empirical data to test if economic theories hold true in the real world."},
        {id: 1, question: "What is the term for a single observation for each point in time in a naturally ordered sequence?", answer: "Time series."},
        {id: 1, question: "Which data type is appropriate for a study of the inflation rate across different countries in January 2013?", answer: "Cross-sectional data."},
        {id: 1, question: "What is 'applied econometrics'?", answer: "The application of econometric methods to answer specific economic questions or evaluate policies."},
        {id: 1, question: "What is 'Experimental Economics'?", answer: "A subfield of economics that uses controlled experiments to generate data, unlike most of econometrics."},
        {id: 2, question: "What is 'reverse causality' in a regression model?", answer: "A modeling problem where the dependent variable may actually be influencing the independent variable."},
        {id: 2, question: "In the simple linear regression model $y = \\beta_0 + \\beta_1 x + u$, what is the variable $y$ called?", answer: "The dependent (or explained) variable."},
        {id: 2, question: "In the simple linear regression model $y = \\beta_0 + \\beta_1 x + u$, what is the variable $x$ called?", answer: "The independent (or explanatory) variable."},
        {id: 2, question: "Why does correlation not necessarily imply causality?", answer: "Correlation measures a linear relationship but does not indicate the direction of influence or account for omitted factors."},
        {id: 2, question: "What is the 'systematic component' of the population regression model?", answer: "The part of $y$ explained by $x$, defined as $\\beta_0 + \\beta_1 x$."},
        {id: 2, question: "In the human capital model, if experience does not affect wage, what is the value of its population slope parameter?", answer: "Zero."},
        {id: 2, question: "What is the 'unsystematic' component of a regression model?", answer: "The error term $u$."},
        {id: 2, question: "Why is the stochastic error term $u$ unobservable?", answer: "Because it represents all factors other than $x$ that affect $y$, which are not recorded in the data."},
        {id: 2, question: "In the context of regression terminology, what is another name for the 'predicted variable'?", answer: "The dependent variable (or regressand)."},
        {id: 2, question: "In the consumption model $C = \\alpha + \\beta Y + u$, what does the parameter $\\beta$ represent?", answer: "The marginal propensity to consume."},
        {id: 2, question: "Define the 'ceteris paribus' assumption in econometric analysis.", answer: "The requirement that all other relevant factors remain unchanged or equal while isolating the effect of one variable."},
        {id: 2, question: "What does the stochastic component $u$ in an econometric model account for?", answer: "Unobserved influences, measurement errors, and unpredictable random effects on the dependent variable."},
        {id: 2, question: "In the model $y = \\beta_0 + \\beta_1 x + u$, why is $u$ called a 'random variable'?", answer: "Its value cannot be predicted exactly and varies across different observations in the population."},
        {id: 2, question: "What is the primary risk of interpreting a simple regression coefficient as a causal relationship?", answer: "The risk of omitted variable bias, where the predictor is correlated with unobserved factors that also influence the dependent variable."},
        {id: 2, question: "Why might a linear regression model yield unrealistic predictions (e.g., negative values for a count variable)?", answer: "The model is being used to predict values outside the relevant range of the observed data."},
        {id: 2, question: "In the regression model $kids = \\beta_0 + \\beta_1 educ + u$, what does the error term $u$ typically represent?", answer: "Unobserved factors that affect fertility, such as income, age, family background, or religion."},
        {id: 2, question: "In a consumption function $cons = \\beta_0 + \\beta_1 inc$, why is the intercept $\\beta_0$ sometimes not interpreted literally?", answer: "Because a zero income level may be outside the observed sample range or result in an economically impossible predicted consumption (e.g., negative)."},
        {id: 2, question: "What is the main limitation of the 'Simple' Linear Regression Model?", answer: "It only allows for one explanatory variable, potentially leading to omitted variable bias."},
        {id: 2, question: "Under what condition does a simple regression fail to uncover the ceteris paribus effect of education on fertility?", answer: "When omitted factors in the error term $u$ are correlated with education, resulting in $E(u|educ) \\ne 0$."},
        {id: 2, question: "What is the significance of the 'ceteris paribus' condition in econometrics?", answer: "It allows researchers to isolate the effect of one variable by holding all other relevant factors constant."},
        {id: 2, question: "In the model $y = \\beta_0 + \\beta_1 x + u$, what is the dependent variable and what is the independent variable?", answer: "$y$ is the dependent variable;  $x$ is the independent (explanatory) variable."},
        {id: 2, question: "Why is the conditional mean $E(u|x) = 0$ considered a 'zero-conditional-mean' assumption?", answer: "Because it assumes the average value of the unobservables is zero for any given value of the explanatory variable."},
        {id: 3, question: "The assumption $E(u|x) = E(u)$ is often referred to as _____ independence.", answer: "Mean independence."},
        {id: 3, question: "What statistical law is used to prove that $E(ux) = 0$ when $E(u|x) = 0$?", answer: "The Law of Iterated Expectations."},
        {id: 3, question: "Under the zero conditional mean assumption, conditional homoskedasticity implies _____ homoskedasticity.", answer: "unconditional"},
        {id: 3, question: "Which four assumptions (SLR1-SLR4) are required to prove the unbiasedness of OLS estimators?", answer: "Linear in parameters, random sampling, sample variation in $x$, and zero conditional mean."},
        {id: 3, question: "OLS Assumption SLR.3 states that there must be _____ in the sample values of the independent variable $x$.", answer: "variation (or not all $x_i$ are equal)"},
        {id: 3, question: "Concept: Zero Conditional Mean Assumption ($E(u|x) = 0$)", answer: "Definition: The expected value of the error term is zero regardless of the value of the explanatory variable."},
        {id: 3, question: "Under assumption SLR4, what is the covariance between $x$ and $u$?", answer: "Zero."},
        {id: 3, question: "What is the requirement for a model to be considered a 'linear regression model'?", answer: "The model must be linear in its parameters, not necessarily in its variables."},
        {id: 3, question: "What is the 'homoskedasticity' assumption (SLR5)?", answer: "The assumption that the error term $u$ has a constant variance for all values of $x$."},
        {id: 3, question: "What is the 'zero conditional mean assumption' in simple regression?", answer: "The assumption that the expected value of the error term $u$ is zero regardless of the value of $x$, expressed as $E(u|x) = 0$."},
        {id: 3, question: "If the zero conditional mean assumption holds, what is the resulting Population Regression Function (PRF)?", answer: "$E(y|x) = \\beta_0 + \\beta_1 x$."},
        {id: 3, question: "Assumption SLR3 requires 'Sample Variation in the Explanatory Variable'. What does this mean mathematically?", answer: "The observations $x_i$ in the sample must not all be identical."},
        {id: 3, question: "What is the term for the situation where the variance of the error term changes depending on $x$?", answer: "Heteroskedasticity."},
        {id: 3, question: "If the zero conditional mean assumption $E(u|x) = 0$ holds, what is the value of $Cov(u, x)$?", answer: "0"},
        {id: 3, question: "What OLS assumption is violated if the error term $u$ is heteroskedastic?", answer: "The Homoskedasticity assumption (constant variance)."},
        {id: 3, question: "Term: Homoskedasticity", answer: "Definition: The condition where the variance of the error term $u$ is constant for all values of $x$ ($Var(u|x) = \\sigma^2$)."},
        {id: 3, question: "True or False: $Cov(u, x) = 0$ implies $E(u|x) = 0$.", answer: "False;  zero correlation only rules out linear dependence, whereas conditional mean independence is a stronger condition."},
        {id: 4, question: "According to the Method of Moments, what sample restriction is derived from the population assumption $E(u) = 0$?", answer: "The sum of the OLS residuals must be zero."},
        {id: 4, question: "The Ordinary Least Squares method minimizes which specific mathematical expression?", answer: "The sum of the squared residuals ($SSR$)."},
        {id: 4, question: "What is the objective of the Ordinary Least Squares (OLS) method?", answer: "To minimize the sum of squared residuals ($SSR$)."},
        {id: 4, question: "What does 'linearity' signify in the simple regression model $y = \\beta_0 + \\beta_1 x + u$?", answer: "A one-unit increase in $x$ results in a constant change in the expected value of $y$ equal to $\\beta_1$."},
        {id: 4, question: "What is the formula for the OLS slope estimator $\\hat{\\beta}_1$ in terms of covariance and variance?", answer: "$\\hat{\\beta}_1 = \\frac{\\hat{\\text{Cov}}(x, y)}{\\hat{\\text{Var}}(x)}$."},
        {id: 4, question: "Formula: OLS Slope Estimator $\\hat{\\beta}_1$", answer: "$\\hat{\\beta}_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}$"},
        {id: 4, question: "Summation Identity: $\\sum_{i=1}^n (x_i - \\bar{x})$ is always equal to _____.", answer: "0"},
        {id: 4, question: "In the derivation of OLS, what is the 'First Order Condition' for minimizing the sum of squared residuals?", answer: "Setting the partial derivatives of the sum of squared residuals with respect to the parameters to zero."},
        {id: 4, question: "Centering Identity: $\\sum (x_i - \\bar{x})(y_i - \\bar{y}) = \\sum (x_i - \\bar{x}) \\cdot$ _____.", answer: "$y_i$"},
        {id: 4, question: "Concept: Method of Moments", answer: "Definition: A method of estimating population parameters by equating sample moments (like the sample mean) to population moments."},
        {id: 4, question: "Formula: OLS Intercept Estimator $\\hat{\\beta}_0$", answer: "$\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$"},
        {id: 4, question: "In the context of the Method of Moments, how is the estimation error $\\hat{e}$ defined?", answer: "$\\hat{e} = \\hat{a} - a$, where $\\hat{a}$ is the estimate and $a$ is the true parameter value."},
        {id: 4, question: "Formula: Residual $\\hat{u}_i$ sum of squares identity", answer: "$\\sum_{i=1}^n \\hat{u}_i = 0$ (if an intercept is included in the model)."},
        {id: 4, question: "How is the predicted value $\\hat{y}_i$ defined in OLS?", answer: "$\\hat{y}_i = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_i$."},
        {id: 4, question: "In OLS estimation, the second-order condition for a minimum requires that the Hessian matrix is _____.", answer: "Positive definite (or specifically that $A \\cdot C - B^2 > 0$ for the objective function)."},
        {id: 4, question: "How is the residual $\\hat{u}_i$ defined in OLS?", answer: "$\\hat{u}_i = y_i - \\hat{y}_i$."},
        {id: 4, question: "Why is the OLS estimator of the intercept $\\hat{\\beta}_0$ calculated as $\\bar{y} - \\hat{\\beta}_1 \\bar{x}$?", answer: "To ensure that the regression line passes through the sample means of $x$ and $y$."},
        {id: 4, question: "What geometric point does every OLS regression line always pass through?", answer: "The point of the sample means $(\\bar{x}, \\bar{y})$."},
        {id: 4, question: "How is an OLS residual $\\hat{u}_i$ calculated for a specific observation?", answer: "$\\hat{u}_i = y_i - \\hat{y}_i$."},
        {id: 4, question: "What is the Sample Regression Function (SRF)?", answer: "The estimated linear relationship $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$ generated from a specific sample."},
        {id: 4, question: "What is the formula for the OLS intercept estimator $\\hat{\\beta}_0$?", answer: "$\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$."},
        {id: 4, question: "What is the purpose of checking the Second-Order Conditions (SOC) in OLS derivation?", answer: "To verify that the solution found by setting first derivatives to zero is indeed a minimum."},
        {id: 4, question: "Formula: Slope coefficient $\\hat{\\beta}_1$ using Covariance and Variance", answer: "$\\hat{\\beta}_1 = \\frac{\\widehat{Cov}(x, y)}{\\widehat{Var}(x)}$"},
        {id: 4, question: "In OLS, the residuals $\\hat{u}_i$ are uncorrelated with the _____ variable $x$ by construction.", answer: "independent (or explanatory)"},
        {id: 5, question: "How is $R^2$ calculated using SST and SSR?", answer: "$R^2 = 1 - \\frac{SSR}{SST}$."},
        {id: 5, question: "What is the definition of the Explained Sum of Squares (SSE)?", answer: "The amount of sample variation in $y$ that is explained by the regression line, calculated as $\\sum (\\hat{y}_i - \\bar{y})^2$."},
        {id: 5, question: "What does the Coefficient of Determination ($R^2$) measure?", answer: "The proportion of the total variation in $y$ that is explained by $x$."},
        {id: 5, question: "What is the identity relating SST, SSE, and SSR?", answer: "$SST = SSE + SSR$."},
        {id: 5, question: "What is the relationship between the sample covariance of $(\\hat{y}, \\hat{u})$ in OLS?", answer: "The sample covariance is always zero."},
        {id: 5, question: "What is the interpretation of $R^2 = 0$ in a regression model?", answer: "The independent variable $x$ explains none of the variation in the dependent variable $y$."},
        {id: 5, question: "If the OLS residual $\\hat{u}_i$ is positive, what is the relationship between the actual value $y_i$ and the fitted value $\\hat{y}_i$?", answer: "The actual value $y_i$ is greater than the fitted value $\\hat{y}_i$."},
        {id: 5, question: "Formula: Total Sum of Squares ($SST$)", answer: "$SST = \\sum (y_i - \\bar{y})^2$"},
        {id: 5, question: "Formula: Residual Sum of Squares ($SSR$)", answer: "$SSR = \\sum \\hat{u}_i^2$"},
        {id: 5, question: "Formula: Coefficient of Determination ($R^2$)", answer: "$R^2 = 1 - \\frac{SSR}{SST}$"},
        {id: 5, question: "How is 'total variation' in $y$ decomposed in the OLS framework?", answer: "Into explained variation (SSE) and unexplained variation (SSR)."},
        {id: 5, question: "What is the interpretation of $R^2 = 1$?", answer: "All sample data points lie exactly on the fitted OLS regression line."},
        {id: 5, question: "What is a 'fitted value' $\\hat{y}_i$?", answer: "The value of $y$ predicted by the OLS regression line for a specific value $x_i$."},
        {id: 5, question: "What does a negative $R^2$ indicate in a standard OLS model?", answer: "It is not possible in OLS with an intercept;  $R^2$ must be between 0 and 1."},
        {id: 5, question: "What is the relationship between $R^2$ and the goodness of fit?", answer: "$R^2$ measures the fraction of the sample variation in $y$ that is explained by $x$."},
        {id: 5, question: "In a simple regression, if the sample size $n$ is 1080 and the $R^2$ is 0.58, what does this indicate about the variation in the dependent variable?", answer: "$58\\%$ of the variation in the dependent variable is explained by the independent variable."},
        {id: 5, question: "In terms of correlation, what is $R^2$ equal to in a simple linear regression?", answer: "The square of the sample correlation coefficient between $y_i$ and $\\hat{y}_i$."},
        {id: 5, question: "What is the definition of the Total Sum of Squares (SST)?", answer: "The total sample variation in the dependent variable, calculated as $\\sum (y_i - \\bar{y})^2$."},
        {id: 6, question: "If $y$ is multiplied by a constant $c$, what happens to both the OLS intercept and slope estimators?", answer: "They are both multiplied by $c$."},
        {id: 6, question: "In a simple linear model $y = \\beta_0 + \\beta_1 x + u$, how is the slope $\\beta_1$ interpreted?", answer: "As the ceteris paribus change in $y$ resulting from a one-unit increase in $x$."},
        {id: 6, question: "In a Log-Log model $log(y) = \\beta_0 + \\beta_1 log(x) + u$, how is the slope $\\beta_1$ interpreted?", answer: "As a constant elasticity: a $1\\%$ increase in $x$ is associated with a $\\beta_1\\%$ increase in $y$."},
        {id: 6, question: "If the explanatory variable $x$ is rescaled by a factor $c$ (e.g., $x_{new} = x / c$), how is the new OLS slope coefficient $\\hat{\\beta}_{1,new}$ related to the original?", answer: "$\\hat{\\beta}_{1,new} = c \\cdot \\hat{\\beta}_1$."},
        {id: 6, question: "In a quadratic model $y = \\alpha_0 + \\alpha_1 x^2 + u$, what is the marginal effect of $x$ on the predicted value of $y$?", answer: "The first derivative with respect to $x$: $\\frac{d\\hat{y}}{dx} = 2 \\hat{\\alpha}_1 x$."},
        {id: 6, question: "What does a quadratic term in a regression (e.g., $sqft^2$) allow the model to capture?", answer: "Non-linear relationships where the marginal effect changes as the independent variable increases."},
        {id: 6, question: "If the distance to an incinerator has an elasticity of $0.312$ on house price, how is 'distance' related to 'price'?", answer: "Positively;  as distance increases, the house price increases."},
        {id: 6, question: "In a Log-Level model, if the coefficient of $sqft$ is $0.0004113$, what is the approximate percentage increase in price for an additional $100$ square feet?", answer: "$4.113\\%$"},
        {id: 6, question: "In a Log-Log model, if the coefficient is $0.312$, a $10\\%$ increase in $x$ leads to a _____% increase in $y$.", answer: "$3.12$"},
        {id: 6, question: "In a Log-Linear regression, how is the elasticity at a specific point $x$ calculated?", answer: "Elasticity = $\\hat{\\gamma}_1 \\cdot x$."},
        {id: 6, question: "What does a semi-elasticity of $0.0004113$ mean for a 2000 sq.ft. house regarding a $1\\%$ change in footprint?", answer: "A $1\\%$ increase in footprint (20 sq.ft.) results in an estimated $0.823\\%$ increase in price."},
        {id: 6, question: "Why might a 'log-level' model be preferred for a wage equation?", answer: "It assumes a constant percentage growth in wages for each additional year of education rather than a constant unit increase."},
        {id: 6, question: "In the model $\\text{wage} = \\beta_0 + \\beta_1 \\text{educ} + u$, what is the predicted increase in wage for each year of education?", answer: "The value of $\\beta_1$."},
        {id: 6, question: "In a Level-Level model, if $x$ increases by one unit, what is the predicted change in $y$?", answer: "The value of the slope parameter $\\beta_1$."},
        {id: 6, question: "Formula: Elasticity of $\\hat{y}$ with respect to $x$ in a Log-Level model $\\hat{log}(y) = \\hat{\\gamma}_0 + \\hat{\\gamma}_1 x$", answer: "$\\epsilon = \\hat{\\gamma}_1 x$"},
        {id: 6, question: "In a Log-Level model $log(y) = \\gamma_0 + \\gamma_1 x + u$, how is the slope $\\gamma_1$ interpreted?", answer: "As a semi-elasticity: a one-unit increase in $x$ is associated with an approximate $100 \\cdot \\gamma_1 \\%$ change in $y$."},
        {id: 6, question: "In a log-level model $\\log(y) = \\beta_0 + \\beta_1 x + u$, what is the interpretation of $\\beta_1$?", answer: "$100 \\cdot \\beta_1$ is the percentage change in $y$ given a one-unit change in $x$."},
        {id: 6, question: "Does changing the units of measurement of $x$ or $y$ affect the $R^2$ value?", answer: "No, $R^2$ is invariant to changes in units of measurement."},
        {id: 6, question: "If $x$ is multiplied by a constant $c$, what happens to the OLS slope estimator $\\hat{\\beta}_1$?", answer: "It is divided by $c$."},
        {id: 6, question: "In a level-log model $y = \\beta_0 + \\beta_1 \\log(x) + u$, what is the interpretation of $\\beta_1$?", answer: "$\\beta_1 / 100$ is the change in $y$ given a 1% change in $x$."},
        {id: 6, question: "In a log-log model $\\log(y) = \\beta_0 + \\beta_1 \\log(x) + u$, what is the interpretation of $\\beta_1$?", answer: "$\\beta_1$ is the elasticity of $y$ with respect to $x$."},
        {id: 6, question: "In a quadratic model $y = \\alpha_0 + \\alpha_1 x^2 + u$, does the marginal effect of $x$ remain constant?", answer: "No;  it depends on the level of $x$."},
        {id: 7, question: "If the error variance $\\sigma^2$ increases, what happens to the variance of the OLS slope estimator?", answer: "The variance of the OLS slope estimator increases."},
        {id: 7, question: "What does the property of 'unbiasedness' mean for an estimator?", answer: "The expected value of the estimator is equal to the true population parameter."},
        {id: 7, question: "What happens to the variance of the intercept estimator $\\hat{\\beta}_0$ if the sample mean $\\bar{x}$ is far from zero?", answer: "The variance of $\\hat{\\beta}_0$ increases."},
        {id: 7, question: "Why is the denominator $n-2$ used when estimating the error variance $\\sigma^2$?", answer: "It is a degrees of freedom adjustment to account for the two parameters already estimated."},
        {id: 7, question: "How is the standard error of $\\hat{\\beta}_1$ calculated?", answer: "$se(\\hat{\\beta}_1) = \\frac{\\hat{\\sigma}}{\\sqrt{\\sum(x_i - \\bar{x})^2}}$."},
        {id: 7, question: "What is the unbiased estimator for the error variance $\\sigma^2$?", answer: "$\\hat{\\sigma}^2 = \\frac{SSR}{n-2}$."},
        {id: 7, question: "In a regression through the origin, what property do the residuals generally lack that standard OLS has?", answer: "The sum of the residuals is not necessarily equal to zero."},
        {id: 7, question: "What happens to the variance of the OLS estimator as the sample size $n$ increases?", answer: "The variance of the OLS estimator decreases."},
        {id: 7, question: "What is the primary risk of using 'regression through the origin' when the population intercept $\\beta_0$ is actually non-zero?", answer: "The resulting slope estimator $\\hat{\\beta}_1$ becomes biased."},
        {id: 7, question: "What is the 'Standard Error of the Regression' (SER)?", answer: "The square root of the estimated error variance, $\\hat{\\sigma}$."},
        {id: 7, question: "How does an increase in the sample variation of $x$ affect the variance of $\\hat{\\beta}_1$?", answer: "It decreases the variance of $\\hat{\\beta}_1$."},
        {id: 7, question: "What is the 'error variance' $\\sigma^2$ physically representing in a scatter plot?", answer: "The spread or dispersion of the data points around the population regression line."},
        {id: 7, question: "What does the 'Standard Error' of a coefficient measure?", answer: "The accuracy or precision of the estimated coefficient."},
        {id: 8, question: "In a regression table, what does 'const' typically refer to?", answer: "The intercept ($\\beta_0$) of the regression model."},
        {id: 8, question: "If the $p$-value of a coefficient is very small (e.g., $1.5e-204$), what does this indicate about the statistical significance of that variable?", answer: "The variable is highly statistically significant (the null hypothesis that the coefficient is zero can be rejected)."},
        {id: 8, question: "Why might a positive correlation between house prices and distance to a garbage incinerator be biased?", answer: "City planners might place incinerators away from high-value neighborhoods, making distance correlated with omitted neighborhood quality factors."},
        {id: 8, question: "If $85\\%$ of women in a sample do not smoke, why will high birth weights be systematically under-predicted at $cigs=0$?", answer: "The OLS line at $x=0$ sits at the mean birth weight, so any birth weights above that mean are under-predicted by that single predicted value."},
        {id: 8, question: "In the simple linear regression model $y = \\beta_0 + \\beta_1x + u$, if $E(u) = \\alpha_0 \\ne 0$, what happens to the slope $\\beta_1$ when the model is reparameterized to have a zero-mean error?", answer: "The slope $\\beta_1$ remains unchanged."},
        {id: 8, question: "If $x$ and $y$ are positively correlated, what will be the sign of the OLS slope estimator $\\hat{\\beta}_1$?", answer: "Positive."},
        {id: 9, question: "Formula: Conditional probability $P(X = x | Y = y)$", answer: "$\\frac{f_{X,Y}(x, y)}{f_Y(y)}$"},
        {id: 9, question: "In a joint probability distribution table for discrete variables $X$ and $Y$, how is the marginal probability $f_X(x)$ calculated?", answer: "By summing the joint probabilities $f(x, y)$ over all possible values of $Y$."},
        {id: 9, question: "What is the requirement for a discrete joint probability distribution to be considered complete?", answer: "The sum of all joint probabilities $f(x, y)$ in the distribution must equal $1.00$."},
        {id: 9, question: "Based on the concept of expected winnings $E(X)$, under what condition is it rational to take a bet?", answer: "When the expected winnings $E(X)$ are greater than zero."},
        {id: 9, question: "If $f(x, y)$ is the joint PDF of $X$ and $Y$, then $E(XY) = $ _____.", answer: "$\\int \\int xy f(x,y) dx dy$ (for continuous variables) or $\\sum \\sum xy f(x,y)$ (for discrete variables)."},
        {id: 9, question: "Term: PDF (Probability Density Function)", answer: "Definition: A function $f_X(x)$ whose integral over $(-\\infty, \\infty)$ is 1, used to define the probabilities of a continuous random variable."},
        {id: 9, question: "The Law of Iterated Expectations states that $E[E(Y|X)] = $ _____.", answer: "$E(Y)$"},
        {id: 9, question: "Formula: Conditional expectation $E(X | Y = y)$", answer: "$\\sum x \\cdot P(X = x | Y = y)$"},
        {id: 9, question: "How can you determine if two random variables $X$ and $Y$ are statistically independent using their probability functions?", answer: "Independence holds if and only if $f(x, y) = f_X(x) f_Y(y)$ for all $x$ and $y$."},
        {id: 10, question: "If a variable $X$ follows a normal distribution $N(\\mu, \\sigma^2)$, what is the mean and variance of the linear transformation $Y = a + bX$?", answer: "The mean is $a + b\\mu$ and the variance is $b^2\\sigma^2$."},
        {id: 10, question: "Formula: Covariance of two affine transformations $Cov(a + bX, c + dY)$", answer: "$bd \\cdot Cov(X, Y)$"},
        {id: 10, question: "Formula: Covariance $Cov(X, Y)$ using expected values", answer: "$E(XY) - E(X)E(Y)$"},
        {id: 10, question: "Formula: Alternative definition of Variance $Var(X)$ using moments", answer: "$E(X^2) - (E[X])^2$"},
        {id: 10, question: "Formula: Variance of a linear transformation $Var(a + bX)$", answer: "$b^2 Var(X)$"},
        {id: 10, question: "Term: Linearity of Expectation", answer: "Definition: For any constants $a$ and $b$ and random variable $X$, $E(a + bX) = a + bE(X)$."},
        {id: 10, question: "The standard deviation is the _____ of the variance.", answer: "square root"},
        {id: 10, question: "If the variable 'sales' is a linear transformation of a normal variable 'price', what is the distribution of 'sales'?", answer: "Normal distribution."},
        {id: 11, question: "Standardization Formula: $Z = \\frac{X - E(X)}{\\sqrt{Var(X)}}$ results in a variable with a mean of _____ and a variance of _____.", answer: "0;  1"},
        {id: 11, question: "When evaluating $P(Z > -1.00465)$ for a standard normal distribution, how can symmetry be used?", answer: "$P(Z > -1.00465) = P(Z < 1.00465) = \\Phi(1.00465)$."},
        {id: 11, question: "What is the relationship between the standard normal variable $Z$ and any normal variable $X \\sim N(\\mu, \\sigma^2)$?", answer: "$Z = \\frac{X - \\mu}{\\sigma}$"},
        {id: 12, question: "Formula: Sum of squared deviations $\\sum (x_i - \\bar{x})^2$ expanded", answer: "$\\sum x_i^2 - n\\bar{x}^2$"},
        {id: 12, question: "In the summation $\\sum_{i=1}^n x_i^2 - n\\bar{x}^2$, what does $\\bar{x}$ represent?", answer: "The sample mean: $\\frac{1}{n} \\sum_{i=1}^n x_i$."},
        {id: 12, question: "Summation property: $\\sum_{i=1}^n c = $ _____, where $c$ is a constant.", answer: "$nc$"},
        {id: 13, question: "If $f(x) = ax^{-a-1}$ for $x \\ge 1$ and $a > 1$, what is the expected value $E(X)$?", answer: "$\\frac{a}{a - 1}$"},
        {id: 13, question: "How does the Method of Moments estimator $\\hat{a}_{MM}$ for the PDF $f(x) = ax^{-a-1}$ relate to the sample mean $\\bar{x}$?", answer: "$\\hat{a}_{MM} = \\frac{\\bar{x}}{\\bar{x} - 1}$"},
        {id: 14, category: "Data Types", question: "What are the four main data structures used in econometrics?", answer: "Cross-sectional data, pooled cross-sections, panel data (longitudinal), and time series."},
        {id: 14, category: "Data Types", question: "What characterises cross-sectional data?", answer: "Observations of a sample of units at a single point in time, with no natural ordering. Assumes random sampling."},
        {id: 14, category: "Data Types", question: "What is a sample-selection problem?", answer: "It occurs when data is not obtained by random sampling, resulting in a non-representative sample of the population."},
        {id: 14, category: "Data Types", question: "How does pooled cross-section data differ from panel data?", answer: "Pooled cross-sections combine different individuals at various time points; panel data follows the same individuals over multiple periods."},
        {id: 14, category: "Data Types", question: "What advantage does panel data offer over a single cross-section?", answer: "It allows control of unobserved time-constant individual effects and analysis of lagged effects."},
        {id: 14, category: "Data Types", question: "What notation is used for time series data?", answer: "$x_t$, $t = 1, \\ldots, T$, where $T$ is the total number of time periods observed."},
        {id: 14, category: "Data Types", question: "Why are time series observations typically not independent?", answer: "Because of strong serial correlation (dependence over time) — e.g. today's GDP is correlated with yesterday's."},
        {id: 14, category: "Data Types", question: "What is the difference between cardinal and ordinal data?", answer: "Cardinal data has measurable numerical differences (e.g. income); ordinal data only ranks observations (e.g. grades)."},
        {id: 14, category: "Data Types", question: "Give an example of nominal/qualitative data.", answer: "A gender dummy variable: 0 = male, 1 = female — values only distinguish categories, no ranking or numerical meaning."},
        {id: 15, category: "Econometric Models", question: "What are the four required steps of econometric analysis?", answer: "1. Model specification\n2. Data collection\n3. Estimation and testing\n4. Interpretation of results"},
        {id: 15, category: "Econometric Models", question: "Why does an econometric model include a stochastic error term $u$?", answer: "To capture unpredictable random effects, measurement errors, omitted variables, and incorrect functional form."},
        {id: 15, category: "Econometric Models", question: "Write the econometric consumption function and name each parameter.", answer: "$C = \\alpha + \\beta Y + u$; where $\\beta$ = marginal propensity to consume, $\\alpha$ = consumption at $Y=0$, $u$ = random error."},
        {id: 15, category: "Econometric Models", question: "Write the wage equation from human capital theory.", answer: "$wage_i = \\beta_0 + \\beta_1\\, educ_i + \\beta_2\\, exper_i + u_i$; $\\beta_1$ = return to education, $\\beta_2$ = return to experience."},
        {id: 15, category: "Econometric Models", question: "What hypothesis tests whether experience matters in the wage model?", answer: "$\\beta_2 = 0$ (experience has no effect on wage)."},
        {id: 15, category: "Econometric Models", question: "What is the difference between an economic model and an econometric model?", answer: "An econometric model extends the economic model by adding a stochastic error term $u$ to account for uncertainty and unobservables."},
        {id: 15, category: "Econometric Models", question: "What does the error term $u$ contain in the consumption model?", answer: "All unpredictable effects on consumption: measurement errors, omitted variables such as ability, and incorrect functional form."},
    ],
    lt: [
      {id: 1, category: "Econometrics", question: "What is econometrics?", answer: "Econometrics is the combined application of {{mathematical economics}}, {{mathematical statistics}}, and economic theory to provide {{empirical}} evidence for relationships suggested by economic theory."},
      {id: 1, category: "Econometrics", question: "Why is econometrics an independent field?", answer: "Econometrics requires special methods because economic data is primarily {{non-experimental}} and {{observational}}, not generated in controlled laboratory experiments."},
      {id: 1, category: "Econometrics", question: "Econometrics is divided into which subfields?", answer: "Econometrics is divided into {{theoretical}} and {{applied}} econometrics, and into {{Micro-}} and {{Macro-}}econometrics."},
      {id: 2, category: "Causality", question: "Complete the definition of ceteris paribus.", answer: "Ceteris paribus means under otherwise {{unchanged}} conditions — all other relevant factors being {{equal}}. It isolates a {{specific}} effect."},
      {id: 2, category: "Causality", question: "What is the relationship between correlation and causality?", answer: "{{Correlation}} measures the linear relationship between two variables but does not indicate the {{direction}} of {{causality}}."},
      {id: 2, category: "Causality", question: "What is reverse causality?", answer: "Reverse {{causality}} is a modelling problem where the dependent variable may actually be influencing the {{independent}} variable."},
      {id: 14, category: "Data Types", question: "Describe cross-sectional data.", answer: "Cross-sectional data consists of observations at a {{single}} point in time with no natural {{ordering}}. It usually assumes {{random}} sampling."},
      {id: 14, category: "Data Types", question: "Describe panel data.", answer: "Panel data follows the same cross-sectional {{units}} at several points in {{time}}, allowing control of unobserved {{individual}} effects."},
      {id: 14, category: "Data Types", question: "What are the three types of data by information content?", answer: "Data can be {{cardinal}} (numerical meaning), {{ordinal}} (ranking only), or {{nominal}} (categories only)."},
      {id: 15, category: "Econometric Models", question: "What are the four steps of econometric analysis?", answer: "The four steps are: {{Model}} specification, {{Data}} collection, {{Estimation}} and testing, and {{Interpretation}} of results."},
      {id: 15, category: "Econometric Models", question: "Complete the econometric consumption model.", answer: "The consumption model is $C = \\alpha + \\beta \\cdot Y + {{u}}$, where $u$ is the {{stochastic}} error term."},
      {id: 15, category: "Econometric Models", question: "What does the error term u capture?", answer: "The error term captures: {{unpredictable}} random effects, {{measurement}} errors, {{omitted}} variables, and incorrect {{functional form}}."},
    ],
    mc: [
        {id: 1, category: "Econometrics", question: "What is the literal meaning of the term 'econometrics'?", options: ["Measurement in Economics", "Economic forecasting", "Mathematical modelling of markets", "Statistical theory of finance"], correct: 0},
        {id: 1, category: "Econometrics", question: "Why has econometrics evolved as an independent field from general statistics?", options: ["Economic data is primarily non-experimental and observational", "Economists only study financial markets", "Standard statistics has no mathematical foundations", "Econometrics relies exclusively on laboratory experiments"], correct: 0},
        {id: 1, category: "Econometrics", question: "Which combination forms the methodological basis of econometrics?", options: ["Economic theory, mathematical language, and statistical methods", "Accounting, computer science, and psychology", "Philosophy, history, and sociology", "Biology, chemistry, and physics"], correct: 0},
        {id: 2, category: "Causality", question: "What does 'ceteris paribus' mean in econometric analysis?", options: ["Holding all other relevant factors equal to isolate a specific effect", "Maximising the R-squared of a regression", "Using the largest possible sample size", "Running experiments in a controlled laboratory"], correct: 0},
        {id: 2, category: "Causality", question: "What is the key limitation of correlation as a measure of economic relationships?", options: ["It does not indicate the direction of causality", "It can only measure non-linear relationships", "It requires panel data to be valid", "It always overstates the true effect"], correct: 0},
        {id: 2, category: "Causality", question: "What is 'reverse causality' in a regression model?", options: ["A problem where the dependent variable may actually be influencing the independent variable", "A situation where both variables are constant", "An error caused by too many observations", "A problem that only arises in time series data"], correct: 0},
        {id: 14, category: "Data Types", question: "Which data structure follows the same units (e.g. individuals, firms) across multiple time periods?", options: ["Panel (longitudinal) data", "Cross-sectional data", "Pooled cross-sections", "Singular time series"], correct: 0},
        {id: 14, category: "Data Types", question: "In time series data, why does the ordering of observations matter?", options: ["Observations are typically correlated over time", "Each observation is independent of all others", "Time series data has no natural chronological order", "Ordering only affects the sample size calculation"], correct: 0},
        {id: 14, category: "Data Types", question: "What type of data only distinguishes between categories without any ranking?", options: ["Nominal/qualitative data", "Ordinal data", "Cardinal data", "Longitudinal data"], correct: 0},
        {id: 15, category: "Econometric Models", question: "In the consumption model $C = \\alpha + \\beta Y + u$, what does the parameter $\\beta$ represent?", options: ["The marginal propensity to consume", "The error variance", "Autonomous consumption at $Y = 0$", "The interest rate"], correct: 0},
        {id: 15, category: "Econometric Models", question: "In the wage model $wage_i = \\beta_0 + \\beta_1 educ_i + \\beta_2 exper_i + u_i$, what is the hypothesis that experience has no effect?", options: ["$\\beta_2 = 0$", "$\\beta_1 = 0$", "$\\beta_0 = 0$", "$\\beta_2 = 1$"], correct: 0},
        {id: 15, category: "Econometric Models", question: "What does the error term $u_i$ capture in the wage model?", options: ["All unobserved influences on wage for person $i$", "The predicted wage of person $i$", "The sample mean of all wages", "The marginal effect of education alone"], correct: 0},
        {id: 21, hidden: true, question: "Why has econometrics evolved as a separate discipline from mathematical statistics?", options: ["Statistics cannot be applied to any economic variables like inflation or GDP.", "It focuses on the inherent problems of analyzing non-experimental, observational economic data.", "Econometrics does not utilize mathematical language or statistical inference.", "Econometrics relies exclusively on data generated from controlled laboratory experiments."], correct: 1},
        {id: 22, hidden: true, question: "In the context of econometric analysis, what does the term 'ceteris paribus' signify?", options: ["A situation where the error term is perfectly correlated with the explanatory variable.", "The assumption that all variables in the model are changing simultaneously.", "The isolation of a specific effect by holding all other relevant factors equal.", "The requirement that the sample size must be infinite to produce an estimate."], correct: 2},
        {id: 23, hidden: true, category: "Econometrics", question: "Which data structure follows the same cross-sectional units (such as individuals or firms) over a given time period?", options: ["Panel (longitudinal) data", "Pooled cross sections", "Cross-sectional data", "Time series data"], correct: 0},
        {id: 24, hidden: true, category: "Econometrics", question: "In the simple linear regression model $y = \\beta_0 + \\beta_1 x + u$, what does the error term $u$ represent?", options: ["The slope of the population regression function.", "All unobserved factors other than $x$ that affect $y$.", "The predicted value of the dependent variable.", "The sample average of the independent variable."], correct: 1},
        {id: 25, hidden: true, category: "Econometrics", question: "What is the primary objective of the Ordinary Least Squares (OLS) estimation method?", options: ["To eliminate the need for random sampling.", "To minimize the sum of the squared residuals.", "To ensure that the intercept $\\beta_0$ is always zero.", "To maximize the correlation between $x$ and $u$."], correct: 1},
        {id: 26, hidden: true, category: "Econometrics", question: "The Zero Conditional Mean Assumption, E(u|x) = 0, implies which of the following?", options: ["The dependent variable y must follow a normal distribution.", "The explanatory variable x is a perfect predictor of y.", "The variance of u is constant for all values of x.", "The average value of the unobservables is the same across all slices of the population defined by x."], correct: 3},
        {id: 27, hidden: true, category: "Econometrics", question: "In a 'log-level' model, $\\log(y) = \\beta_0 + \\beta_1 x + u$, how is the coefficient $\\beta_1$ interpreted?", options: ["A one-unit change in $x$ is associated with a $\\beta_1$ unit change in $y$.", "A one-unit change in $x$ is associated with a $(100 \\cdot \\beta_1)$ percent change in $y$.", "A 1% change in $x$ is associated with a $\\beta_1$ percent change in $y$.", "A 1% change in $x$ is associated with a $(\\beta_1 / 100)$ unit change in $y$."], correct: 1},
        {id: 28, hidden: true, category: "Econometrics", question: "Which of the following is a key algebraic property of OLS residuals?", options: ["The residuals are always normally distributed in every sample.", "The sum of the squared residuals is always equal to the Total Sum of Squares.", "The residuals are always equal to the population error terms.", "The sample average of the OLS residuals is always zero."], correct: 3},
        {id: 29, hidden: true, category: "Econometrics", question: "What does the R² (coefficient of determination) measure in a regression analysis?", options: ["The proportion of the sample variation in y that is explained by x.", "The probability that the estimated slope is the true population slope.", "The variance of the OLS estimator.", "The causal impact of a one-unit change in x on the error term u."], correct: 0},
        {id: 30, hidden: true, category: "Econometrics", question: "According to the Gauss-Markov assumptions for simple regression, which assumptions are required to show that the OLS estimators are unbiased?", options: ["Only the assumption that the error terms are normally distributed.", "Assumptions SLR.1 through SLR.5 (including Homoskedasticity).", "Only SLR.1 (Linear in Parameters).", "Assumptions SLR.1 through SLR.4."], correct: 3},
        {id: 31, hidden: true, category: "Econometrics", question: "What occurs if the assumption of 'Sample Variation in the Explanatory Variable' (SLR.3) is violated?", options: ["The OLS estimator will be biased toward zero.", "The error term u becomes perfectly predictable.", "The OLS slope estimate cannot be computed because the denominator of the formula becomes zero.", "The R² of the model will automatically be equal to 1."], correct: 2},
        {id: 32, hidden: true, category: "Econometrics", question: "In a simple regression where x is a binary dummy variable (0 or 1), how is the OLS slope estimate interpreted?", options: ["It is always equal to the intercept.", "It is the difference in the sample means of y between the two groups.", "It represents the correlation coefficient between y and the error term u.", "It is the percentage change in y for a one-unit change in x."], correct: 1},
        {id: 33, hidden: true, category: "Econometrics", question: "What happens to the OLS slope estimate if the units of the independent variable x are multiplied by a constant c?", options: ["The estimate is also multiplied by c.", "The estimate is divided by c.", "The R² of the model will change significantly.", "The estimate remains unchanged."], correct: 1},
        {id: 34, hidden: true, category: "Econometrics", question: "Under homoskedasticity, how does the variance of the OLS slope estimator change as the sample variation in $x$ increases?", options: ["The variance decreases, making the estimate more precise.", "The variance becomes zero, ensuring a perfect estimate.", "The variance stays constant, as it only depends on the error variance $\\sigma^2$.", "The variance increases, making the estimate less precise."], correct: 0},
        {id: 35, hidden: true, category: "Econometrics", question: "What is the consequence of omitting a variable from a simple regression that is correlated with x and also affects y?", options: ["The OLS estimators will be inefficient but still unbiased.", "The OLS estimators will generally be biased.", "The residuals will sum to a non-zero value.", "The R² will always increase."], correct: 1},
        {id: 36, hidden: true, category: "Econometrics", question: "In the potential outcomes framework, what is the 'Average Treatment Effect' (ATE)?", options: ["The expected value of the difference between the outcome with treatment and the outcome without treatment for a random person.", "The correlation between the treatment indicator and the error term.", "The difference between the observed y and the predicted y.", "The sum of squared residuals in a randomized controlled trial."], correct: 0},
        {id: 37, hidden: true, category: "Econometrics", question: "Which algebraic property of OLS ensures that the regression line always passes through the point ($\\bar{x}$, $\\bar{y}$)?", options: ["The minimization of the sum of absolute residuals.", "The assumption of homoskedasticity.", "The use of log-log transformations.", "The first-order condition $\\sum(y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i) = 0$."], correct: 3},
        {id: 38, hidden: true, category: "Econometrics", question: "If X is a random variable and a, b are constants, which property correctly describes the variance of the transformation a + bX?", options: ["$Var(a + bX) = a + b^2 Var(X)$", "$Var(a + bX) = b^2 Var(X)$", "$Var(a + bX) = b \\cdot Var(X)$", "$Var(a + bX) = Var(X)$"], correct: 1},
        {id: 39, hidden: true, category: "Econometrics", question: "What is 'mean independence' as used in econometric assumptions?", options: ["The condition where E(u|x) = E(u).", "The condition where the variance of u is zero.", "The requirement that x must be a normally distributed variable.", "The condition where x and y have the same sample mean."], correct: 0},
        {id: 40, hidden: true, category: "Econometrics", question: "Why is 'Regression through the Origin' rarely used in applied econometric work?", options: ["If the true population intercept is not zero, the OLS slope estimator will be biased.", "It is mathematically impossible to solve for the slope without an intercept.", "It requires the slope $\\beta_1$ to be zero.", "It makes it impossible to calculate the $R^2$."], correct: 0},
        {id: 41, hidden: true, category: "Econometrics", question: "Which of the following describes a 'Log-Log' model?", options: ["A model where only the error term is logged.", "A model used when the dependent variable is binary.", "A model where both the dependent and independent variables are in natural logarithms.", "A model where the intercept is the log of the sample mean."], correct: 2},
        {id: 42, hidden: true, category: "Econometrics", question: "In the derivation of OLS, what is the 'Method of Moments' approach?", options: ["A procedure for maximizing the variance of the residuals.", "A method used to calculate the exact time each observation was recorded.", "A technique for selecting the most significant variables in a data set.", "A way to estimate parameters by equating population moments to their sample counterparts."], correct: 3},
        {id: 43, hidden: true, category: "Econometrics", question: "The 'Standard Error of the Regression' (SER) is an estimate of which population parameter?", options: ["The slope $\\beta_1$.", "The standard deviation of the error term, $\\sigma$.", "The intercept $\\beta_0$.", "The sample variance of $x$."], correct: 1},
        {id: 44, hidden: true, category: "Econometrics", question: "In a cross-sectional data set, why is the ordering of the observations usually considered irrelevant?", options: ["Because the computer automatically sorts data by the dependent variable.", "Because the data are assumed to be obtained via random sampling from a population.", "Because cross-sectional data only contains one variable.", "Because cross-sectional data points are highly dependent on their chronological order."], correct: 1},
        {id: 45, hidden: true, category: "Econometrics", question: "If the covariance between two random variables X and Y is zero, what can be said about their relationship?", options: ["The expected value of Y must be zero.", "They are perfectly independent.", "There is no linear relationship between them.", "The variable X must be a constant."], correct: 2},
        {id: 46, hidden: true, category: "Econometrics", question: "Which term describes the part of y that is predicted by the regression line?", options: ["Heteroskedastic component", "Stochastic component", "Systematic component", "Residual component"], correct: 2},
        {id: 47, hidden: true, category: "Econometrics", question: "What is the result of 'Regressing y on a constant' only, with no explanatory variable x?", options: ["The OLS slope estimate will be 1.", "The R² of the model will be 1.", "The estimated intercept will be the sample average $\\bar{y}$.", "The OLS residuals will all be equal to zero."], correct: 2},
        {id: 48, hidden: true, category: "Econometrics", question: "What is the interpretation of the slope in a 'Level-Log' model, $y = \\beta_0 + \\beta_1 \\log(x) + u$?", options: ["A 1% change in x is associated with a $\\beta_1$ percent change in y.", "A one-unit change in x is associated with a $\\beta_1$ unit change in y.", "A 1% change in x is associated with a $(\\beta_1 / 100)$ unit change in y.", "A one-unit change in x is associated with a $\\beta_1$ percent change in y."], correct: 2},
        {id: 49, hidden: true, category: "Econometrics", question: "Why are standard errors important in econometric reports?", options: ["They are used to calculate the R² of the regression.", "They indicate whether the model is linear in parameters.", "They provide a measure of the sample size.", "They estimate the precision of the OLS estimators."], correct: 3},
    ],
    theory: [
        {id: 1, title: "What is Econometrics?", html: `
            <h2>What is Econometrics?</h2>
            <p><strong>Literal meaning:</strong> Measurement in Economics — but the field is much broader than just measuring.</p>
            <h3>Definition</h3>
            <ul>
              <li>Combined application of <strong>mathematical economics</strong>, <strong>mathematical statistics</strong>, and <strong>economic theory</strong></li>
              <li>Statistical verification of theoretically established doctrines</li>
              <li>Provides empirical evidence for relationships suggested by economic theory</li>
            </ul>
            <h3>Methods draw on</h3>
            <ul>
              <li>Economic theory</li>
              <li>Mathematical language</li>
              <li>Statistical methods</li>
              <li>Software</li>
            </ul>
            <h3>Why do we need econometrics?</h3>
            <ul>
              <li>Description of data (e.g. inflation rate, income distribution)</li>
              <li>Quantification of economic relationships (theory often cannot make quantitative statements alone)</li>
              <li>Testing of economic theories</li>
              <li>Evaluating policy measures and making predictions</li>
              <li>Making economic decisions based on real-world data</li>
            </ul>
            <p>Divided into <em>theoretical</em> vs. <em>applied</em> econometrics, and <em>micro-</em> vs. <em>macroeconometrics</em>.</p>
            <hr>
            <h3>Why is it an Independent Field?</h3>
            <p>The structure of economic problems and the characteristics of economic data frequently require the development of special methods. Many statistical procedures are designed for data generated in <strong>controlled experiments</strong> (laboratory settings).</p>
            <p>Controlled experiments are seldom used in economic research because they are:</p>
            <ul>
              <li>Often impossible</li>
              <li>Very costly</li>
              <li>Morally repugnant</li>
            </ul>
            <p>Data used for inference is therefore primarily <strong>non-experimental, observed data</strong>. Economic data leads to certain problems, and a substantial part of theoretical econometrics is focused on developing procedures that work in the presence of and in spite of these problems.</p>
            <hr>
            <h3>Important Steps in Econometric Analysis</h3>
            <p>Objectives: depiction of reality, prediction, simulation.</p>
            <ol>
              <li><strong>Model:</strong> An economic model adequate for empirical use (from theory or ad hoc). Reality is more complex — correlation does not tell us anything about causation.</li>
              <li><strong>Data:</strong> Suitable data must be present or acquired; graphical and descriptive analysis.</li>
              <li><strong>Estimation and testing procedures:</strong> Must be adequate for the data and question. Check model assumptions.</li>
              <li><strong>Interpretation:</strong> Of parameter values, hypothesis tests, forecasts, simulation, evaluation.</li>
            </ol>
            <hr>
            <h3>Problems of Empirical Analysis</h3>
            <ul>
              <li>Which model framework is suitable for describing economic relationships?</li>
              <li>Is the existing data suited for measuring relevant values? How good is the data quality?</li>
              <li>How can we quantify relationships? Which estimators are good and what are their properties?</li>
              <li>How can we test the implications of economic theories? (hypothesis tests)</li>
              <li>Which procedures provide good forecasts, and what uncertainty comes with forecasts?</li>
            </ul>
        `},
        {id: 2, title: "Causality & Ceteris Paribus", html: `
            <h2>Causality &amp; the Ceteris Paribus Assumption</h2>
            <p>A key goal of econometrics is measuring <strong>causal effects</strong> between economic variables — not merely correlations.</p>
            <p>The typical target is to identify event/variable/state <em>A</em> as the cause of event/variable/state <em>B</em>.</p>
            <p><strong>Example:</strong> Does the change in class sizes have an effect on students' performance? If yes, to which extent?</p>
            <p>Questions can be qualitative (if?) and quantitative (how much?). The quantitative version asks: by how many points do test results change if class size changes by one student, given that all other factors remain unchanged (abilities, social status, etc.)?</p>
            <h3>Ceteris Paribus</h3>
            <p><em>"Under otherwise unchanged conditions — all other relevant factors being equal."</em></p>
            <p>This principle <strong>isolates a specific effect</strong> by holding other relevant variables constant.</p>
            <hr>
            <h3>Correlation vs. Causation</h3>
            <ul>
              <li><strong>Correlation</strong> is a measure of the linear relationship between two variables</li>
              <li>Correlation does <strong>not</strong> indicate the direction of causality (causal effects)</li>
              <li>Regression relations do <strong>not</strong> imply causality</li>
            </ul>
            <p>In observational data, several factors work and change simultaneously — not only the factor of interest. Econometric methods perform <strong>simultaneous impact analysis</strong> of various factors to isolate the effect of the variable of interest.</p>
            <p>The direction of causality in regression models is dictated by <strong>economic theory or intuition</strong>. A relevant statistical regression relation remains even if independent and dependent variables are swapped — only theory tells us the causal direction.</p>
            <h3>Reverse Causality</h3>
            <p>A modelling problem where the supposed <em>independent</em> variable is actually influenced by the <em>dependent</em> variable. This makes it difficult to establish the true causal direction from data alone.</p>
            <hr>
            <h3>The Simple Linear Regression Model</h3>
            <p>The population model is: $$y = \\beta_0 + \\beta_1 x + u$$</p>
            <ul>
              <li><strong>$y$</strong>: dependent (explained) variable</li>
              <li><strong>$x$</strong>: independent (explanatory) variable</li>
              <li><strong>$\\beta_0$</strong>: population intercept</li>
              <li><strong>$\\beta_1$</strong>: population slope — the ceteris paribus change in $y$ for a one-unit increase in $x$</li>
              <li><strong>$u$</strong>: error term — all unobserved factors affecting $y$ other than $x$</li>
            </ul>
            <p>The regression model distinguishes the dependent variable (e.g. wage) from independent variables (e.g. education, experience). The direction of causality is imposed by theory, not by the estimation.</p>
        `},
        {id: 14, title: "Data Types & Structures", html: `
            <h2>Data Types &amp; Structures</h2>
            <p>Econometrics uses a variety of data sets. Some methods apply across data types with little adjustment; others require redevelopment depending on the data type.</p>
            <h3>Cross-Sectional Data</h3>
            <p>Observations of a sample of individuals, households, firms, cities, or countries at a <strong>single point in time</strong>. No natural ordering. Assumes random sampling from the population.</p>
            <p><em>Example (WAGE1.RAW): average hourly wages of 526 people in 1976, including education, experience, gender, marital status.</em></p>
            <p>If data is not obtained by random sampling, a <strong>sample-selection problem</strong> is present.</p>
            <table>
              <tr><th>obsno</th><th>wage</th><th>educ</th><th>exper</th><th>female</th><th>married</th></tr>
              <tr><td>1</td><td>3.10</td><td>11</td><td>2</td><td>1</td><td>0</td></tr>
              <tr><td>2</td><td>3.24</td><td>12</td><td>22</td><td>1</td><td>1</td></tr>
              <tr><td>526</td><td>3.50</td><td>14</td><td>5</td><td>1</td><td>0</td></tr>
            </table>
            <h3>Pooled Cross-Sections</h3>
            <p>Data from <strong>different individuals</strong> at <strong>various time points</strong>, treated as one cross-section. Provides more observations and enables analysis of changes over time.</p>
            <p><em>Example: household surveys in 1996 and 1998 to evaluate a 1997 health reform.</em></p>
            <h3>Panel Data (Longitudinal)</h3>
            <p>Data of the <strong>same cross-sectional units</strong> (individuals, firms, countries) observed at <strong>multiple time periods</strong>.</p>
            <p>Panel data allows control of so-called <strong>unobserved individual effects</strong> as well as the analysis of lagged effects.</p>
            <p><em>Example: Socio-economic panel (SOEP); investments in relation to firm characteristics in previous periods.</em></p>
            <table>
              <tr><th>obsno</th><th>city</th><th>year</th><th>murders</th><th>population</th><th>unem</th><th>police</th></tr>
              <tr><td>1</td><td>1</td><td>1986</td><td>5</td><td>350000</td><td>8.7</td><td>440</td></tr>
              <tr><td>2</td><td>1</td><td>1990</td><td>8</td><td>359200</td><td>7.2</td><td>471</td></tr>
            </table>
            <h3>Time Series</h3>
            <p>One observation per time period; <strong>chronological order matters</strong>. Observations are typically not independent from each other — strong serial correlation over time (e.g. GDP).</p>
            <p>Notation: $x_t$, $t = 1, \\ldots, T$. Data frequency: daily, weekly, monthly, quarterly, annually.</p>
            <p>Key features: trends, seasonal effects, and heterogeneous distributions over time are often important.</p>
            <hr>
            <h3>Data Categorization by Information Type</h3>
            <ul>
              <li><strong>Cardinal:</strong> numerical meaning with measurable differences (e.g. 25,000€ is 5,000€ more than 20,000€)</li>
              <li><strong>Ordinal:</strong> ordered ranking, no measurable differences (e.g. grades: 1 is better than 2; customer satisfaction)</li>
              <li><strong>Nominal / Qualitative:</strong> values only distinguish categories (e.g. gender dummy: 0 = male, 1 = female)</li>
            </ul>
        `},
        {id: 15, title: "Steps in Econometric Analysis", html: `
            <h2>Steps in Econometric Analysis</h2>
            <p><strong>Objectives:</strong> depiction of reality, prediction, simulation.</p>
            <h3>Four Required Steps</h3>
            <ol>
              <li><strong>Model:</strong> Specify an economic model adequate for empirical use (from theory or ad hoc). Reality is more complex — correlation does not imply causation.</li>
              <li><strong>Data:</strong> Obtain or acquire suitable data; conduct graphical and descriptive analysis.</li>
              <li><strong>Estimation &amp; Testing:</strong> Choose procedures adequate for the data. Check model assumptions.</li>
              <li><strong>Interpretation:</strong> Interpret parameter values, hypothesis tests, forecasts, and simulations.</li>
            </ol>
            <hr>
            <h3>Example: Consumption Function</h3>
            <p>Economic model: $C = f(Y) = \\alpha + \\beta \\cdot Y$</p>
            <p>Econometric model (with stochastic component): $C = \\alpha + \\beta \\cdot Y + u$</p>
            <ul>
              <li>$\\beta$ = marginal propensity to consume</li>
              <li>$\\alpha$ = minimum consumption at $Y = 0$</li>
              <li>$u$ = random variable capturing all unpredictable effects (measurement errors, omitted variables, incorrect functional form)</li>
            </ul>
            <p>Hypothesis test: $\\beta = 1$ vs. $\\beta &lt; 1$</p>
            <hr>
            <h3>Example: Wage &amp; Human Capital</h3>
            <p>Economic model: $wage = f(educ, exper)$</p>
            <p>Econometric model: $wage_i = \\beta_0 + \\beta_1 \\cdot educ_i + \\beta_2 \\cdot exper_i + u_i$</p>
            <ul>
              <li>$\\beta_1$ = return to one additional year of education</li>
              <li>$\\beta_2$ = return to one additional year of experience</li>
              <li>$u_i$ = all unobserved influences for person $i$</li>
            </ul>
            <p>Hypothesis: experience does not matter $\\Leftrightarrow$ $\\beta_2 = 0$</p>
            <hr>
            <h3>The Stochastic Component u</h3>
            <p>The error term captures:</p>
            <ul>
              <li>Unpredictable random effects</li>
              <li>Measurement errors</li>
              <li>Omitted variables (e.g. ability, qualification)</li>
              <li>Incorrect functional form</li>
            </ul>
            <p><em>No simple theory is exactly correct — $u$ acknowledges this uncertainty.</em></p>
        `},
        {id: 24, title: "The Error Term in Regression", html: `
            <h2>The Error Term in Regression</h2>
            <p>In the simple linear regression model $y = \\beta_0 + \\beta_1 x + u$, the error term <strong>$u$</strong> collects all influences on the dependent variable $y$ that are not captured by the explanatory variable $x$.</p>
            <h3>What the Error Term Contains</h3>
            <ul>
              <li><strong>Omitted variables:</strong> factors that affect $y$ but are not included (e.g. ability in a wage equation)</li>
              <li><strong>Measurement errors:</strong> imprecisions in recording $y$ or $x$</li>
              <li><strong>Unpredictable random shocks:</strong> inherently stochastic influences on the outcome</li>
              <li><strong>Incorrect functional form:</strong> if the true relationship is non-linear but a linear model is used</li>
            </ul>
            <p>Because $u$ contains all these unrecorded factors, it is <strong>unobservable</strong>. We can only estimate it via the OLS residuals $\\hat{u}_i = y_i - \\hat{y}_i$, which are the sample counterparts of the population errors.</p>
            <h3>Why the Error Term is Crucial</h3>
            <p>No economic model perfectly describes reality. The error term acknowledges this gap. Without it, every prediction would have to be exact — which is never the case with real-world data.</p>
            <p>The error term is also what makes the model <em>stochastic</em>: $u$ is treated as a random variable, so $y$ is also a random variable conditional on $x$.</p>
            <h3>Population Regression Function</h3>
            <p>Taking conditional expectations: $E(y|x) = \\beta_0 + \\beta_1 x$ (assuming $E(u|x) = 0$).</p>
            <p>This is the <strong>Population Regression Function (PRF)</strong> — the average value of $y$ for a given $x$ in the population.</p>
            <h3>Example: Fertility Model</h3>
            <p>In the model $kids = \\beta_0 + \\beta_1 \\cdot educ + u$, the error term $u$ captures unobserved factors affecting fertility: income, age, family background, religion, and individual preferences — all of which are omitted from this simple specification.</p>
        `},
        {id: 25, title: "Ordinary Least Squares (OLS)", html: `
            <h2>Ordinary Least Squares (OLS)</h2>
            <p>OLS is the standard method for estimating the parameters of a linear regression model. It produces the <strong>Sample Regression Function (SRF)</strong>: $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$.</p>
            <h3>The Objective</h3>
            <p>OLS minimizes the <strong>sum of squared residuals (SSR)</strong>:</p>
            <p>$$SSR = \\sum_i \\hat{u}_i^2 = \\sum_i (y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i)^2$$</p>
            <p>Squaring residuals ensures that positive and negative deviations do not cancel out, and penalizes large errors more than small ones.</p>
            <h3>Deriving the OLS Estimators</h3>
            <p>Taking partial derivatives of SSR with respect to $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ and setting them to zero (First Order Conditions) yields:</p>
            <p><strong>OLS slope estimator:</strong></p>
            <p>$$\\hat{\\beta}_1 = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$$</p>
            <p>This can also be written as: $\\hat{\\beta}_1 = \\frac{\\widehat{Cov}(x, y)}{\\widehat{Var}(x)}$</p>
            <p><strong>OLS intercept estimator:</strong></p>
            <p>$$\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$</p>
            <h3>Key Algebraic Properties</h3>
            <ul>
              <li>The OLS regression line always passes through the sample means $(\\bar{x}, \\bar{y})$</li>
              <li>The sum of residuals is always zero: $\\sum \\hat{u}_i = 0$</li>
              <li>Residuals are uncorrelated with $x$ by construction: $\\widehat{Cov}(x, \\hat{u}) = 0$</li>
              <li>Residuals are uncorrelated with fitted values: $\\widehat{Cov}(\\hat{y}, \\hat{u}) = 0$</li>
            </ul>
            <h3>Residuals vs. Population Errors</h3>
            <p>The population error $u_i = y_i - \\beta_0 - \\beta_1 x_i$ is unobservable. The OLS residual $\\hat{u}_i = y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i$ is its observable sample counterpart.</p>
            <h3>The Method of Moments Connection</h3>
            <p>OLS can also be derived via the <strong>Method of Moments</strong>: the population assumptions $E(u) = 0$ and $Cov(x, u) = 0$ are replaced by their sample analogues, yielding the same estimator formulas.</p>
        `},
        {id: 26, title: "Zero Conditional Mean Assumption", html: `
            <h2>Zero Conditional Mean Assumption</h2>
            <p>The assumption $E(u|x) = 0$ is the most critical assumption for unbiasedness of OLS. It states that, for any value of $x$, the average value of the unobserved error term is zero.</p>
            <h3>Interpretation</h3>
            <p>This means the unobservable factors captured in $u$ are <strong>not systematically related to $x$</strong> — on average, knowing $x$ gives us no information about $u$. Formally:</p>
            <p>$$E(u|x) = 0 \\text{ for all values of } x$$</p>
            <p>This is sometimes called <strong>mean independence</strong> of $u$ from $x$.</p>
            <h3>Consequences of the Assumption</h3>
            <ul>
              <li>It implies $E(u) = 0$ (unconditionally)</li>
              <li>It implies $Cov(x, u) = 0$ (zero covariance between $x$ and $u$), via the Law of Iterated Expectations</li>
              <li>It allows us to write the <strong>Population Regression Function</strong>: $E(y|x) = \\beta_0 + \\beta_1 x$</li>
            </ul>
            <h3>When is it Violated?</h3>
            <p>The assumption fails when an omitted variable is correlated with $x$. For example, in a wage regression $wage = \\beta_0 + \\beta_1 \\cdot educ + u$, if unobserved ability is in $u$ and is correlated with education, then $E(u|educ) \\neq 0$ and OLS is biased.</p>
            <h3>Important Distinction</h3>
            <p>$Cov(x, u) = 0$ does <strong>not</strong> imply $E(u|x) = 0$. Zero covariance rules out only linear dependence. The zero conditional mean assumption is stronger — it rules out any systematic relationship between $u$ and $x$.</p>
            <h3>Homoskedasticity</h3>
            <p>A related assumption is <strong>homoskedasticity</strong>: $Var(u|x) = \\sigma^2$ (constant for all $x$). Together with zero conditional mean, this gives the full classical OLS framework. If variance is not constant, the model is <strong>heteroskedastic</strong>.</p>
        `},
        {id: 27, title: "Functional Forms: Log Models", html: `
            <h2>Functional Forms: Log Models</h2>
            <p>Taking logarithms of variables changes the interpretation of regression coefficients and can better capture economic relationships where effects are proportional rather than additive.</p>
            <h3>Level-Level Model</h3>
            <p>$$y = \\beta_0 + \\beta_1 x + u$$</p>
            <p>Interpretation: a one-unit increase in $x$ changes $y$ by $\\beta_1$ units (constant absolute effect).</p>
            <h3>Log-Level Model (Semi-Log)</h3>
            <p>$$\\log(y) = \\beta_0 + \\beta_1 x + u$$</p>
            <p>Interpretation: a one-unit increase in $x$ changes $y$ by approximately $100 \\cdot \\beta_1\%$ (constant percentage effect on $y$).</p>
            <p>The elasticity of $y$ with respect to $x$ depends on the level of $x$: $\\varepsilon = \\beta_1 \\cdot x$.</p>
            <p><em>Example: wage equations often use $\\log(wage)$ because each additional year of education raises wages by a roughly constant percentage.</em></p>
            <h3>Log-Log Model (Constant Elasticity)</h3>
            <p>$$\\log(y) = \\beta_0 + \\beta_1 \\cdot \\log(x) + u$$</p>
            <p>Interpretation: $\\beta_1$ is the <strong>elasticity</strong> of $y$ with respect to $x$ — a 1% increase in $x$ leads to a $\\beta_1\%$ increase in $y$ (constant percentage effect).</p>
            <p><em>Example: a distance-price elasticity of 0.312 means a 10% increase in distance from an incinerator raises house prices by about 3.12%.</em></p>
            <h3>Level-Log Model</h3>
            <p>$$y = \\beta_0 + \\beta_1 \\cdot \\log(x) + u$$</p>
            <p>Interpretation: a 1% increase in $x$ changes $y$ by approximately $\\beta_1/100$ units.</p>
            <hr>
            <h3>Summary Table</h3>
            <table>
              <tr><th>Model</th><th>Dependent</th><th>Independent</th><th>Interpretation of $\\beta_1$</th></tr>
              <tr><td>Level-Level</td><td>$y$</td><td>$x$</td><td>$\\Delta y = \\beta_1 \\cdot \\Delta x$</td></tr>
              <tr><td>Log-Level</td><td>$\\log(y)$</td><td>$x$</td><td>$\%\\Delta y \\approx 100 \\cdot \\beta_1 \\cdot \\Delta x$</td></tr>
              <tr><td>Log-Log</td><td>$\\log(y)$</td><td>$\\log(x)$</td><td>$\%\\Delta y = \\beta_1 \\cdot \%\\Delta x$ (elasticity)</td></tr>
              <tr><td>Level-Log</td><td>$y$</td><td>$\\log(x)$</td><td>$\\Delta y = (\\beta_1/100) \\cdot \%\\Delta x$</td></tr>
            </table>
            <h3>Non-linear Models: Quadratic Terms</h3>
            <p>A quadratic specification $y = \\alpha_0 + \\alpha_1 x^2 + u$ allows the marginal effect to vary with $x$: $\\frac{d\\hat{y}}{dx} = 2\\hat{\\alpha}_1 x$. This captures diminishing or increasing returns.</p>
        `},
        {id: 28, title: "Algebraic Properties of OLS", html: `
            <h2>Algebraic Properties of OLS</h2>
            <p>These properties hold by construction in any OLS estimation — they are consequences of the minimization of the sum of squared residuals, not additional assumptions.</p>
            <h3>Property 1: Residuals Sum to Zero</h3>
            <p>$$\\sum_i \\hat{u}_i = 0$$</p>
            <p>This follows from the first-order condition for the intercept $\\hat{\\beta}_0$. It means the sample average of the residuals is always zero: $\\bar{\\hat{u}} = 0$.</p>
            <h3>Property 2: Regression Line Through the Means</h3>
            <p>The OLS line always passes through $(\\bar{x}, \\bar{y})$. The intercept formula $\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$ guarantees this.</p>
            <h3>Property 3: Residuals Uncorrelated with x</h3>
            <p>$\\sum_i x_i \\hat{u}_i = 0$, or equivalently $\\widehat{Cov}(x, \\hat{u}) = 0$.</p>
            <p>This follows from the first-order condition for the slope $\\hat{\\beta}_1$.</p>
            <h3>Property 4: Residuals Uncorrelated with Fitted Values</h3>
            <p>$\\sum_i \\hat{y}_i \\hat{u}_i = 0$, or equivalently $\\widehat{Cov}(\\hat{y}, \\hat{u}) = 0$.</p>
            <h3>Variance Decomposition</h3>
            <p>A key identity following from these properties is:</p>
            <p>$$SST = SSE + SSR$$</p>
            <ul>
              <li>$SST = \\sum(y_i - \\bar{y})^2$ — Total Sum of Squares (total variation in $y$)</li>
              <li>$SSE = \\sum(\\hat{y}_i - \\bar{y})^2$ — Explained Sum of Squares (variation explained by $x$)</li>
              <li>$SSR = \\sum \\hat{u}_i^2$ — Residual Sum of Squares (unexplained variation)</li>
            </ul>
            <h3>Regression on a Constant Only</h3>
            <p>If no explanatory variable $x$ is included (only an intercept), the OLS estimate of the intercept is the sample mean $\\bar{y}$. This is because the sample mean minimizes the sum of squared deviations.</p>
        `},
        {id: 29, title: "Goodness of Fit: R²", html: `
            <h2>Goodness of Fit: $R^2$</h2>
            <p>The <strong>coefficient of determination $R^2$</strong> measures how well the regression model explains the variation in the dependent variable.</p>
            <h3>Definition</h3>
            <p>$$R^2 = \\frac{SSE}{SST} = 1 - \\frac{SSR}{SST}$$</p>
            <p>where:</p>
            <ul>
              <li>$SST = \\sum(y_i - \\bar{y})^2$ = total variation in $y$</li>
              <li>$SSE = \\sum(\\hat{y}_i - \\bar{y})^2$ = explained variation</li>
              <li>$SSR = \\sum \\hat{u}_i^2$ = unexplained variation</li>
            </ul>
            <h3>Interpretation</h3>
            <ul>
              <li>$R^2 = 0$: $x$ explains none of the variation in $y$; the regression line is flat at $\\bar{y}$</li>
              <li>$R^2 = 1$: all data points lie exactly on the regression line; perfect fit</li>
              <li>$0 &lt; R^2 &lt; 1$: $x$ explains a fraction $R^2$ of the total variation in $y$</li>
            </ul>
            <p>$R^2$ cannot be negative in OLS with an intercept.</p>
            <h3>Connection to Correlation</h3>
            <p>In simple linear regression, $R^2$ equals the <strong>square of the sample correlation coefficient</strong> between $y$ and $\\hat{y}$ (or equivalently between $y$ and $x$). So $R^2 = r^2_{xy}$.</p>
            <h3>Limitations of $R^2$</h3>
            <ul>
              <li>A high $R^2$ does not mean the model is correctly specified or that causal inference is valid</li>
              <li>$R^2$ cannot decrease when more regressors are added (even irrelevant ones), which is why adjusted $R^2$ is used in multiple regression</li>
              <li>A low $R^2$ is not necessarily bad — in many economic applications, $R^2$ of 0.3 or less is common because human behavior has many unpredictable components</li>
            </ul>
            <h3>Example</h3>
            <p>If a wage regression on education has $R^2 = 0.19$, then education explains 19% of the variation in wages in the sample. The remaining 81% is attributable to other factors (experience, ability, occupation, etc.).</p>
        `},
        {id: 30, title: "OLS Assumptions (SLR.1–SLR.4) & Unbiasedness", html: `
            <h2>OLS Assumptions (SLR.1–SLR.4) and Unbiasedness</h2>
            <p>For OLS to be an <strong>unbiased</strong> estimator of the true population parameters, four assumptions must hold:</p>
            <h3>SLR.1 — Linear in Parameters</h3>
            <p>The population model is: $y = \\beta_0 + \\beta_1 x + u$</p>
            <p>The model must be linear in the <em>parameters</em> $\\beta_0$ and $\\beta_1$ (not necessarily linear in variables — log transformations are permitted).</p>
            <h3>SLR.2 — Random Sampling</h3>
            <p>The sample $\{(x_i, y_i): i = 1, \\ldots, n\}$ is a random sample from the population. Each observation is an independent draw following the population model.</p>
            <h3>SLR.3 — Sample Variation in x</h3>
            <p>The sample values of $x$ are not all identical: $\\sum(x_i - \\bar{x})^2 > 0$.</p>
            <p>If all $x_i$ are the same, the denominator of the slope formula is zero and $\\hat{\\beta}_1$ cannot be computed — there is no information about how $y$ changes with $x$.</p>
            <h3>SLR.4 — Zero Conditional Mean</h3>
            <p>$$E(u|x) = 0$$</p>
            <p>The error term has zero conditional mean for any value of $x$. This is the key assumption ensuring that the OLS estimator targets the correct population parameter.</p>
            <hr>
            <h3>Unbiasedness of OLS</h3>
            <p>Under SLR.1–SLR.4, the OLS estimators are <strong>unbiased</strong>:</p>
            <p>$$E(\\hat{\\beta}_0) = \\beta_0 \\quad \\text{and} \\quad E(\\hat{\\beta}_1) = \\beta_1$$</p>
            <p>This means that, on average across all possible random samples, the OLS estimator hits the true population parameter — even though any single sample estimate may differ from the truth.</p>
            <p>Note: the fifth assumption SLR.5 (homoskedasticity) is additionally needed for the Gauss-Markov theorem (efficiency of OLS), but <em>not</em> for unbiasedness.</p>
        `},
        {id: 31, title: "Sample Variation in x (SLR.3)", html: `
            <h2>Sample Variation in $x$ (SLR.3)</h2>
            <p>Assumption SLR.3 requires that not all sample values of the explanatory variable are identical.</p>
            <h3>Why it is Needed</h3>
            <p>The OLS slope estimator is:</p>
            <p>$$\\hat{\\beta}_1 = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$$</p>
            <p>If all $x_i$ are equal to the same value, then $x_i - \\bar{x} = 0$ for every observation, so the denominator $\\sum(x_i - \\bar{x})^2 = 0$. Division by zero makes the slope estimator undefined.</p>
            <h3>Economic Intuition</h3>
            <p>If every person in the sample has the same level of education, we cannot learn anything about how wages vary with education. We need variation in the explanatory variable to identify its effect on the dependent variable.</p>
            <h3>In Practice</h3>
            <p>This assumption is almost always satisfied in real economic data sets. However, it can be problematic in designed experiments where treatment is not varied, or in data sets where a variable has been incorrectly recorded as constant.</p>
            <h3>Connection to Multicollinearity</h3>
            <p>In multiple regression, an analogous problem arises when two or more explanatory variables are perfectly correlated (perfect multicollinearity). In that case, the OLS estimators also cannot be computed uniquely.</p>
        `},
        {id: 32, title: "Dummy Variable Regression", html: `
            <h2>Dummy Variable Regression</h2>
            <p>A <strong>dummy variable</strong> (also called a binary or indicator variable) takes only the values 0 or 1, representing membership in a category (e.g. female = 1, male = 0).</p>
            <h3>OLS with a Dummy Regressor</h3>
            <p>When $x$ is a binary variable, the OLS slope estimator simplifies to a particularly intuitive formula:</p>
            <p>$$\\hat{\\beta}_1 = \\bar{y}_1 - \\bar{y}_0$$</p>
            <p>where $\\bar{y}_1$ is the sample mean of $y$ for observations with $x = 1$, and $\\bar{y}_0$ is the sample mean for $x = 0$.</p>
            <h3>Interpretation</h3>
            <p>The estimated slope is simply the <strong>difference in mean outcomes</strong> between the two groups. The intercept $\\hat{\\beta}_0$ equals $\\bar{y}_0$, the mean outcome for the base group ($x = 0$).</p>
            <p><em>Example: regressing wage on a female dummy gives $\\hat{\\beta}_1$ = average female wage $-$ average male wage.</em></p>
            <h3>Caution</h3>
            <p>This difference in means is not a causal estimate unless $E(u|x) = 0$ — i.e. unless the two groups are comparable in all unobserved respects. In observational data, men and women may differ in education, experience, and occupation, so the dummy regression captures more than just a gender effect.</p>
            <h3>Multiple Dummies</h3>
            <p>For a categorical variable with $k$ categories, use $k - 1$ dummy variables (the omitted category is the base group). Including all $k$ dummies would cause perfect multicollinearity (the dummy trap).</p>
        `},
        {id: 33, title: "Units of Measurement & Rescaling", html: `
            <h2>Units of Measurement and Rescaling</h2>
            <p>Changing the units in which variables are measured does not affect the underlying economic relationship, but it does change the numerical values of the OLS estimates in predictable ways.</p>
            <h3>Rescaling the Dependent Variable $y$</h3>
            <p>If $y$ is multiplied by a constant $c$ (e.g. converting wages from dollars to cents, $c = 100$), then both $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$ are multiplied by $c$. The fitted values and residuals are also multiplied by $c$. $R^2$ is unchanged.</p>
            <h3>Rescaling the Independent Variable $x$</h3>
            <p>If $x$ is multiplied by a constant $c$ (e.g. converting education from years to months, $c = 12$), then $\\hat{\\beta}_1$ is <strong>divided</strong> by $c$. The intercept $\\hat{\\beta}_0$ is unchanged. $R^2$ is unchanged.</p>
            <p>Intuition: the total predicted effect $\\hat{\\beta}_1 \\cdot \\Delta x$ must remain the same. If $x$ is measured in larger units (bigger $c$), each unit of $x$ represents more, so $\\hat{\\beta}_1$ must be smaller to keep the product constant.</p>
            <h3>General Rule</h3>
            <table>
              <tr><th>Change</th><th>Effect on $\\hat{\\beta}_0$</th><th>Effect on $\\hat{\\beta}_1$</th><th>Effect on $R^2$</th></tr>
              <tr><td>$y \\to c \\cdot y$</td><td>$\\times c$</td><td>$\\times c$</td><td>unchanged</td></tr>
              <tr><td>$x \\to c \\cdot x$</td><td>unchanged</td><td>$\\div c$</td><td>unchanged</td></tr>
            </table>
            <h3>Practical Implication</h3>
            <p>Always report the units of measurement alongside regression coefficients. A slope of 0.5 means something completely different depending on whether $y$ is in dollars or thousands of dollars.</p>
        `},
        {id: 34, title: "Variance of the OLS Estimator", html: `
            <h2>Variance of the OLS Estimator</h2>
            <p>Under the assumptions SLR.1–SLR.5 (including homoskedasticity), the variance of the OLS slope estimator is:</p>
            <p>$$Var(\\hat{\\beta}_1) = \\frac{\\sigma^2}{\\sum(x_i - \\bar{x})^2}$$</p>
            <p>and the variance of the intercept estimator is:</p>
            <p>$$Var(\\hat{\\beta}_0) = \\frac{\\sigma^2 \\cdot \\left(\\sum x_i^2 / n\\right)}{\\sum(x_i - \\bar{x})^2}$$</p>
            <h3>Three Key Factors</h3>
            <ul>
              <li><strong>Error variance $\\sigma^2$:</strong> more noise in the data $\\to$ larger variance of $\\hat{\\beta}_1$. This is outside the researcher's control.</li>
              <li><strong>Sample variation in $x$:</strong> $\\sum(x_i - \\bar{x})^2$ in the denominator — more variation in $x$ $\\to$ smaller variance $\\to$ more precise estimates.</li>
              <li><strong>Sample size $n$:</strong> larger $n$ increases $\\sum(x_i - \\bar{x})^2$, so $\\hat{\\beta}_1$ becomes more precise as $n$ grows.</li>
            </ul>
            <h3>Standard Error of the Regression (SER)</h3>
            <p>The error variance $\\sigma^2$ is unknown and must be estimated. The unbiased estimator is:</p>
            <p>$$\\hat{\\sigma}^2 = \\frac{SSR}{n - 2}$$</p>
            <p>The denominator is $n - 2$ (not $n$) because two degrees of freedom are used to estimate $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$. The SER is $\\hat{\\sigma} = \\sqrt{\\hat{\\sigma}^2}$.</p>
            <h3>Standard Errors of the Estimates</h3>
            <p>The standard error of $\\hat{\\beta}_1$ is: $se(\\hat{\\beta}_1) = \\frac{\\hat{\\sigma}}{\\sqrt{\\sum(x_i - \\bar{x})^2}}$</p>
            <p>Standard errors measure the <strong>precision</strong> of the OLS estimates. They are essential for hypothesis testing and confidence intervals.</p>
        `},
        {id: 35, title: "Omitted Variable Bias", html: `
            <h2>Omitted Variable Bias</h2>
            <p>Omitted variable bias (OVB) occurs when a variable that belongs in the true population model is excluded from the estimated regression, and that omitted variable is <strong>correlated with an included explanatory variable</strong>.</p>
            <h3>When Does Bias Arise?</h3>
            <p>Two conditions must both hold for OVB:</p>
            <ol>
              <li>The omitted variable affects the dependent variable $y$</li>
              <li>The omitted variable is correlated with the included explanatory variable $x$</li>
            </ol>
            <p>If either condition fails, OLS remains unbiased even without the omitted variable.</p>
            <h3>Direction of the Bias</h3>
            <p>If the omitted variable is positively correlated with $x$ and positively affects $y$, then the OLS slope estimate for $x$ will be <strong>upward biased</strong> (too large). The bias is reversed if the signs differ.</p>
            <p><em>Example: Regressing wages on education while omitting ability. Ability is positively correlated with education (smarter people get more education) and positively affects wages. So the estimated return to education is upward biased — it captures some of the ability premium.</em></p>
            <h3>Violation of SLR.4</h3>
            <p>OVB is a violation of the zero conditional mean assumption: $E(u|x) \\neq 0$. The omitted variable is in $u$, and since it correlates with $x$, $u$ is not mean-independent of $x$.</p>
            <h3>Consequences</h3>
            <ul>
              <li>The OLS estimator is biased: $E(\\hat{\\beta}_1) \\neq \\beta_1$</li>
              <li>More data does not fix the problem — the bias persists even with very large samples</li>
              <li>The solution requires either including the omitted variable, using an instrumental variable, or a natural experiment</li>
            </ul>
        `},
        {id: 36, title: "Average Treatment Effect (ATE)", html: `
            <h2>Average Treatment Effect (ATE)</h2>
            <p>The <strong>potential outcomes framework</strong> provides a formal way to define causal effects. Each unit $i$ has two potential outcomes:</p>
            <ul>
              <li>$y(1)$: the outcome if unit $i$ receives treatment</li>
              <li>$y(0)$: the outcome if unit $i$ does not receive treatment</li>
            </ul>
            <p>The <strong>individual treatment effect</strong> is $y(1) - y(0)$, but this is never observed — we only ever see one of the two potential outcomes for any given unit (the fundamental problem of causal inference).</p>
            <h3>Average Treatment Effect</h3>
            <p>$$ATE = E[y(1) - y(0)] = E[y(1)] - E[y(0)]$$</p>
            <p>This is the average causal effect of the treatment across the entire population.</p>
            <h3>When is the ATE Identified?</h3>
            <p>Under <strong>random assignment</strong> of treatment (e.g. in a randomized controlled trial), treatment status is independent of potential outcomes: $(y(0), y(1)) \\perp x$. In that case:</p>
            <p>$$ATE = E(y|x=1) - E(y|x=0) = \\hat{\\beta}_1$$</p>
            <p>from a simple regression of $y$ on $x$.</p>
            <p>With random assignment, the OLS slope in a binary dummy regression recovers the ATE without bias.</p>
            <h3>In Observational Data</h3>
            <p>When treatment is not randomly assigned (e.g. people self-select into education), the simple difference in means confounds the treatment effect with selection bias. Econometric methods (IV, panel data, difference-in-differences, regression discontinuity) attempt to recover causal effects from non-experimental data.</p>
        `},
        {id: 37, title: "OLS: Regression Through the Means", html: `
            <h2>OLS: Regression Through the Means</h2>
            <p>One of the most important algebraic properties of OLS is that the estimated regression line always passes through the point of sample means $(\\bar{x}, \\bar{y})$.</p>
            <h3>Why This is True</h3>
            <p>The OLS intercept is defined as: $\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$</p>
            <p>Substituting into the regression equation: $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x = \\bar{y} - \\hat{\\beta}_1 \\bar{x} + \\hat{\\beta}_1 x = \\bar{y} + \\hat{\\beta}_1(x - \\bar{x})$</p>
            <p>At $x = \\bar{x}$: $\\hat{y} = \\bar{y}$. So the point $(\\bar{x}, \\bar{y})$ is always on the fitted line.</p>
            <h3>First-Order Condition</h3>
            <p>This property follows directly from the first-order condition for minimizing SSR with respect to $\\hat{\\beta}_0$:</p>
            <p>$$\\frac{\\partial SSR}{\\partial \\hat{\\beta}_0} = 0 \\implies \\sum \\hat{u}_i = 0 \\implies \\bar{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 \\bar{x}$$</p>
            <h3>Practical Significance</h3>
            <p>This property guarantees that the OLS regression line is anchored at the center of the data. It also means the intercept $\\hat{\\beta}_0$ is not independently chosen — it is determined once $\\hat{\\beta}_1$ and the sample means are known.</p>
        `},
        {id: 38, title: "Probability: Variance and Covariance", html: `
            <h2>Probability: Variance and Covariance</h2>
            <p>Variance and covariance are the core building blocks of the statistical theory underlying econometrics.</p>
            <h3>Variance</h3>
            <p>For a random variable $X$: $Var(X) = E[(X - E(X))^2] = E(X^2) - [E(X)]^2$</p>
            <p>The standard deviation is $sd(X) = \\sqrt{Var(X)}$.</p>
            <h3>Properties of Variance</h3>
            <ul>
              <li>$Var(a + bX) = b^2 \\cdot Var(X)$ — adding a constant has no effect; scaling by $b$ squares the effect on variance</li>
              <li>$Var(X + Y) = Var(X) + Var(Y) + 2 \\cdot Cov(X, Y)$ — variance of a sum</li>
              <li>If $X$ and $Y$ are independent: $Var(X + Y) = Var(X) + Var(Y)$</li>
            </ul>
            <h3>Covariance</h3>
            <p>$$Cov(X, Y) = E[(X - E(X))(Y - E(Y))] = E(XY) - E(X) \\cdot E(Y)$$</p>
            <p>Covariance measures the direction of linear association:</p>
            <ul>
              <li>Positive: $X$ and $Y$ tend to move together</li>
              <li>Negative: $X$ and $Y$ tend to move in opposite directions</li>
              <li>Zero: no linear association (but not necessarily independent)</li>
            </ul>
            <h3>Properties of Covariance</h3>
            <ul>
              <li>$Cov(a + bX, c + dY) = bd \\cdot Cov(X, Y)$</li>
              <li>$Cov(X, X) = Var(X)$</li>
            </ul>
            <h3>Normal Distribution</h3>
            <p>If $X \\sim N(\\mu, \\sigma^2)$, then a linear transformation $Y = a + bX$ is also normal: $Y \\sim N(a + b\\mu,\ b^2\\sigma^2)$. This closure property is important for deriving the distributions of OLS estimators.</p>
        `},
        {id: 39, title: "Mean Independence", html: `
            <h2>Mean Independence</h2>
            <p><strong>Mean independence</strong> of $u$ from $x$ means: $E(u|x) = E(u)$</p>
            <p>The conditional mean of $u$ does not depend on the value of $x$ — knowing $x$ tells us nothing about the average value of $u$.</p>
            <h3>Relationship to Zero Conditional Mean</h3>
            <p>The OLS assumption SLR.4 requires the stronger condition $E(u|x) = 0$. Since we typically also assume $E(u) = 0$ (which can always be arranged by including an intercept), $E(u|x) = E(u) = 0$ is equivalent to mean independence when the unconditional mean is zero.</p>
            <h3>Implication: Zero Covariance</h3>
            <p>Mean independence implies: $Cov(x, u) = E(xu) - E(x) \\cdot E(u) = 0$</p>
            <p>This follows from the Law of Iterated Expectations: $E(xu) = E[x \\cdot E(u|x)] = E[x \\cdot E(u)] = E(x) \\cdot E(u)$.</p>
            <h3>Mean Independence vs. Full Independence</h3>
            <ul>
              <li><strong>Full independence:</strong> $u$ and $x$ share no statistical relationship whatsoever</li>
              <li><strong>Mean independence:</strong> only the conditional <em>mean</em> of $u$ is unrelated to $x$ (higher moments like variance could still depend on $x$)</li>
              <li><strong>Zero covariance:</strong> only the <em>linear</em> relationship between $u$ and $x$ is zero (weakest condition)</li>
            </ul>
            <p>For unbiasedness of OLS, mean independence is the required condition. Homoskedasticity additionally requires that $Var(u|x) = \\sigma^2$ — that the variance does not depend on $x$ either.</p>
        `},
        {id: 40, title: "Regression Through the Origin", html: `
            <h2>Regression Through the Origin</h2>
            <p>Regression through the origin forces the fitted line to pass through the point $(0, 0)$ by suppressing the intercept:</p>
            <p>$$y = \\beta_1 x + u$$</p>
            <p>The OLS slope estimator in this restricted model is:</p>
            <p>$$\\tilde{\\beta}_1 = \\frac{\\sum x_i y_i}{\\sum x_i^2}$$</p>
            <h3>When to Use it</h3>
            <p>This model is appropriate only when economic theory strongly predicts that $E(y|x=0) = 0$. For example, a firm with zero employees should produce zero output.</p>
            <h3>Why It Is Rarely Used</h3>
            <p>If the true population intercept $\\beta_0$ is not zero, suppressing it causes the slope estimator to be <strong>biased</strong>. In practice, it is very hard to justify $\\beta_0 = 0$ with certainty, so most applied work includes an intercept as a safety measure.</p>
            <h3>Different Algebraic Properties</h3>
            <p>Without an intercept, the standard algebraic properties of OLS no longer hold:</p>
            <ul>
              <li>The residuals do not necessarily sum to zero: $\\sum \\hat{u}_i \\neq 0$</li>
              <li>The regression line does not necessarily pass through $(\\bar{x}, \\bar{y})$</li>
              <li>The standard $R^2$ formula can give misleading values (or even be negative)</li>
            </ul>
        `},
        {id: 41, title: "Log-Log Model: Constant Elasticity", html: `
            <h2>Log-Log Model: Constant Elasticity</h2>
            <p>The log-log model specifies both the dependent and explanatory variables in natural logarithms:</p>
            <p>$$\\log(y) = \\beta_0 + \\beta_1 \\cdot \\log(x) + u$$</p>
            <h3>Interpretation of $\\beta_1$</h3>
            <p>The slope coefficient $\\beta_1$ is the <strong>elasticity</strong> of $y$ with respect to $x$: a 1% increase in $x$ leads to a $\\beta_1\%$ change in $y$, regardless of the level of $x$. This is the defining feature of a constant elasticity model.</p>
            <h3>Why Use Logs?</h3>
            <ul>
              <li>Many economic relationships are proportional rather than additive — e.g. a 1% increase in advertising budget raises sales by a constant percentage</li>
              <li>Log transformation can reduce the impact of outliers and skewness</li>
              <li>Coefficients have a natural percentage-change interpretation</li>
            </ul>
            <h3>Example</h3>
            <p>In a house price regression: $\\log(price) = \\beta_0 + 0.312 \\cdot \\log(dist) + u$</p>
            <p>A 10% increase in distance from the incinerator raises house prices by about 3.12%.</p>
            <h3>Comparison with Other Log Models</h3>
            <p>In a <strong>log-level</strong> (semi-log) model, $\\beta_1$ is a semi-elasticity (the effect of a one-unit change in $x$ on the percentage change in $y$). In a <strong>level-log</strong> model, a percentage change in $x$ has a constant absolute effect on $y$. The log-log model is the only one where $\\beta_1$ is a pure elasticity.</p>
        `},
        {id: 42, title: "Method of Moments", html: `
            <h2>Method of Moments</h2>
            <p>The <strong>Method of Moments</strong> is a general principle for constructing estimators by replacing population moments with their sample counterparts.</p>
            <h3>General Idea</h3>
            <p>If we know that a population parameter satisfies some moment condition — e.g. $E[g(X, \\theta)] = 0$ — we estimate $\\theta$ by solving the sample analogue: $\\frac{1}{n} \\sum g(x_i, \\hat{\\theta}) = 0$.</p>
            <h3>Application to OLS</h3>
            <p>The OLS assumptions imply two population moment conditions:</p>
            <ol>
              <li>$E(u) = 0$ $\\to$ Sample analogue: $\\sum \\hat{u}_i = 0$</li>
              <li>$E(xu) = 0$ $\\to$ Sample analogue: $\\sum x_i \\hat{u}_i = 0$</li>
            </ol>
            <p>Substituting $\\hat{u}_i = y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 x_i$ and solving these two equations yields exactly the OLS estimators $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$. This shows OLS is a special case of the Method of Moments.</p>
            <h3>Example: Pareto Distribution</h3>
            <p>For the PDF $f(x) = a \\cdot x^{-a-1}$ ($x \\geq 1$), the population mean is $E(X) = \\frac{a}{a-1}$. Setting the sample mean equal: $\\bar{x} = \\frac{\\hat{a}}{\\hat{a}-1}$ and solving gives the MM estimator $\\hat{a}_{MM} = \\frac{\\bar{x}}{\\bar{x}-1}$.</p>
            <h3>Advantages</h3>
            <ul>
              <li>Does not require a full distributional assumption — only moment conditions</li>
              <li>Conceptually transparent: match sample moments to population moments</li>
              <li>Generalizes to GMM (Generalized Method of Moments) for more complex models</li>
            </ul>
        `},
        {id: 43, title: "Standard Errors and Precision", html: `
            <h2>Standard Errors and Precision</h2>
            <p>A <strong>standard error</strong> is the estimated standard deviation of an estimator's sampling distribution. It quantifies how much the estimate would vary across different random samples from the same population.</p>
            <h3>Standard Error of the OLS Slope</h3>
            <p>$$se(\\hat{\\beta}_1) = \\frac{\\hat{\\sigma}}{\\sqrt{\\sum(x_i - \\bar{x})^2}}$$</p>
            <p>where $\\hat{\\sigma} = \\sqrt{SSR/(n-2)}$ is the Standard Error of the Regression (SER).</p>
            <h3>What Determines Precision?</h3>
            <ul>
              <li><strong>Larger $n$:</strong> more observations $\\to$ smaller $se(\\hat{\\beta}_1)$ $\\to$ more precise estimates</li>
              <li><strong>More variation in $x$:</strong> larger $\\sum(x_i - \\bar{x})^2$ $\\to$ smaller $se(\\hat{\\beta}_1)$</li>
              <li><strong>Smaller error variance $\\sigma^2$:</strong> less noise in the data $\\to$ smaller $se(\\hat{\\beta}_1)$</li>
            </ul>
            <h3>Standard Error of the Regression (SER)</h3>
            <p>The SER is: $\\hat{\\sigma} = \\sqrt{SSR/(n-2)}$</p>
            <p>It estimates the standard deviation of the population error term $\\sigma$. A smaller SER indicates the model's predicted values are on average closer to the observed outcomes.</p>
            <h3>Role in Inference</h3>
            <p>Standard errors are essential for:</p>
            <ul>
              <li><strong>Hypothesis testing:</strong> $t$-statistic $= \\hat{\\beta}_1 / se(\\hat{\\beta}_1)$</li>
              <li><strong>Confidence intervals:</strong> $\\hat{\\beta}_1 \\pm$ critical value $\\times\ se(\\hat{\\beta}_1)$</li>
              <li><strong>Assessing practical significance</strong> of estimated coefficients</li>
            </ul>
            <p>Standard errors are always reported alongside coefficient estimates in regression output tables.</p>
        `},
        {id: 44, title: "Random Sampling (SLR.2)", html: `
            <h2>Random Sampling (SLR.2)</h2>
            <p>Assumption SLR.2 requires that the sample $\{(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)\}$ is drawn as a <strong>random sample</strong> from the population.</p>
            <h3>What Random Sampling Means</h3>
            <p>Each observation $(x_i, y_i)$ is an independent draw from the same population distribution. Observations do not depend on each other — conditional on $x$, the $y_i$ are independent across $i$.</p>
            <h3>Why Order Does Not Matter in Cross-Sections</h3>
            <p>Because observations are independent random draws, the order in which they appear in the data set carries no statistical information. Rearranging observations does not change any OLS estimates or standard errors.</p>
            <p>This is in sharp contrast to time series data, where the ordering is essential because observations are typically correlated over time.</p>
            <h3>When is Random Sampling Violated?</h3>
            <ul>
              <li><strong>Sample selection bias:</strong> units with certain characteristics are more likely to be included (e.g. only employed workers in a wage study)</li>
              <li><strong>Cluster sampling:</strong> students within the same school are not independent</li>
              <li><strong>Stratified sampling:</strong> deliberate overrepresentation of certain groups</li>
            </ul>
            <p>Departures from random sampling require adjusted inference methods. In particular, sample selection on the basis of the dependent variable $y$ can cause severe bias even with large samples.</p>
        `},
        {id: 45, title: "Covariance and Correlation", html: `
            <h2>Covariance and Correlation</h2>
            <h3>Covariance</h3>
            <p>The covariance between two random variables $X$ and $Y$ measures the direction of their linear association:</p>
            <p>$$Cov(X, Y) = E[(X - E(X))(Y - E(Y))] = E(XY) - E(X) \\cdot E(Y)$$</p>
            <ul>
              <li>Positive covariance: $X$ and $Y$ tend to move together</li>
              <li>Negative covariance: $X$ and $Y$ tend to move in opposite directions</li>
              <li>Zero covariance: no <em>linear</em> relationship (not necessarily independent)</li>
            </ul>
            <h3>Correlation</h3>
            <p>The correlation coefficient standardizes covariance to lie between $-1$ and $+1$:</p>
            <p>$$Corr(X, Y) = \\frac{Cov(X, Y)}{sd(X) \\cdot sd(Y)}$$</p>
            <ul>
              <li>$+1$: perfect positive linear relationship</li>
              <li>$-1$: perfect negative linear relationship</li>
              <li>$0$: no linear relationship</li>
            </ul>
            <h3>Limitations of Correlation</h3>
            <p>Correlation (and covariance) measure only <strong>linear</strong> relationships. Two variables can be strongly non-linearly related yet have zero correlation. Moreover, correlation does not imply causation — a high correlation may be due to a common third cause.</p>
            <h3>Independence vs. Zero Covariance</h3>
            <p>If $X$ and $Y$ are statistically independent, their covariance is zero. But zero covariance does not imply independence — for example, $X$ and $X^2$ have zero covariance when $X$ is symmetric around zero, yet they are clearly dependent.</p>
            <h3>Connection to OLS</h3>
            <p>The OLS slope estimator can be written as: $\\hat{\\beta}_1 = \\frac{\\widehat{Cov}(x, y)}{\\widehat{Var}(x)}$. The sign of the slope equals the sign of the sample covariance (and correlation) between $x$ and $y$.</p>
        `},
        {id: 46, title: "Systematic and Stochastic Components", html: `
            <h2>Systematic and Stochastic Components</h2>
            <p>The population regression model $y = \\beta_0 + \\beta_1 x + u$ decomposes $y$ into two parts:</p>
            <h3>Systematic Component</h3>
            <p>$$\\beta_0 + \\beta_1 x = E(y|x)$$</p>
            <p>This is the part of $y$ that can be predicted from $x$ — the conditional mean of $y$ given $x$. It is sometimes called the <strong>Population Regression Function (PRF)</strong>.</p>
            <p>The systematic component captures the average, predictable behavior of $y$ as $x$ changes.</p>
            <h3>Stochastic (Unsystematic) Component</h3>
            <p>$$u = y - E(y|x)$$</p>
            <p>This is the deviation of the actual $y$ from its conditional mean — the unpredictable part. It contains everything that affects $y$ other than $x$: omitted variables, measurement error, inherent randomness.</p>
            <h3>The Fitted Values and Residuals</h3>
            <p>In the sample, the decomposition is: $y_i = \\hat{y}_i + \\hat{u}_i$</p>
            <ul>
              <li>$\\hat{y}_i = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_i$ is the <strong>fitted value</strong> — the estimated systematic component</li>
              <li>$\\hat{u}_i = y_i - \\hat{y}_i$ is the <strong>residual</strong> — the estimated stochastic component</li>
            </ul>
            <h3>The Variance Decomposition</h3>
            <p>Because $\\widehat{Cov}(\\hat{y}, \\hat{u}) = 0$ by the OLS properties: $SST = SSE + SSR$</p>
            <p>Total variation = explained (systematic) variation + unexplained (stochastic) variation.</p>
        `},
        {id: 47, title: "Joint and Conditional Distributions", html: `
            <h2>Joint and Conditional Distributions</h2>
            <p>Understanding joint and conditional distributions is the probabilistic foundation of regression analysis.</p>
            <h3>Joint Distribution</h3>
            <p>The joint distribution of two random variables $X$ and $Y$ is described by the joint PDF $f(x, y)$ (continuous) or joint PMF (discrete). It satisfies:</p>
            <ul>
              <li>$f(x, y) \\geq 0$ for all $x, y$</li>
              <li>$\\int\\int f(x, y)\, dx\, dy = 1$ (or $\\sum\\sum f(x, y) = 1$ for discrete)</li>
            </ul>
            <h3>Marginal Distributions</h3>
            <p>$f_X(x) = \\int f(x, y)\, dy$ and $f_Y(y) = \\int f(x, y)\, dx$</p>
            <p>Marginal distributions integrate out the other variable.</p>
            <h3>Conditional Distribution</h3>
            <p>The conditional distribution of $Y$ given $X = x$: $f(y|x) = \\frac{f(x, y)}{f_X(x)}$</p>
            <p>The <strong>conditional expectation</strong> $E(Y|X = x) = \\int y \\cdot f(y|x)\, dy$ is the average value of $Y$ for a given value of $x$.</p>
            <h3>Independence</h3>
            <p>$X$ and $Y$ are statistically independent if and only if: $f(x, y) = f_X(x) \\cdot f_Y(y)$ for all $x, y$.</p>
            <h3>Law of Iterated Expectations</h3>
            <p>$$E(Y) = E[E(Y|X)]$$</p>
            <p>The unconditional mean of $Y$ can be obtained by first computing the conditional mean $E(Y|X)$ and then averaging over $X$. This law is used to prove that $E(u|x) = 0$ implies $Cov(x, u) = 0$.</p>
        `},
        {id: 48, title: "Level-Log Model", html: `
            <h2>Level-Log Model</h2>
            <p>In a level-log model, the dependent variable is in levels while the explanatory variable is in logarithms:</p>
            <p>$$y = \\beta_0 + \\beta_1 \\cdot \\log(x) + u$$</p>
            <h3>Interpretation of $\\beta_1$</h3>
            <p>A 1% increase in $x$ changes $y$ by approximately $\\beta_1/100$ units. More precisely, if $x$ changes from $x_0$ to $x_0 \\cdot (1 + 0.01)$, then $\\Delta y \\approx \\beta_1 \\cdot 0.01$.</p>
            <h3>Why Use This Form?</h3>
            <p>This functional form is appropriate when:</p>
            <ul>
              <li>The effect of $x$ on $y$ is diminishing — each additional percentage increase in $x$ adds a constant amount to $y$</li>
              <li>$x$ varies over a wide range (several orders of magnitude), making $\\log(x)$ more appropriate than $x$ in levels</li>
            </ul>
            <h3>Example</h3>
            <p>In a wage regression: $wage = \\beta_0 + \\beta_1 \\cdot \\log(exper) + u$</p>
            <p>An additional year of experience matters more early in a career than later. A 1% increase in experience always raises wage by $\\beta_1/100$ dollars, regardless of the current level of experience.</p>
            <h3>Comparison Across Functional Forms</h3>
            <p>The level-log model captures diminishing returns from $x$ in a simple way, without requiring a quadratic term. It is intermediate between the pure level-level model (constant marginal effect) and the log-log model (constant elasticity).</p>
        `},
        {id: 49, title: "Standard Errors in Regression Output", html: `
            <h2>Standard Errors in Regression Output</h2>
            <p>Standard errors appear alongside coefficient estimates in every regression table and are central to statistical inference.</p>
            <h3>Definition</h3>
            <p>The standard error of an estimator is the estimated standard deviation of its sampling distribution. For the OLS slope:</p>
            <p>$$se(\\hat{\\beta}_1) = \\frac{\\hat{\\sigma}}{\\sqrt{\\sum(x_i - \\bar{x})^2}}$$</p>
            <p>where $\\hat{\\sigma} = \\sqrt{SSR/(n-2)}$ is the Standard Error of the Regression.</p>
            <h3>What Standard Errors Tell Us</h3>
            <p>A small standard error means the estimator is precise — repeated sampling from the same population would produce similar estimates. A large standard error means high sampling variability — the estimate is unreliable.</p>
            <h3>t-Statistics</h3>
            <p>The $t$-statistic tests whether a coefficient is statistically different from zero:</p>
            <p>$$t = \\frac{\\hat{\\beta}_1}{se(\\hat{\\beta}_1)}$$</p>
            <p>Under the null hypothesis $\\beta_1 = 0$, this follows a $t$-distribution with $n - 2$ degrees of freedom.</p>
            <h3>p-Values</h3>
            <p>The $p$-value is the probability of observing a $t$-statistic at least as extreme as the calculated one, under the null hypothesis. A very small $p$-value (e.g. &lt; 0.05) leads to rejection of the null hypothesis — the variable is <strong>statistically significant</strong>.</p>
            <h3>Reading Regression Output</h3>
            <p>A typical regression table reports: coefficient estimate, standard error, $t$-statistic, and $p$-value for each regressor, plus $R^2$, SER, and the number of observations.</p>
        `},
        {id: 50, title: "Linear in Parameters (SLR.1)", html: `
            <h2>Linear in Parameters (SLR.1)</h2>
            <p>Assumption SLR.1 requires that the population model can be written as:</p>
            <p>$$y = \\beta_0 + \\beta_1 x + u$$</p>
            <p>where $\\beta_0$ and $\\beta_1$ are unknown population parameters and $u$ is an unobserved error term.</p>
            <h3>What Linear in Parameters Means</h3>
            <p>The model must be linear in the <em>parameters</em> $\\beta_0$ and $\\beta_1$ — the parameters enter additively and are not raised to any power, multiplied together, or appear inside a non-linear function. However, the <em>variables</em> $x$ and $y$ may be non-linear transformations:</p>
            <ul>
              <li>$\\log(y) = \\beta_0 + \\beta_1 x + u$ — linear in parameters, $y$ is transformed</li>
              <li>$y = \\beta_0 + \\beta_1 x^2 + u$ — linear in parameters, $x$ is transformed</li>
              <li>$y = \\beta_0 + \\beta_1 \\cdot \\log(x) + u$ — linear in parameters, $x$ is logged</li>
            </ul>
            <h3>Non-linear Models</h3>
            <p>Models like $y = \\beta_0 \\cdot \\exp(\\beta_1 x) + u$ are <strong>not</strong> linear in parameters and cannot be estimated by standard OLS without transformation. Such models require non-linear estimation methods.</p>
            <h3>Why It Matters</h3>
            <p>The linearity-in-parameters assumption is what allows the closed-form OLS formula to work. It ensures the SSR minimization problem has a unique analytical solution given the other assumptions.</p>
        `},
        {id: 51, title: "Probability: Expected Value and the Law of Iterated Expectations", html: `
            <h2>Expected Value and the Law of Iterated Expectations</h2>
            <p>Expected value is the population mean of a random variable and is the foundation of all moment-based econometric theory.</p>
            <h3>Definition</h3>
            <p>For a discrete random variable: $E(X) = \\sum x \\cdot f(x)$</p>
            <p>For a continuous random variable: $E(X) = \\int x \\cdot f(x)\, dx$</p>
            <h3>Linearity of Expectation</h3>
            <p>For constants $a$, $b$ and random variables $X$, $Y$:</p>
            <ul>
              <li>$E(a + bX) = a + b \\cdot E(X)$</li>
              <li>$E(X + Y) = E(X) + E(Y)$ (always, even if $X$ and $Y$ are dependent)</li>
            </ul>
            <h3>Conditional Expectation</h3>
            <p>$E(Y|X = x) = \\int y \\cdot f(y|x)\, dy$ — the average of $Y$ for a given value of $X$.</p>
            <p>This is a function of $x$, not a single number.</p>
            <h3>Law of Iterated Expectations (LIE)</h3>
            <p>$$E(Y) = E[E(Y|X)]$$</p>
            <p>The unconditional mean equals the average of the conditional means. This law is used repeatedly in econometrics:</p>
            <ul>
              <li>Proving that $E(u|x) = 0$ implies $E(u) = 0$</li>
              <li>Proving that $E(u|x) = 0$ implies $Cov(x, u) = 0$</li>
              <li>Defining the Population Regression Function as $E(y|x) = \\beta_0 + \\beta_1 x$</li>
            </ul>
            <h3>Jensen's Inequality</h3>
            <p>For a convex function $g$: $E[g(X)] \\geq g(E(X))$. This implies, for example, that $E(X^2) \\geq [E(X)]^2$, which is why $Var(X) = E(X^2) - [E(X)]^2 \\geq 0$.</p>
        `},
        {id: 52, title: "Normal Distribution and Standardization", html: `
            <h2>Normal Distribution and Standardization</h2>
            <p>The normal distribution plays a central role in econometrics because OLS estimators are normally distributed under the classical assumptions with normally distributed errors.</p>
            <h3>The Normal Distribution</h3>
            <p>A random variable $X \\sim N(\\mu, \\sigma^2)$ has:</p>
            <ul>
              <li>Mean: $E(X) = \\mu$</li>
              <li>Variance: $Var(X) = \\sigma^2$</li>
              <li>Bell-shaped, symmetric PDF: $f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$</li>
            </ul>
            <h3>Standardization</h3>
            <p>Any normal variable can be converted to a <strong>standard normal</strong> $Z \\sim N(0, 1)$:</p>
            <p>$$Z = \\frac{X - \\mu}{\\sigma}$$</p>
            <p>The standard normal CDF is $\\Phi(z) = P(Z \\leq z)$.</p>
            <h3>Using Symmetry</h3>
            <p>Since the standard normal is symmetric around zero: $P(Z > -z) = P(Z &lt; z) = \\Phi(z)$</p>
            <h3>Linear Transformations Preserve Normality</h3>
            <p>If $X \\sim N(\\mu, \\sigma^2)$, then $Y = a + bX \\sim N(a + b\\mu,\ b^2\\sigma^2)$. This property is important because OLS estimators are linear functions of the data — if $u$ is normally distributed, so are $\\hat{\\beta}_0$ and $\\hat{\\beta}_1$.</p>
            <h3>Role in Hypothesis Testing</h3>
            <p>Under the classical OLS assumptions (SLR.1–SLR.5 plus normality of $u$), the $t$-statistic $t = \\hat{\\beta}_1 / se(\\hat{\\beta}_1)$ follows a $t(n-2)$ distribution, allowing exact inference in small samples.</p>
        `},

    /* ================================================================
       IDs 53–62: Schritt-für-Schritt Rechenbeispiele aus den Übungen
       ================================================================ */

    {id: 53, title: "OLS: Numerisches Rechenbeispiel (vollständig)", html: `
        <h2>OLS: Schritt-für-Schritt Berechnung</h2>
        <p>Gegeben sind vier Beobachtungen: $(-1, -2),\ (2, 2),\ (0, 1),\ (3, 7)$, wobei die erste Zahl $x_i$ und die zweite $y_i$ ist.</p>

        <h3>Schritt 1: Mittelwerte berechnen</h3>
        <p>$$\\bar{x} = \\frac{-1+2+0+3}{4} = \\frac{4}{4} = 1$$</p>
        <p>$$\\bar{y} = \\frac{-2+2+1+7}{4} = \\frac{8}{4} = 2$$</p>

        <h3>Schritt 2: Hilfstabelle für den Schätzer</h3>
        <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
          <tr style="border-bottom:1px solid var(--border);">
            <th style="padding:6px 12px;text-align:left;">$i$</th>
            <th style="padding:6px 12px;">$x_i$</th>
            <th style="padding:6px 12px;">$y_i$</th>
            <th style="padding:6px 12px;">$x_i - \\bar{x}$</th>
            <th style="padding:6px 12px;">$y_i - \\bar{y}$</th>
            <th style="padding:6px 12px;">$(x_i-\\bar{x})(y_i-\\bar{y})$</th>
            <th style="padding:6px 12px;">$(x_i-\\bar{x})^2$</th>
          </tr>
          <tr><td style="padding:4px 12px;">1</td><td style="padding:4px 12px;">−1</td><td style="padding:4px 12px;">−2</td><td style="padding:4px 12px;">−2</td><td style="padding:4px 12px;">−4</td><td style="padding:4px 12px;">8</td><td style="padding:4px 12px;">4</td></tr>
          <tr><td style="padding:4px 12px;">2</td><td style="padding:4px 12px;">2</td><td style="padding:4px 12px;">2</td><td style="padding:4px 12px;">1</td><td style="padding:4px 12px;">0</td><td style="padding:4px 12px;">0</td><td style="padding:4px 12px;">1</td></tr>
          <tr><td style="padding:4px 12px;">3</td><td style="padding:4px 12px;">0</td><td style="padding:4px 12px;">1</td><td style="padding:4px 12px;">−1</td><td style="padding:4px 12px;">−1</td><td style="padding:4px 12px;">1</td><td style="padding:4px 12px;">1</td></tr>
          <tr style="border-top:1px solid var(--border);"><td style="padding:4px 12px;">4</td><td style="padding:4px 12px;">3</td><td style="padding:4px 12px;">7</td><td style="padding:4px 12px;">2</td><td style="padding:4px 12px;">5</td><td style="padding:4px 12px;">10</td><td style="padding:4px 12px;">4</td></tr>
          <tr style="border-top:2px solid var(--border);font-weight:bold;"><td style="padding:6px 12px;">Σ</td><td></td><td></td><td></td><td></td><td style="padding:6px 12px;">19</td><td style="padding:6px 12px;">10</td></tr>
        </table>

        <h3>Schritt 3: Steigung und Achsenabschnitt</h3>
        <p>$$\\hat{\\beta}_1 = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2} = \\frac{19}{10} = 1.9$$</p>
        <p>$$\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\cdot \\bar{x} = 2 - 1.9 \\cdot 1 = 0.1$$</p>
        <p><strong>Regressionsgerade:</strong> $\\hat{y} = 0.1 + 1.9x$</p>

        <h3>Schritt 4: Vorhersagen und Residuen</h3>
        <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
          <tr style="border-bottom:1px solid var(--border);">
            <th style="padding:6px 12px;">$x_i$</th>
            <th style="padding:6px 12px;">$y_i$</th>
            <th style="padding:6px 12px;">$\\hat{y}_i = 0.1+1.9x_i$</th>
            <th style="padding:6px 12px;">$\\hat{u}_i = y_i - \\hat{y}_i$</th>
            <th style="padding:6px 12px;">$\\hat{u}_i^2$</th>
          </tr>
          <tr><td style="padding:4px 12px;">−1</td><td style="padding:4px 12px;">−2</td><td style="padding:4px 12px;">−1.8</td><td style="padding:4px 12px;">−0.2</td><td style="padding:4px 12px;">0.04</td></tr>
          <tr><td style="padding:4px 12px;">2</td><td style="padding:4px 12px;">2</td><td style="padding:4px 12px;">3.9</td><td style="padding:4px 12px;">−1.9</td><td style="padding:4px 12px;">3.61</td></tr>
          <tr><td style="padding:4px 12px;">0</td><td style="padding:4px 12px;">1</td><td style="padding:4px 12px;">0.1</td><td style="padding:4px 12px;">0.9</td><td style="padding:4px 12px;">0.81</td></tr>
          <tr style="border-top:1px solid var(--border);"><td style="padding:4px 12px;">3</td><td style="padding:4px 12px;">7</td><td style="padding:4px 12px;">5.8</td><td style="padding:4px 12px;">1.2</td><td style="padding:4px 12px;">1.44</td></tr>
          <tr style="border-top:2px solid var(--border);font-weight:bold;"><td colspan="4" style="padding:6px 12px;">SSR = $\\sum \\hat{u}_i^2$</td><td style="padding:6px 12px;">5.90</td></tr>
        </table>

        <h3>Schritt 5: Gütemaße (SST, SSE, R²)</h3>
        <p>$$SST = \\sum(y_i - \\bar{y})^2 = (-4)^2 + 0^2 + (-1)^2 + 5^2 = 16+0+1+25 = 42$$</p>
        <p>$$SSE = SST - SSR = 42 - 5.90 = 36.10$$</p>
        <p>$$R^2 = \\frac{SSE}{SST} = \\frac{36.10}{42} \\approx 0.8595$$</p>
        <p>Die Regressionsgerade erklärt ca. <strong>85,95%</strong> der Varianz von $y$.</p>

        <h3>Schritt 6: Extrapolation</h3>
        <p>Vorhersage für $x = 1$: $\\hat{y} = 0.1 + 1.9 \\cdot 1 = 2.0$</p>
        <p>Vorhersage für $x = 4$: $\\hat{y} = 0.1 + 1.9 \\cdot 4 = 7.7$</p>
    `},

    {id: 54, title: "Zero Conditional Mean: Beweise E(ux)=0 und Cov(u,x)=0", html: `
        <h2>Zero Conditional Mean: Algebraische Beweise</h2>
        <p>Die Annahme SLR.4 lautet: $E(u|x) = 0$ für alle Werte von $x$. Daraus folgen zwei wichtige Konsequenzen.</p>

        <h3>Beweis 1: $E(u \\cdot x) = 0$</h3>
        <p>Wir verwenden das <strong>Gesetz der iterierten Erwartungen</strong> (Law of Iterated Expectations, LIE):</p>
        <p>$$E(ux) = E\\bigl[E(ux \\mid x)\\bigr]$$</p>
        <p>Im inneren Erwartungswert ist $x$ bekannt (nicht zufällig), also kann man $x$ herausziehen:</p>
        <p>$$= E\\bigl[x \\cdot E(u \\mid x)\\bigr]$$</p>
        <p>Wegen $E(u|x) = 0$ gilt:</p>
        <p>$$= E[x \\cdot 0] = E[0] = 0$$</p>
        <p><strong>Ergebnis:</strong> $E(ux) = 0$ — Fehlerterm und Regressor sind unkorreliert in Erwartung.</p>

        <h3>Beweis 2: $\\text{Cov}(u, x) = 0$</h3>
        <p>Die Kovarianz ist definiert als:</p>
        <p>$$\\text{Cov}(u, x) = E(ux) - E(u) \\cdot E(x)$$</p>
        <p>Aus SLR.4 folgt auch $E(u) = E[E(u|x)] = E[0] = 0$ (LIE wieder). Also:</p>
        <p>$$\\text{Cov}(u, x) = 0 - 0 \\cdot E(x) = 0$$</p>
        <p><strong>Wichtig:</strong> Die Umkehrung gilt <em>nicht</em> — $\\text{Cov}(u,x)=0$ impliziert <em>nicht</em> $E(u|x)=0$. Letzteres ist die stärkere Bedingung.</p>

        <hr>
        <h3>Warum ist das wichtig?</h3>
        <p>Die Momentbedingungen $E(u)=0$ und $E(ux)=0$ sind genau die Grundlage der <strong>Methode der Momente</strong> für OLS. Sie liefern die zwei Normalgleichungen:</p>
        <p>$$\\frac{1}{n}\\sum_{i=1}^n \\hat{u}_i = 0 \\qquad \\text{und} \\qquad \\frac{1}{n}\\sum_{i=1}^n x_i \\hat{u}_i = 0$$</p>
        <p>Aus denen die OLS-Schätzer $\\hat{\\beta}_0$ und $\\hat{\\beta}_1$ direkt folgen.</p>
    `},

    {id: 55, title: "Homoskedastizität: Bedingt vs. Unbedingt", html: `
        <h2>Homoskedastizität: Bedingte vs. Unbedingte Varianz</h2>

        <h3>Definitionen</h3>
        <p><strong>Bedingte Homoskedastizität (SLR.5):</strong> $\\text{Var}(u|x) = \\sigma^2$ — die Varianz des Fehlerterms ist konstant für alle $x$-Werte.</p>
        <p><strong>Unbedingte Varianz:</strong> $\\text{Var}(u) = E[u^2] - (E[u])^2 = E[u^2]$ (da $E[u]=0$).</p>

        <h3>Beweis: Bedingte ⟹ Unbedingte Homoskedastizität</h3>
        <p>Wir verwenden das <strong>Gesetz der totalen Varianz</strong>:</p>
        <p>$$\\text{Var}(u) = E\\bigl[\\text{Var}(u|x)\\bigr] + \\text{Var}\\bigl[E(u|x)\\bigr]$$</p>
        <p>Einsetzen von SLR.4 ($E(u|x)=0$) und SLR.5 ($\\text{Var}(u|x)=\\sigma^2$):</p>
        <p>$$\\text{Var}(u) = E[\\sigma^2] + \\text{Var}[0] = \\sigma^2 + 0 = \\sigma^2$$</p>
        <p><strong>Ergebnis:</strong> Bedingte Homoskedastizität impliziert unbedingte Homoskedastizität mit demselben $\\sigma^2$.</p>

        <h3>Umkehrung gilt nicht</h3>
        <p>Beispiel: Wenn $\\text{Var}(u|x) = x^2$ (Heteroskedastizität), kann die unbedingte Varianz trotzdem konstant sein — aber SLR.5 ist verletzt. OLS ist dann noch konsistent, aber nicht mehr BLUE.</p>

        <hr>
        <h3>Praktische Bedeutung</h3>
        <ul>
          <li>Heteroskedastizität → Standardfehler der OLS-Schätzer sind verzerrt</li>
          <li>Tests: White-Test, Breusch-Pagan-Test</li>
          <li>Korrektur: Robuste (HC) Standardfehler oder WLS</li>
        </ul>
    `},

    {id: 56, title: "OLS Second-Order Conditions: Hessian-Matrix", html: `
        <h2>OLS: Zweite Ordnungsbedingungen (Hessian-Matrix)</h2>
        <p>OLS minimiert $SSR(b_0, b_1) = \\sum_{i=1}^n (y_i - b_0 - b_1 x_i)^2$. Die FOC liefern die Normalgleichungen — aber wir müssen sicherstellen, dass es ein <em>Minimum</em> und kein Sattelpunkt ist.</p>

        <h3>Die Hessian-Matrix</h3>
        <p>Die zweiten partiellen Ableitungen von SSR:</p>
        <p>$$\\frac{\\partial^2 SSR}{\\partial b_0^2} = 2n = A$$</p>
        <p>$$\\frac{\\partial^2 SSR}{\\partial b_1^2} = 2\\sum x_i^2 = C$$</p>
        <p>$$\\frac{\\partial^2 SSR}{\\partial b_0 \\partial b_1} = 2\\sum x_i = B$$</p>
        <p>Die Hessian-Matrix ist: $H = 2\\begin{pmatrix} n & \\sum x_i \\\\ \\sum x_i & \\sum x_i^2 \\end{pmatrix}$</p>

        <h3>Bedingung für positiv-definit</h3>
        <p>$H$ ist positiv-definit genau dann, wenn:</p>
        <ol>
          <li>$A = 2n > 0$ ✓ (gilt immer für $n \\geq 1$)</li>
          <li>$\\det(H) = AC - B^2 = 4n\\sum x_i^2 - 4(\\sum x_i)^2 > 0$</li>
        </ol>
        <p>Dies vereinfacht sich zu:</p>
        <p>$$n \\sum x_i^2 - \\left(\\sum x_i\\right)^2 > 0$$</p>

        <h3>Warum gilt das? Cauchy-Schwarz</h3>
        <p>Nach der <strong>Cauchy-Schwarz-Ungleichung</strong>:</p>
        <p>$$\\left(\\sum_{i=1}^n x_i \\cdot 1\\right)^2 \\leq \\left(\\sum x_i^2\\right)\\left(\\sum 1^2\\right) = n\\sum x_i^2$$</p>
        <p>Gleichheit gilt genau dann, wenn alle $x_i$ identisch sind. Wenn also <strong>SLR.3</strong> (Varianz in $x$) gilt, ist die Ungleichung streng, und die Hessian ist positiv-definit → die FOC-Lösung ist ein globales Minimum.</p>
    `},

    {id: 57, title: "Pareto-Verteilung: Method of Moments", html: `
        <h2>Pareto-Verteilung: Method of Moments Schätzer</h2>

        <h3>Dichtefunktion und Erwartungswert</h3>
        <p>Die Pareto-Verteilung mit Parameter $a > 1$ hat die Dichte:</p>
        <p>$$f(x) = \\frac{a}{x^{a+1}} \\quad \\text{für } x \\geq 1$$</p>
        <p>Der Erwartungswert berechnet sich durch Integration:</p>
        <p>$$E[X] = \\int_1^\\infty x \\cdot \\frac{a}{x^{a+1}}\\,dx = a\\int_1^\\infty x^{-a}\\,dx = a \\cdot \\left[\\frac{x^{-a+1}}{-a+1}\\right]_1^\\infty = \\frac{a}{a-1}$$</p>
        <p>(Das Integral konvergiert für $a > 1$.)</p>

        <h3>Method of Moments: Schätzer herleiten</h3>
        <p>Wir setzen den theoretischen Erwartungswert gleich dem Stichprobenmittelwert:</p>
        <p>$$E[X] = \\frac{a}{a-1} \\overset{!}{=} \\bar{X}$$</p>
        <p>Auflösen nach $a$:</p>
        <p>$$a \\cdot 1 = \\bar{X}(a-1) = \\bar{X}a - \\bar{X}$$</p>
        <p>$$a - \\bar{X}a = -\\bar{X} \\implies a(1-\\bar{X}) = -\\bar{X}$$</p>
        <p>$$\\boxed{\\hat{a} = \\frac{\\bar{X}}{\\bar{X}-1}}$$</p>

        <h3>Numerisches Beispiel</h3>
        <p>Stichprobe: $\\{1.93,\\ 1.03,\\ 1.34,\\ 1.06,\\ 1.13,\\ 5.05\\}$</p>
        <p>$$\\bar{X} = \\frac{1.93+1.03+1.34+1.06+1.13+5.05}{6} = \\frac{11.54}{6} \\approx 1.9233$$</p>
        <p>$$\\hat{a} = \\frac{1.9233}{1.9233 - 1} = \\frac{1.9233}{0.9233} \\approx 2.083$$</p>
        <p><strong>Interpretation:</strong> Für $a \\approx 2.083$ besitzt die Verteilung einen endlichen Erwartungswert (da $a > 1$) und eine endliche Varianz (da $a > 2$).</p>

        <hr>
        <h3>Merkhilfe</h3>
        <p>Die Formel $\\hat{a} = \\bar{X}/(\\bar{X}-1)$ gilt nur für $\\bar{X} > 1$ (was bei der Pareto-Verteilung mit Minimum 1 immer der Fall sein sollte).</p>
    `},

    {id: 58, title: "Log-Modelle, Quadratische Modelle & Elastizitäten", html: `
        <h2>Log-Modelle, Quadratische Modelle & Elastizitäten</h2>

        <h3>1. Log-Log Modell (konstante Elastizität)</h3>
        <p>$$\\ln(y) = \\beta_0 + \\beta_1 \\ln(x) + u$$</p>
        <p><strong>Interpretation:</strong> $\\beta_1$ ist die Elastizität — ein 1%-Anstieg von $x$ führt zu einem $\\beta_1$%-Anstieg von $y$.</p>
        <p><em>Beispiel (Hauspreis, Log-Log):</em> $\\hat{\\beta}_1 = 0.312$ → 1% mehr Fläche → 0.312% höherer Preis.</p>

        <h3>2. Log-Lineares Modell (semi-logarithmisch)</h3>
        <p>$$\\ln(y) = \\gamma_0 + \\gamma_1 x + u$$</p>
        <p><strong>Marginaleffekt:</strong> $\\frac{\\partial y}{\\partial x} = \\gamma_1 \\cdot y$</p>
        <p><strong>Elastizität (variabel):</strong> $\\varepsilon = \\gamma_1 \\cdot x$</p>
        <p><em>Beispiel:</em> $\\hat{\\gamma}_1 = 0.000411$, bei $x=2000$ sqft: $\\varepsilon = 0.000411 \\times 2000 \\approx 0.822$</p>
        <p>Bei $x=4000$: $\\varepsilon \\approx 1.644$; bei $x=6000$: $\\varepsilon \\approx 2.466$</p>

        <h3>3. Quadratisches Modell</h3>
        <p>$$y = \\delta_0 + \\delta_1 x + \\delta_2 x^2 + u$$</p>
        <p><strong>Marginaleffekt (nicht konstant):</strong> $\\frac{\\partial y}{\\partial x} = \\delta_1 + 2\\delta_2 x$</p>
        <p><strong>Elastizität:</strong> $\\varepsilon = (\\delta_1 + 2\\delta_2 x) \\cdot \\frac{x}{y}$</p>
        <p><em>Beispiel:</em> $\\hat{\\delta}_1 = 134.2,\\ \\hat{\\delta}_2 = -0.01$</p>
        <ul>
          <li>Bei $x=2000$: $ME = 134.2 - 2 \\cdot 0.01 \\cdot 2000 = 134.2 - 40 = 94.2$ $/sqft</li>
          <li>Bei $x=4000$: $ME = 134.2 - 80 = 54.2$ $/sqft</li>
          <li>Bei $x=6000$: $ME = 134.2 - 120 = 14.2$ $/sqft</li>
        </ul>
        <p>Der abnehmende Marginaleffekt spiegelt diminishing returns wider.</p>

        <h3>4. Lineares Modell (Vergleich)</h3>
        <p>$$y = \\alpha_0 + \\alpha_1 x + u$$</p>
        <p>$\\hat{\\alpha}_1 = 92.75$ $/sqft → Preis steigt linear um $92.75 pro Quadratfuß.</p>
        <p><strong>Elastizität (variabel):</strong> $\\varepsilon = \\alpha_1 \\cdot x / \\hat{y}$</p>

        <hr>
        <h3>Zusammenfassung</h3>
        <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
          <tr style="border-bottom:1px solid var(--border);"><th style="padding:6px;">Modell</th><th style="padding:6px;">ME</th><th style="padding:6px;">Elastizität</th></tr>
          <tr><td style="padding:4px 6px;">Linear</td><td style="padding:4px 6px;">$\\alpha_1$ (konstant)</td><td style="padding:4px 6px;">$\\alpha_1 x/y$ (variabel)</td></tr>
          <tr><td style="padding:4px 6px;">Log-Log</td><td style="padding:4px 6px;">$\\beta_1 y/x$ (variabel)</td><td style="padding:4px 6px;">$\\beta_1$ (konstant)</td></tr>
          <tr><td style="padding:4px 6px;">Log-Linear</td><td style="padding:4px 6px;">$\\gamma_1 y$ (variabel)</td><td style="padding:4px 6px;">$\\gamma_1 x$ (variabel)</td></tr>
          <tr><td style="padding:4px 6px;">Quadratisch</td><td style="padding:4px 6px;">$\\delta_1+2\\delta_2 x$ (variabel)</td><td style="padding:4px 6px;">$(\\delta_1+2\\delta_2 x)x/y$</td></tr>
        </table>
    `},

    {id: 59, title: "Gemeinsame Verteilungen: Tabelle, E(X), bedingte Verteilung", html: `
        <h2>Gemeinsame Verteilungen: Schritt-für-Schritt</h2>
        <p>Gegeben sei folgende unvollständige Tabelle der gemeinsamen Verteilung von $X$ und $Y$:</p>

        <h3>Schritt 1: Ausgangstabelle</h3>
        <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
          <tr style="border-bottom:1px solid var(--border);"><th style="padding:6px;">$X \\setminus Y$</th><th style="padding:6px;">$Y=0$</th><th style="padding:6px;">$Y=1$</th><th style="padding:6px;">$P(X=x)$</th></tr>
          <tr><td style="padding:4px 8px;">$X=2$</td><td style="padding:4px 8px;">0.10</td><td style="padding:4px 8px;">?</td><td style="padding:4px 8px;">0.25</td></tr>
          <tr><td style="padding:4px 8px;">$X=4$</td><td style="padding:4px 8px;">0.35</td><td style="padding:4px 8px;">?</td><td style="padding:4px 8px;">?</td></tr>
          <tr><td style="padding:4px 8px;">$X=6$</td><td style="padding:4px 8px;">?</td><td style="padding:4px 8px;">0.15</td><td style="padding:4px 8px;">?</td></tr>
          <tr style="border-top:1px solid var(--border);"><td style="padding:4px 8px;"><strong>$P(Y=y)$</strong></td><td style="padding:4px 8px;">?</td><td style="padding:4px 8px;">0.30</td><td style="padding:4px 8px;"><strong>1.00</strong></td></tr>
        </table>

        <h3>Schritt 2: Fehlende Werte berechnen</h3>
        <ol>
          <li>$P(X=2, Y=1) = P(X=2) - P(X=2,Y=0) = 0.25 - 0.10 = 0.15$</li>
          <li>$P(Y=0) = 1 - P(Y=1) = 1 - 0.30 = 0.70$</li>
          <li>$P(X=6, Y=0) = P(Y=0) - P(X=2,Y=0) - P(X=4,Y=0) = 0.70 - 0.10 - 0.35 = 0.25$</li>
          <li>$P(X=6) = P(X=6,Y=0) + P(X=6,Y=1) = 0.25 + 0.15 = 0.40$</li>
          <li>$P(X=4, Y=1) = P(Y=1) - P(X=2,Y=1) - P(X=6,Y=1) = 0.30 - 0.15 - 0.15 = 0.00$</li>
          <li>$P(X=4) = 0.35 + 0.00 = 0.35$</li>
        </ol>

        <h3>Schritt 3: Vollständige Tabelle</h3>
        <table style="border-collapse:collapse;width:100%;font-size:.9rem;">
          <tr style="border-bottom:1px solid var(--border);"><th style="padding:6px;">$X \\setminus Y$</th><th style="padding:6px;">$Y=0$</th><th style="padding:6px;">$Y=1$</th><th style="padding:6px;">$P(X=x)$</th></tr>
          <tr><td style="padding:4px 8px;">$X=2$</td><td style="padding:4px 8px;">0.10</td><td style="padding:4px 8px;">0.15</td><td style="padding:4px 8px;">0.25</td></tr>
          <tr><td style="padding:4px 8px;">$X=4$</td><td style="padding:4px 8px;">0.35</td><td style="padding:4px 8px;">0.00</td><td style="padding:4px 8px;">0.35</td></tr>
          <tr><td style="padding:4px 8px;">$X=6$</td><td style="padding:4px 8px;">0.25</td><td style="padding:4px 8px;">0.15</td><td style="padding:4px 8px;">0.40</td></tr>
          <tr style="border-top:1px solid var(--border);"><td style="padding:4px 8px;"><strong>$P(Y=y)$</strong></td><td style="padding:4px 8px;">0.70</td><td style="padding:4px 8px;">0.30</td><td style="padding:4px 8px;"><strong>1.00</strong></td></tr>
        </table>

        <h3>Schritt 4: Erwartungswert $E(X)$</h3>
        <p>$$E(X) = 2 \\cdot 0.25 + 4 \\cdot 0.35 + 6 \\cdot 0.40 = 0.50 + 1.40 + 2.40 = 4.30$$</p>
        <p>Hinweis: Wenn in deiner Übung andere Ausgangswerte stehen, gilt dasselbe Vorgehen — hier als allgemeines Muster zu verstehen.</p>

        <h3>Schritt 5: Bedingte Verteilung $P(X|Y=1)$</h3>
        <p>$$P(X=2|Y=1) = \\frac{P(X=2,Y=1)}{P(Y=1)} = \\frac{0.15}{0.30} = 0.50$$</p>
        <p>$$P(X=4|Y=1) = \\frac{0.00}{0.30} = 0.00$$</p>
        <p>$$P(X=6|Y=1) = \\frac{0.15}{0.30} = 0.50$$</p>
        <p>$$E(X|Y=1) = 2 \\cdot 0.50 + 4 \\cdot 0 + 6 \\cdot 0.50 = 1 + 0 + 3 = 4.0$$</p>

        <h3>Schritt 6: Unabhängigkeitstest</h3>
        <p>$X$ und $Y$ sind unabhängig genau dann, wenn $P(X=x, Y=y) = P(X=x) \\cdot P(Y=y)$ für alle $x, y$.</p>
        <p>Prüfen: $P(X=4, Y=1) = 0 \\neq 0.35 \\cdot 0.30 = 0.105$</p>
        <p><strong>→ $X$ und $Y$ sind nicht unabhängig.</strong></p>
    `},

    {id: 60, title: "Normalverteilung: Lineare Transformation & Z-Standardisierung", html: `
        <h2>Normalverteilung: Lineare Transformation & Wahrscheinlichkeitsberechnung</h2>

        <h3>Ausgangssituation</h3>
        <p>Gegeben: Absatz $Q \\sim N(300, 100)$ (Einheiten), Preis = $20/Einheit, Fixkosten $F = 1\\ 500$.</p>
        <p>Umsatz: $S = 20 \\cdot Q - 1\\ 500$</p>

        <h3>Schritt 1: Erwartungswert von $S$</h3>
        <p>Lineare Transformationsregel: $E(aX + b) = a \\cdot E(X) + b$</p>
        <p>$$E(S) = 20 \\cdot E(Q) - 1\\ 500 = 20 \\cdot 300 - 1\\ 500 = 6\\ 000 - 1\\ 500 = 4\\ 500$$</p>
        <p>Hinweis: In der Übung mit $E(Q)=498$ und $F=540$: $E(S)=20\\cdot498-540=9\\ 960-540=9\\ 420$. Das allgemeine Vorgehen ist identisch.</p>

        <h3>Schritt 2: Varianz von $S$</h3>
        <p>Varianzregel: $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$</p>
        <p>$$\\text{Var}(S) = 20^2 \\cdot \\text{Var}(Q) = 400 \\cdot 100 = 40\\ 000$$</p>
        <p>$$\\sigma_S = \\sqrt{40\\ 000} = 200$$</p>
        <p><strong>Verteilung:</strong> $S \\sim N(4\\ 500,\\ 40\\ 000)$</p>

        <h3>Schritt 3: Wahrscheinlichkeit berechnen (aus der Übung)</h3>
        <p>Konkrete Werte der Übung: $Q \\sim N(498, 2890)$, Umsatz $S = 20Q - 540$</p>
        <p>$$E(S) = 20 \\cdot 498 - 540 = 9\\ 420, \\quad \\text{Var}(S) = 400 \\cdot 2890 = 1\\ 156\\ 000, \\quad \\sigma_S \\approx 1\\ 075.2$$</p>
        <p>Gesucht: $P(S > 7\\ 500)$</p>
        <p><strong>Z-Standardisierung:</strong></p>
        <p>$$Z = \\frac{S - \\mu_S}{\\sigma_S} = \\frac{7\\ 500 - 9\\ 420}{1\\ 075.2} \\approx \\frac{-1\\ 920}{1\\ 075.2} \\approx -1.785$$</p>
        <p>$$P(S > 7\\ 500) = P\\!\\left(Z > -1.785\\right) = P(Z < 1.785) = \\Phi(1.785) \\approx 0.963$$</p>
        <p><strong>Ergebnis:</strong> Mit ca. 96,3% Wahrscheinlichkeit übersteigt der Umsatz 7 500.</p>

        <h3>Symmetrieregel der Normalverteilung</h3>
        <p>$$P(Z > -c) = P(Z < c) = \\Phi(c)$$</p>
        <p>Diese Symmetrie ist entscheidend bei negativen $z$-Werten — immer das Vorzeichen umdrehen und in der Tabelle nachschlagen.</p>

        <hr>
        <h3>Allgemeines Schema</h3>
        <ol>
          <li>$E(aX+b) = aE(X)+b$, $\\text{Var}(aX+b) = a^2 \\text{Var}(X)$</li>
          <li>$Z = (X - \\mu)/\\sigma$, dann $P(X > c) = P(Z > (c-\\mu)/\\sigma)$</li>
          <li>Bei negativem $z$: $P(Z > -c) = \\Phi(c)$</li>
        </ol>
    `},

    {id: 61, title: "Algebraische Beweise: Varianz, Kovarianz & Σ-Identitäten", html: `
        <h2>Algebraische Beweise</h2>

        <h3>Beweis 1: $\\sum x_i^2 - n\\bar{x}^2 = \\sum(x_i - \\bar{x})^2$</h3>
        <p>Rechte Seite ausmultiplizieren:</p>
        <p>$$\\sum(x_i-\\bar{x})^2 = \\sum\\bigl(x_i^2 - 2x_i\\bar{x} + \\bar{x}^2\\bigr) = \\sum x_i^2 - 2\\bar{x}\\sum x_i + n\\bar{x}^2$$</p>
        <p>Da $\\sum x_i = n\\bar{x}$:</p>
        <p>$$= \\sum x_i^2 - 2\\bar{x}(n\\bar{x}) + n\\bar{x}^2 = \\sum x_i^2 - 2n\\bar{x}^2 + n\\bar{x}^2 = \\sum x_i^2 - n\\bar{x}^2 \\ \\square$$</p>

        <h3>Beweis 2: $\\sum(x_i-\\bar{x})(y_i-\\bar{y}) = \\sum(x_i-\\bar{x})y_i$</h3>
        <p>Linke Seite ausmultiplizieren:</p>
        <p>$$\\sum(x_i-\\bar{x})(y_i-\\bar{y}) = \\sum(x_i-\\bar{x})y_i - \\bar{y}\\sum(x_i-\\bar{x})$$</p>
        <p>Da $\\sum(x_i-\\bar{x}) = 0$:</p>
        <p>$$= \\sum(x_i-\\bar{x})y_i - \\bar{y} \\cdot 0 = \\sum(x_i-\\bar{x})y_i \\ \\square$$</p>

        <h3>Beweis 3: $E(a + bX) = a + bE(X)$</h3>
        <p>$$E(a+bX) = \\sum_x (a+bx)P(X=x) = a\\sum_x P(X=x) + b\\sum_x x P(X=x) = a \\cdot 1 + b \\cdot E(X) \\ \\square$$</p>

        <h3>Beweis 4: $\\text{Var}(a + bX) = b^2 \\text{Var}(X)$</h3>
        <p>$$\\text{Var}(a+bX) = E\\bigl[(a+bX - E(a+bX))^2\\bigr] = E\\bigl[(a+bX-a-bE(X))^2\\bigr]$$</p>
        <p>$$= E\\bigl[b^2(X-E(X))^2\\bigr] = b^2 E\\bigl[(X-E(X))^2\\bigr] = b^2 \\text{Var}(X) \\ \\square$$</p>

        <h3>Beweis 5: $\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$</h3>
        <p>$$\\text{Cov}(X,Y) = E\\bigl[(X-\\mu_X)(Y-\\mu_Y)\\bigr] = E(XY - X\\mu_Y - \\mu_X Y + \\mu_X\\mu_Y)$$</p>
        <p>$$= E(XY) - \\mu_Y E(X) - \\mu_X E(Y) + \\mu_X\\mu_Y = E(XY) - \\mu_X\\mu_Y - \\mu_X\\mu_Y + \\mu_X\\mu_Y$$</p>
        <p>$$= E(XY) - E(X)E(Y) \\ \\square$$</p>

        <h3>Varianz-Kurzformel</h3>
        <p>$$\\text{Var}(X) = E(X^2) - (E(X))^2$$</p>
        <p>Beweis: $\\text{Cov}(X,X) = E(X^2) - E(X)^2 = \\text{Var}(X)$. $\\square$</p>
    `},

    {id: 62, title: "Regressionsinterpretation: Geburtsgewicht, Konsum & OVB", html: `
        <h2>Regressionsinterpretation: Praxisbeispiele</h2>

        <h3>1. Geburtsgewicht-Regression</h3>
        <p>Modell: $\\widehat{bwght} = 119.77 - 0.514 \\cdot cigs$</p>
        <ul>
          <li><strong>Intercept:</strong> Bei 0 Zigaretten beträgt das vorhergesagte Geburtsgewicht 119.77 Unzen.</li>
          <li><strong>Slope:</strong> Eine Zigarette mehr pro Tag reduziert das Geburtsgewicht um 0.514 Unzen.</li>
          <li>Bei $cigs = 20$: $\\hat{bwght} = 119.77 - 0.514 \\times 20 = 119.77 - 10.28 = 109.49$ Unzen</li>
        </ul>
        <p><strong>Modellkritik:</strong> Für sehr hohe $cigs$-Werte (z.B. $cigs > 233$) würde das Modell negative Geburtsgewichte vorhersagen — biologisch unmöglich. Das Modell sollte nur im beobachteten Bereich interpretiert werden.</p>

        <h3>2. Konsumfunktion (MPC)</h3>
        <p>Modell: $\\widehat{cons} = -184.01 + 0.801 \\cdot inc$</p>
        <ul>
          <li><strong>MPC:</strong> Die marginale Konsumquote beträgt 0.801 — von jedem zusätzlichen Euro Einkommen werden 80.1 Cent konsumiert.</li>
          <li>Bei $inc = 0$: $\\widehat{cons} = -184.01$ — wirtschaftlich nicht sinnvoll (außerhalb des beobachteten Bereichs).</li>
        </ul>

        <h3>3. Reparametrisierung des Fehlerterms</h3>
        <p>Wenn $E(u) = \\mu \\neq 0$, schreibe $u = \\mu + e$ mit $E(e)=0$:</p>
        <p>$$y = \\beta_0 + \\beta_1 x + \\mu + e = (\\beta_0 + \\mu) + \\beta_1 x + e = \\alpha_0 + \\beta_1 x + e$$</p>
        <p>Der nicht-null Mittelwert wird in den Intercept $\\alpha_0 = \\beta_0 + \\mu$ absorbiert. Deshalb ist $E(u)=0$ keine echte Einschränkung, solange ein Intercept enthalten ist.</p>

        <h3>4. Omitted Variable Bias (OVB)</h3>
        <p>Beispiel: Inzinerator-Studie (Müllverbrennungsanlage auf Immobilienpreise).</p>
        <p>Simples Modell (nur Abstand): positiver Koeffizient → häuser NÄHER an Anlage sind teurer?</p>
        <p><strong>Erklärung:</strong> Die Anlage wurde in ärmeren Vierteln gebaut, die zunächst günstigere Grundstücke hatten. Sozioökonomischer Status ist eine Omitted Variable, die mit dem Abstand korreliert → OVB verzerrt den Schätzer.</p>
        <p>Formal: $\\text{plim}(\\hat{\\beta}_1) = \\beta_1 + \\beta_2 \\cdot \\delta_{12}$, wobei $\\delta_{12}$ die Regression der omitted variable auf $x_1$ ist.</p>
    `},
    ],
});
