/* Public Economics */
SUBJECTS.push(
{
  name: "Public Economics",
  icon: "🏛️",
  description: "Advanced Theory and Applications: Inequality, Rent-Seeking, and Impure Public Goods",

  theory: [
    {id: 1, title: "Definitions of Income and Equivalence Scales", html: `
      <h2>Definitions of Income</h2>
      <p>Measuring income is complex because income is a <strong>flow</strong> that is typically measured over a specific period of time.</p>

      <h3>Simons (1938) Definition</h3>
      <p>Simons introduced a comprehensive and backward-looking definition of personal income. According to Simons, personal income is the sum of:</p>
      <ul>
        <li>the value of <strong>consumption</strong>, and</li>
        <li>the <strong>change in the value of the store of wealth</strong>.</li>
      </ul>
      <p>A key implication of this definition is that <strong>capital gains are treated as income even when they have not yet been realized</strong>.</p>

      <h3>Hicks (1939) Definition</h3>
      <p>Hicks proposed a forward-looking and welfare-based concept of income. He defined income as the <strong>maximum amount a person can consume during a week and still expect to be as well-off at the end of the week as at the beginning</strong>.</p>
      <p>This approach focuses more strongly on welfare and expectations. Although uncertainty can be incorporated, <strong>unexpected gains are generally not treated as income</strong>.</p>

      <h3>Practical Relevance</h3>
      <p>In practice, the definitions of income that are used in tax systems rarely correspond exactly to either the Simons or the Hicks definition.</p>

      <hr>

      <h2>Equivalence Scales</h2>
      <p>Households differ in size and demographic composition, for example in the number of adults, the number of children, and the ages of household members.</p>
      <p>Because a larger household needs more income than a smaller household to achieve the same level of welfare, observed household income must be <strong>adjusted</strong> to make households comparable. This adjustment is made using <strong>equivalence scales</strong>.</p>

      <h3>Minimum Needs Scale</h3>
      <p>This approach is based on the cost of a <strong>basic bundle of goods and services</strong>, which differs depending on the household's demographic composition.</p>
      <p>For example, in the Rowntree scale, <strong>$60 for a single person is considered equivalent to $100 for a couple</strong>.</p>

      <h3>Engel Scale</h3>
      <p>The Engel scale is based on the hypothesis that the <strong>share of expenditure devoted to food</strong> reflects a household's welfare level.</p>
      <p>Two households are treated as having equivalent incomes if, despite demographic differences, they spend the <strong>same proportion of their budget on food</strong>.</p>

      <h3>Adult Good Scale</h3>
      <p>This method adjusts for the presence of children by focusing on goods that are consumed <strong>only by adults</strong>.</p>
      <p>Households are considered equivalent if their incomes generate the <strong>same level of demand for adult-specific goods</strong>.</p>

      <h3>General Approach</h3>
      <p>To overcome the limitations of the previous methods, a more general approach defines the equivalence scale as the <strong>minimum cost required to achieve a given utility level</strong> for a household with a particular demographic structure.</p>
      <p>This method assumes the existence of a formal <strong>household utility function</strong>, which can be used to derive equivalent budget lines for different household types.</p>
      `
    },
    {id: 2, title: "Inequality Measures", html: `
        <h2>Inequality</h2>
        <p>Inequality refers to an <strong>unequal distribution of income or wealth</strong> across a population.</p>
        <p>To quantify inequality, economists use <strong>inequality measures</strong>. These are single numbers that usually assign a value between <strong>0</strong> and <strong>1</strong> to a given distribution, where:</p>
        <ul>
          <li><strong>0</strong> indicates complete equality,</li>
          <li><strong>1</strong> indicates complete inequality.</li>
        </ul>

        <h3>The Pigou-Dalton Principle</h3>
        <p>A fundamental requirement for any credible inequality measure is the <strong>Pigou-Dalton Principle of Transfers</strong>.</p>
        <p>This principle states that an inequality index must <strong>decrease</strong> if income is transferred from a richer household to a poorer household, as long as:</p>
        <ul>
          <li>their relative rankings remain unchanged, and</li>
          <li>total income stays constant.</li>
        </ul>
        <p>Measures that do not satisfy this principle are generally seen as less suitable, because they are not sufficiently sensitive to redistributions within the income distribution.</p>

        <hr>

        <h2>Statistical Measures of Inequality</h2>

        <h3>The Range (R)</h3>
        <p>The <strong>Range</strong> is the simplest inequality measure. It is calculated as the difference between the <strong>highest</strong> and the <strong>lowest</strong> income, divided by the <strong>mean income</strong>.</p>
        <p>Its main weakness is that it ignores all incomes between the two extremes.</p>

        <h3>Relative Mean Deviation (D)</h3>
        <p>The <strong>Relative Mean Deviation</strong> takes all incomes into account.</p>
        <p>However, it is <strong>insensitive to transfers</strong> between households that are both on the same side of the mean income level, meaning it does not fully reflect some redistributions.</p>

        <h3>Coefficient of Variation (C)</h3>
        <p>The <strong>Coefficient of Variation</strong> satisfies the <strong>Pigou-Dalton Principle</strong>.</p>
        <p>Unlike the Range or the Relative Mean Deviation, it responds appropriately to redistributions from richer to poorer households.</p>
        <p>However, its effect depends only on the <strong>income difference</strong> between households. Some economists argue that transfers should have a larger effect when they occur at <strong>lower income levels</strong>.</p>

        <hr>

        <h2>The Lorenz Curve and the Gini Coefficient</h2>

        <h3>The Lorenz Curve</h3>
        <p>The <strong>Lorenz Curve</strong> is the most common graphical representation of inequality.</p>
        <p>It shows:</p>
        <ul>
          <li>the cumulative proportion of the <strong>population</strong> (ranked from poorest to richest), and</li>
          <li>the cumulative proportion of <strong>total income</strong> received by that population share.</li>
        </ul>
        <p>In a perfectly equal society, the Lorenz Curve would coincide with the <strong>45-degree diagonal</strong>.</p>
        <p>The further the Lorenz Curve lies below this diagonal, the <strong>greater the degree of inequality</strong>.</p>

        <h3>The Gini Coefficient (G)</h3>
        <p>The <strong>Gini Coefficient</strong> is the most common numerical measure of inequality.</p>
        <p>Geometrically, it is defined as <strong>twice the area between the Lorenz Curve and the 45-degree diagonal</strong>.</p>
        <p>The Gini Coefficient:</p>
        <ul>
          <li>provides a complete ranking of distributions, and</li>
          <li>satisfies the <strong>Pigou-Dalton Principle</strong>.</li>
        </ul>
        <p>However, it is a <strong>linear</strong> measure. This means its response to a transfer depends only on the <strong>rank positions</strong> of the households involved, not on their absolute income levels.</p>

        <hr>

        <h2>The Atkinson Measure</h2>
        <p>While statistical measures contain only <em>implicit</em> welfare assumptions, the <strong>Atkinson Measure</strong> makes welfare judgments <strong>explicit</strong> by starting from a <strong>social welfare function</strong>.</p>

        <h3>MEDE</h3>
        <p>The Atkinson approach uses the concept of <strong>Equally Distributed Equivalent Income (MEDE)</strong>.</p>
        <p>This is the level of income which, if received equally by everyone, would generate the <strong>same total utility</strong> as the actual unequal income distribution.</p>

        <h3>The Measure (A)</h3>
        <p>The Atkinson inequality measure is calculated as:</p>
        <p>$$A = 1 - \\frac{\\text{MEDE}}{\\bar{M}}$$</p>
        <p>where $\\bar{M}$ is mean income.</p>

        <h3>Parameter e</h3>
        <p>The parameter <strong>e</strong> reflects the degree of <strong>social concern for equity</strong>.</p>
        <p>As <strong>e</strong> increases, the utility function becomes more <strong>concave</strong>, which means that society gives relatively more weight to income transfers benefiting the <strong>very poor</strong>.</p>

        <hr>

        <h2>Market Inequality vs. Net Inequality</h2>
        <p>In applied research, especially in studies by the <strong>OECD</strong>, economists distinguish between:</p>
        <ul>
          <li><strong>market inequality</strong> — inequality before taxes and transfers, and</li>
          <li><strong>net inequality</strong> — inequality after taxes and transfers.</li>
        </ul>
        <p>These studies show that tax and transfer systems are generally <strong>redistributive</strong>.</p>
        <p>At the same time, market inequality has increased over time in many countries.</p>
        <p>Researchers often control for <strong>age</strong>, for example by focusing on people <strong>under age 60</strong>, in order to avoid distortions caused by early retirement when analyzing labor market inequality.</p>
`},
   {id: 3, title: "Poverty, Equality of Opportunity, and Intergenerational Mobility", html: `
      <h2>Poverty</h2>
      <p>Poverty is defined as the possession of <strong>fewer resources than necessary to attain an acceptable standard of living</strong>.</p>
      <p>Poverty must be distinguished from <strong>inequality</strong>. Inequality refers to the overall distribution of resources across the population, whereas poverty focuses specifically on the existence of <strong>very low incomes</strong>.</p>

      <h3>Concepts and Delineation of Poverty</h3>
      <p>To determine who is poor and who is not, economists use a <strong>poverty line</strong>, denoted by <strong>z</strong>.</p>
      <p>There are two main approaches to defining this poverty line:</p>

      <h3>Absolute Poverty</h3>
      <p><strong>Absolute poverty</strong> assumes that there is a fixed minimum level of consumption that defines poverty, regardless of time or place.</p>
      <p>An example is the <strong>United States</strong>, where the poverty line is based on a package of minimum needs.</p>

      <h3>Relative Poverty</h3>
      <p><strong>Relative poverty</strong> is defined in relation to the standards of a specific society and period of time.</p>
      <p>An example is the <strong>United Kingdom</strong>, where the poverty line is defined as a proportion of the minimum benefit level.</p>

      <hr>

      <h2>Measuring Poverty</h2>
      <p>Economists use different poverty indices, ranging from simple counts to more comprehensive welfare-based measures.</p>

      <h3>Headcount Ratio (E)</h3>
      <p>The <strong>Headcount Ratio</strong> is the simplest poverty measure.</p>
      <p>It is calculated as the number of poor households or individuals <strong>q</strong> divided by the total population <strong>H</strong>.</p>
      <p>This measure is easy to compute, but it does <strong>not capture the depth of poverty</strong>.</p>

      <h3>Aggregate Poverty Gap (V)</h3>
      <p>The <strong>Aggregate Poverty Gap</strong> is the sum of all income shortfalls of those below the poverty line.</p>
      <p>For a poor household $h$, the poverty gap is:</p>
      <p>$$g_h = z - M_h$$</p>
      <p>This measure shows the <strong>total amount of income required to eliminate poverty</strong>.</p>
      <p>However, it does not account for the number of poor people or for transfers among the poor.</p>

      <h3>Income Gap Ratio (I)</h3>
      <p>The <strong>Income Gap Ratio</strong> measures the <strong>average shortfall</strong> of poor households relative to the poverty line.</p>
      <p>A weakness of this measure is that it can produce a paradoxical result: if one household is lifted out of poverty, the average poverty gap among the remaining poor may increase, making poverty appear worse even though one household has improved.</p>

      <h3>Sen Measure (S)</h3>
      <p>The <strong>Sen Measure</strong> is a more comprehensive poverty index.</p>
      <p>It combines:</p>
      <ul>
        <li>the <strong>headcount ratio</strong>,</li>
        <li>the <strong>average income shortfall</strong>, and</li>
        <li>the <strong>Gini coefficient among the poor</strong> ($G_p$).</li>
      </ul>
      <p>This measure is designed to satisfy important axioms and gives <strong>greater weight to the poorest households</strong>.</p>

      <h3>FGT Class ($P_\\alpha$)</h3>
      <p>The <strong>FGT class of poverty measures</strong> forms a family of indices that satisfy <strong>subgroup consistency</strong>.</p>
      <p>This means that overall poverty rises whenever poverty rises in any subgroup of the population.</p>
      <p>Depending on the value of the parameter $\\alpha$, the FGT measure takes different forms:</p>
      <ul>
        <li>$\\alpha = 0$: the measure is the <strong>Headcount Ratio</strong>,</li>
        <li>$\\alpha = 1$: the measure combines the headcount and the poverty gap,</li>
        <li>$\\alpha > 1$: the measure becomes increasingly sensitive to the <strong>poorest households</strong>.</li>
      </ul>

      <hr>

      <h2>Equality of Opportunity</h2>
      <p><strong>Equality of Opportunity</strong> is a non-welfarist policy concept that focuses not only on outcomes, but also on <strong>how those outcomes are generated</strong>.</p>
      <p>It distinguishes between two main sources of inequality:</p>

      <h3>Effort</h3>
      <p><strong>Effort</strong> includes factors for which individuals are personally responsible.</p>
      <p>If inequality arises from different levels of effort, it is generally argued that policy <strong>should not compensate</strong> for these differences.</p>

      <h3>Circumstances</h3>
      <p><strong>Circumstances</strong> include factors beyond individual control, such as:</p>
      <ul>
        <li>family background,</li>
        <li>race,</li>
        <li>gender,</li>
        <li>place of birth.</li>
      </ul>
      <p>Inequality arising from such circumstances <strong>should be compensated</strong> according to the equality of opportunity view. This idea provides an important justification for <strong>affirmative action</strong>.</p>

      <h3>Measurement</h3>
      <p>Equality of opportunity is formally measured using <strong>stochastic dominance</strong>.</p>
      <p>Equality of opportunity exists when no set of circumstances is preferred by all individuals.</p>
      <p>The standard criterion is <strong>first-order stochastic dominance</strong>:</p>
      <p>$$F(x \\mid s) \\leq F(x \\mid s')$$</p>
      <p>In addition, <strong>second-order stochastic dominance</strong> and <strong>Gini-type indices</strong> can also be used to detect inequality of opportunity.</p>

      <hr>

      <h2>Intergenerational Inequality and Mobility</h2>
      <p><strong>Social mobility</strong> occurs when children achieve a different social status from their parents.</p>
      <p>Formally, this means that there is no strong correlation between the <strong>education</strong> or <strong>earnings</strong> of parents and those of their children.</p>

      <h3>Measurement</h3>
      <p>Intergenerational mobility is measured using <strong>correlations</strong> and <strong>elasticities</strong>.</p>
      <p>An elasticity greater than <strong>1</strong> indicates that inequality is becoming stronger across generations.</p>

      <h3>Transition Matrices</h3>
      <p><strong>Transition matrices</strong> are used to estimate mobility at particular points of the income distribution.</p>
      <p>For example, in the United States, around <strong>40%</strong> of sons born to fathers in the lowest quintile remain in that same quintile.</p>

      <h3>Contributing Factors</h3>
      <p>Intergenerational mobility is influenced by both <strong>nature</strong> and <strong>nurture</strong>.</p>
      <p>Important contributing factors include:</p>
      <ul>
        <li>education,</li>
        <li>credit constraints,</li>
        <li>social segregation.</li>
      </ul>
      <p>These factors can reinforce attitudes and structures that help sustain inequality over time.</p>
    `},
    {id: 4, title: "Rent-Seeking", html: `
    <h2>Rent-Seeking</h2>
    <p><strong>Rent-seeking</strong>, also called <strong>privilege-seeking</strong>, refers to the <strong>unproductive activity of attempting to capture an existing income flow rather than creating a new one</strong>.</p>
    <p>This distinguishes rent-seeking from <strong>profit-seeking</strong>. In the ideal case, profit-seeking is socially beneficial because it creates new opportunities and generates <strong>innovation rents</strong>. By contrast, rent-seeking uses resources to create or preserve profitable opportunities that are <strong>socially harmful</strong>, for example by hiring lawyers or lobbyists to block substitute imports in order to protect a monopoly position.</p>

    <hr>

    <h2>Rent-Seeking Games</h2>
    <p>Rent-seeking games analyze how many resources will be wasted in the attempt to win a specific <strong>prize</strong> or <strong>rent</strong>, denoted by <strong>V</strong>.</p>
    <p>The resources spent in these games, such as lobbying expenditures or legal fees, are effectively <strong>burnt</strong>. They represent a <strong>net loss to society</strong> because they do not create additional output.</p>

    <h3>The Deterministic Game</h3>
    <p>In the <strong>deterministic game</strong>, there is no uncertainty. A marginally higher bid always guarantees victory.</p>

    <h3>Equilibrium</h3>
    <p>There is <strong>no pure-strategy equilibrium</strong> in this setting, because each competitor always has an incentive to bid slightly more than the rival in order to secure the entire prize.</p>
    <p>Instead, the equilibrium is in <strong>mixed strategies</strong>, where players choose bids according to a probability distribution with density $\\frac{1}{V}$.</p>

    <h3>Complete Dissipation Theorem</h3>
    <p>The <strong>Complete Dissipation Theorem</strong> states that if there are <strong>two or more competitors</strong> in a deterministic rent-seeking game, the <strong>total expected resources expended are exactly equal to the value of the prize $V$</strong>.</p>
    <p>As a result, the existence of the prize yields <strong>no net social benefit</strong>, because its entire value is dissipated in the rent-seeking process.</p>

    <h3>The Probabilistic Game</h3>
    <p>In the <strong>probabilistic game</strong>, a higher bid increases the probability of winning, but it does <strong>not guarantee success</strong>.</p>

    <h3>Logic of the Model</h3>
    <p>The usual assumption is that an individual's probability of winning is equal to that individual's <strong>share of total rent-seeking expenditure</strong>.</p>

    <h3>Partial Dissipation Theorem</h3>
    <p>In a probabilistic game with $n$ competitors, the <strong>total expected resources expended</strong> equal the fraction:</p>
    <p>$$\\frac{n-1}{n} \\cdot V$$</p>
    <p>This means that full dissipation does not occur, but the total waste increases as the number of competitors grows.</p>

    <h3>Outcome</h3>
    <p>Although society does not lose the full value of the prize when the number of competitors is finite, the fraction of the prize wasted becomes larger as $n$ increases and tends toward <strong>1</strong>.</p>

    <hr>

    <h2>Social and Economic Consequences</h2>

    <h3>Monopoly Cost</h3>
    <p>Rent-seeking theory changes the assessment of the <strong>social cost of monopoly</strong>.</p>
    <p>In standard economic analysis, the cost of monopoly is usually limited to the <strong>deadweight loss</strong>, denoted by <strong>d</strong>.</p>
    <p>Rent-seeking analysis argues that the true social cost is much larger:</p>
    <p>$$\\pi + d$$</p>
    <p>Here, $\\pi$ represents monopoly profits, which may be fully dissipated by competitors trying to secure or defend the monopoly position.</p>

    <h3>Resource Misallocation</h3>
    <p>Rent-seeking leads to <strong>resource misallocation</strong> because it shifts resources away from productive uses and toward unproductive activities such as lobbying, legal protection, and privilege-seeking.</p>

    <h3>Reduction in Potential Output</h3>
    <p>By diverting labor and other resources away from production, rent-seeking reduces the economy's <strong>potential output</strong>.</p>
    <p>In terms of production theory, the <strong>production possibility frontier (PPF)</strong> shifts inward.</p>

    <hr>

    <h2>Informative Lobbying</h2>
    <p><strong>Lobbying</strong> is a major form of rent-seeking. It can make a positive contribution only if lobbyists are <strong>better informed than the policy-maker</strong> and are able to provide <strong>credible information</strong>.</p>

    <h3>Credibility Condition</h3>
    <p>A policy-maker will accept a lobbyist's report as honest only if the divergence in preferences between the two is sufficiently small.</p>
    <p>Let $\\Delta$ denote this preference divergence. In a two-state model, the condition for an honest report is:</p>
    <p>$$\\Delta \\leq \\frac{q_h - q_l}{2}$$</p>
    <p>If this condition is satisfied, truthful communication is possible.</p>

    <h3>Failure of Honest Reporting</h3>
    <p>If this condition is <strong>not</strong> satisfied, the lobbyist has a rational incentive to <strong>misreport</strong> information.</p>
    <p>In that case, the policy-maker will ignore the report and choose a policy that is likely to be <strong>incorrect in both possible states of the world</strong>.</p>
`},
    {id: 5, title: "Informative Lobbying", html: `
      <h2>Informative Lobbying</h2>
      <p><strong>Informative lobbying</strong> occurs when a lobbyist, who is better informed about the future state of the world than the policy-maker, communicates <strong>credible information</strong> that improves policy decisions.</p>
      <p>Although lobbying is often seen as an <strong>unproductive rent-seeking activity</strong>, it can make a positive contribution if it helps solve the problem of <strong>information transmission</strong>.</p>

      <hr>

      <h2>The Conflict of Interest</h2>
      <p>The central difficulty of informative lobbying is that the <strong>preferences of the lobbyist and the policy-maker are not usually identical</strong>.</p>
      <p>In economic models, this disagreement is represented by the parameter $\\Delta$, which measures the <strong>divergence of preferences</strong>.</p>

      <h3>The Policy-Maker</h3>
      <p>The <strong>policy-maker</strong> wants to choose a policy, denoted by <strong>p</strong> or $\\pi$, that matches the true state of the world, denoted by <strong>q</strong> or $\\theta$.</p>
      <p>The objective is to maximize <strong>social welfare</strong> by selecting the policy that is appropriate for the actual state.</p>

      <h3>The Lobbyist</h3>
      <p>The <strong>lobbyist</strong> knows the true state of the world, but does not share the same objective as the policy-maker.</p>
      <p>Instead, the lobbyist prefers a policy shifted in their own favor, namely $q + \\Delta$.</p>

      <hr>

      <h2>The Condition for Credibility</h2>
      <p>A policy-maker will only rely on a lobbyist's message if that message is <strong>credible</strong>.</p>
      <p>In the basic model, there are two possible states of the world:</p>
      <ul>
        <li>a <strong>low state</strong> $q_l$, and</li>
        <li>a <strong>high state</strong> $q_h$.</li>
      </ul>
      <p>The problem is that the lobbyist may have an incentive to report the <strong>high state</strong> even when the true state is low, because this can induce the policy-maker to choose a higher policy level.</p>

      <h3>Truthful Reporting</h3>
      <p>Lobbying is informative only if the lobbyist has <strong>no rational incentive to lie</strong>.</p>
      <p>In the two-state model, truthful reporting can be sustained only if:</p>
      <p>$$\\Delta \\leq \\frac{q_h - q_l}{2}$$</p>
      <p>This means that the disagreement between the lobbyist and the policy-maker must be sufficiently small.</p>
      <p>More precisely, the preference divergence $\\Delta$ must be less than or equal to <strong>half the distance between the two states</strong>.</p>

      <h3>Failure of Credibility</h3>
      <p>If $\\Delta$ is too large, the lobbyist will always prefer to report the <strong>high state</strong>, regardless of the truth.</p>
      <p>Once the policy-maker understands this, the report loses credibility and is ignored.</p>
      <p>The policy-maker then chooses a <strong>default policy</strong>, which is likely to be incorrect in both possible states of the world.</p>

      <hr>

      <h2>Many States and Partial Revelation</h2>
      <p>When the number of possible states increases, the differences between neighboring states, such as $q_{i+1} - q_i$, become smaller.</p>
      <p>This makes credible communication more difficult, because even a small preference divergence $\\Delta$ may become too large relative to the distance between states.</p>

      <h3>Partial Revelation</h3>
      <p>To address this problem, models of informative lobbying often rely on <strong>partial revelation</strong> instead of full revelation.</p>

      <h3>Partitioning</h3>
      <p>The possible states are grouped into broader <strong>partitions</strong>, for example:</p>
      <ul>
        <li>a <strong>Low</strong> group (<strong>L</strong>), and</li>
        <li>a <strong>High</strong> group (<strong>H</strong>).</li>
      </ul>

      <h3>Group Reporting</h3>
      <p>The lobbyist does not report the exact state, but only indicates <strong>which partition</strong> the true state belongs to.</p>
      <p>This reduces the temptation to misreport, because the communicated information is less precise.</p>

      <h3>Honesty Range</h3>
      <p>The lobbyist reports the partition honestly only if $\\Delta$ lies within a certain interval:</p>
      <p>$$\\frac{q_{i+1} - p(H) - p(L)}{2} \\leq \\Delta \\leq \\frac{q_i - p(H) - p(L)}{2}$$</p>
      <p>Here, $p(L)$ and $p(H)$ are the policies chosen by the policy-maker after receiving a low or high report.</p>
      <p>Even under partial revelation, credible information transmission is possible only when the divergence of preferences remains sufficiently limited.</p>
`},
 {id: 6, title: "Club Goods", html: `
      <h2>Club Goods</h2>
      <p>A <strong>club good</strong> is a type of <strong>impure public good</strong> that is either <strong>nonrivalrous</strong> or only <strong>partly rivalrous</strong>, but for which <strong>exclusion</strong> of non-members is possible.</p>
      <p>This distinguishes club goods from <strong>pure public goods</strong>, where providers cannot prevent individuals from consuming the good.</p>
      <p>In the case of club goods, access can be restricted either through <strong>literal exclusion</strong>, such as membership checks, or through <strong>legal exclusion</strong>, such as formal entitlement rules.</p>
      <p>Typical examples include <strong>sports clubs</strong>, <strong>shared facilities</strong>, and international organizations such as <strong>NATO</strong>.</p>

      <hr>

      <h2>Preference Revelation</h2>
      <p>A special feature of club goods is that the problem of <strong>preference revelation</strong> is largely absent.</p>
      <p>Because individuals must actively decide whether to <strong>join the club</strong> and pay a <strong>membership fee</strong>, their decision reveals their willingness to pay for the good provided.</p>
      <p>The collection of membership fees also ensures that the club can, in principle, <strong>break even financially</strong>.</p>

      <hr>

      <h2>The Fundamental Trade-off</h2>
      <p>According to the <strong>Buchanan Model (1965)</strong>, internal efficiency in a club is achieved by balancing two opposing effects.</p>

      <h3>Cost Sharing</h3>
      <p>When more members are admitted, existing members benefit because the <strong>total cost of providing the good is shared among more people</strong>.</p>
      <p>This lowers the <strong>individual fee</strong> or cost burden for each member.</p>

      <h3>Congestion</h3>
      <p>At the same time, adding more members can reduce utility because it leads to <strong>congestion</strong>.</p>
      <p>Congestion means that the club good or facility becomes <strong>overcrowded</strong> or <strong>over-utilized</strong>, which lowers the benefit each member receives.</p>

      <hr>

      <h2>Optimization Conditions</h2>
      <p>Efficiency in a <strong>single-product club</strong> is achieved when two conditions are satisfied.</p>

      <h3>Optimal Provision</h3>
      <p>The first condition is a variant of the <strong>Samuelson condition</strong>.</p>
      <p>The sum of the <strong>marginal rates of substitution</strong> of all club members must equal the <strong>marginal cost</strong> of providing the good:</p>
      <p>$$n \\times MRS = MC$$</p>
      <p>This determines the <strong>optimal quantity of the club good</strong>.</p>

      <h3>Optimal Membership</h3>
      <p>The second condition determines the <strong>optimal number of members</strong>.</p>
      <p>Efficiency requires that the <strong>marginal utility cost of an additional member</strong>—that is, the utility loss caused by congestion—must be exactly equal to the <strong>benefit from improved cost sharing</strong>.</p>
      <p>This condition can be written as:</p>
      <p>$$MRS_{n,x} = -\\frac{C(G)}{n^2}$$</p>

      <hr>

      <h2>Economy-wide Efficiency</h2>
      <p>Even if individual clubs are internally efficient, this does <strong>not automatically guarantee efficiency for the economy as a whole</strong>.</p>

      <h3>Small Clubs</h3>
      <p>If the <strong>optimal club size is small</strong> relative to the total population, the economy will tend toward efficiency as the number of optimally sized clubs increases.</p>
      <p>In the limit, the population can be divided into many clubs operating close to their efficient size.</p>

      <h3>Large Clubs</h3>
      <p>If the <strong>optimal membership size is large</strong> relative to the total population, an <strong>integer problem</strong> arises.</p>
      <p>In this case, it is impossible to divide the population into a set of clubs that all have the exact efficient size.</p>
      <p>As a result, some individuals may be <strong>excluded</strong>, or some clubs may have to operate with <strong>inefficient membership levels</strong>.</p>
`},
   {id: 7, title: "Local Public Goods and the Tiebout Hypothesis", html: `
      <h2>Local Public Goods</h2>
      <p><strong>Local public goods</strong> are a specific type of <strong>impure public good</strong> that are defined mainly by <strong>geographic restriction</strong>.</p>
      <p>They provide benefits only to individuals living within a particular <strong>area</strong> or <strong>locality</strong>.</p>
      <p>Unlike pure public goods, where exclusion is often impossible, exclusion from a local public good is usually a matter of <strong>policy</strong>.</p>
      <p>For example, local governments may use <strong>residency requirements</strong> or <strong>immigration controls</strong> to restrict access.</p>

      <hr>

      <h2>Dynamics of Local Public Goods</h2>
      <p>The provision of local public goods involves a basic economic trade-off related to <strong>population size</strong>.</p>

      <h3>Cost Sharing</h3>
      <p>As the population of a locality increases, the <strong>cost per resident</strong> of financing the public good falls.</p>
      <p>This is because the total cost of provision, denoted by <strong>G</strong>, is divided among a larger number of residents, denoted by <strong>h</strong>.</p>

      <h3>Congestion</h3>
      <p>At the same time, a larger population can create <strong>congestion</strong>.</p>
      <p>Congestion means crowding or the dilution of fixed local resources, which reduces the <strong>utility of individual residents</strong>.</p>

      <h3>Efficiency Rule</h3>
      <p>A locality achieves optimal provision when it satisfies a local variant of the <strong>Samuelson rule</strong>.</p>
      <p>This condition requires that the sum of the marginal rates of substitution equals <strong>1</strong>:</p>
      <p>$$h \\cdot \\frac{U_G}{U_x} = 1$$</p>

      <h3>Free Location Choice</h3>
      <p>In a system without enforced exclusion, individuals can move freely between jurisdictions.</p>
      <p>Population will then redistribute itself until an equilibrium is reached in which <strong>no consumer has an incentive to move</strong>.</p>
      <p>However, free mobility alone does <strong>not guarantee efficiency</strong>, because the movement of one individual affects the welfare of both the locality they leave and the locality they join.</p>
      <p>These effects are examples of <strong>non-market linkages</strong>.</p>

      <hr>

      <h2>The Tiebout Hypothesis</h2>
      <p>The <strong>Tiebout Hypothesis</strong>, developed by <strong>Charles Tiebout in 1956</strong>, argues that the usual inefficiencies associated with public goods, especially the <strong>free-rider problem</strong>, do not necessarily apply at the local level.</p>

      <h3>Core Mechanism: Voting with Feet</h3>
      <p>The central idea is that if there are enough communities offering different combinations of <strong>taxes</strong> and <strong>public goods</strong>, consumers will behave like <strong>competitive buyers</strong> in a private market.</p>
      <p>By choosing to live in the community that best matches their preferences, consumers effectively <strong>vote with their feet</strong>.</p>
      <p>This process replaces the normal market test of willingness to pay and forces individuals to reveal their preferences through their <strong>location choice</strong>.</p>
      <p>As a result, the information problem that usually complicates the provision of national public goods may be reduced at the local level.</p>

      <hr>

      <h2>The Seven Assumptions for Efficiency</h2>
      <p>For the Tiebout model to generate a market-like efficient outcome, seven strong assumptions are required.</p>

      <h3>1. Full Mobility</h3>
      <p>Consumer-voters are completely free to move to the community that best satisfies their preferences.</p>

      <h3>2. Full Knowledge</h3>
      <p>Consumers possess perfect information about the <strong>revenue</strong> and <strong>expenditure patterns</strong> of all communities.</p>

      <h3>3. Large Number of Communities</h3>
      <p>There must be many communities so that individuals have a wide range of options to choose from.</p>

      <h3>4. No Employment Restrictions</h3>
      <p>Location decisions must not be determined by employment.</p>
      <p>This requires either that income comes from <strong>rents or dividends</strong>, or that employment opportunities are identical across communities.</p>

      <h3>5. No Externalities</h3>
      <p>Public services provided by one community must not create benefits or costs for neighboring communities.</p>

      <h3>6. Optimal Community Size</h3>
      <p>For every bundle of public services, there is an <strong>optimal population size</strong> at which average cost is minimized.</p>

      <h3>7. Community Adaptation</h3>
      <p>Communities below their optimal size try to attract new residents in order to reduce average costs.</p>
      <p>Communities above the optimum attempt to limit further growth, for example through <strong>zoning laws</strong>, or try to reduce population.</p>

      <hr>

      <h2>Limitations and Empirical Evidence</h2>

      <h3>Limitations</h3>
      <p>The Tiebout Hypothesis has important limitations in practice.</p>
      <p>Real-world mobility is constrained by factors such as <strong>housing market frictions</strong> and the fact that many people are tied to a location because of their <strong>employment</strong>.</p>

      <h3>Tax Capitalization</h3>
      <p>An important empirical study by <strong>Oates (1969)</strong> found that house prices in New Jersey were higher in communities that provided more local public goods.</p>
      <p>This suggests that the benefits of local public services are <strong>capitalized into property values</strong>.</p>

      <h3>Preference Sorting</h3>
      <p><strong>Gramlich and Rubinfeld (1982)</strong> found evidence from Michigan suburbs that residents sort themselves according to their preferences.</p>
      <p>Variation in demand within a given location was much smaller than variation across locations, which supports the idea of <strong>preference sorting</strong>.</p>

      <h3>Overall Assessment</h3>
      <p>Tiebout's argument is ultimately that, although the model is highly abstract, local government may represent a part of the public sector in which the allocation of public goods can reflect individual preferences <strong>almost as effectively as private markets</strong>.</p>
`},

  {id: 8, title: "Gini Coefficient: Formula and Social Welfare Interpretation", html: `
    <h2>Gini Coefficient: Exact Formula</h2>
    <p>With $H$ households with incomes ordered $M_1 \\leq M_2 \\leq \\ldots \\leq M_H$ and mean $\\bar{M}$:</p>
    <p>$$G = 1 - \\frac{1}{H^2 \\bar{M}} \\sum_i \\sum_j \\min\{M_i, M_j\}$$</p>
    <p>Alternative (counting appearances of each income level):</p>
    <p>$$G = 1 - \\frac{1}{H^2 \\bar{M}} \\cdot \\left([2H-1]M_1 + [2H-3]M_2 + \\ldots + M_H\\right)$$</p>
    <h3>Geometric interpretation</h3>
    <p>$G$ = twice the area between the Lorenz curve and the 45° diagonal.</p>
    <h3>Response to a transfer</h3>
    <p>If an amount $\\Gamma$ is transferred from household $i$ (poorer) to $j$ (richer) with $i < j$:</p>
    <p>$$\\Delta G = \\frac{2}{H^2 \\bar{M}} \\cdot (j - i) \\cdot \\Gamma > 0$$</p>
    <p>The change depends only on the <strong>rank difference</strong> $(j - i)$, not on absolute income levels. This is why the Gini is called "linear."</p>
    <h3>Atkinson's Theorem (14.2)</h3>
    <p>If two distributions have the same mean and their Lorenz curves do not cross, then every symmetric and concave welfare function $W = W(M_1, \\ldots, M_H)$ assigns higher welfare to the distribution with the Lorenz curve closest to the diagonal.</p>
    <p><em>Implication:</em> When Lorenz curves cross, we cannot rank distributions without additional welfare assumptions.</p>
  `},

  {id: 9, title: "Atkinson Measure: Formal Derivation", html: `
    <h2>Atkinson Measure: Formal Setup</h2>
    <p>Start from a utilitarian welfare function:</p>
    <p>$$W = \\sum_h U(M_h)$$ where $U'(M) > 0$ and $U''(M) < 0$ (concave)</p>
    <h3>MEDE (Equally Distributed Equivalent Income)</h3>
    <p>Define $M^{EDE}$ by: $\\sum_h U(M_h) = H \\cdot U(M^{EDE})$</p>
    <p>$M^{EDE}$ is the income level which, if received equally by all, gives the same total welfare as the actual distribution. Since $U$ is concave: $M^{EDE} < \\bar{M}$.</p>
    <h3>Atkinson inequality measure</h3>
    <p>$$A = 1 - \\frac{M^{EDE}}{\\bar{M}}$$</p>
    <p>$A \\in [0,1]$. $A = 0$ means perfect equality; $A = 1$ means all income held by one person.</p>
    <h3>Parameterization</h3>
    <p>The standard functional form is:</p>
    <p>$$U(M) = \\frac{M^{1-e}}{1-e} \\text{ for } e \\neq 1; \\quad U(M) = \\log(M) \\text{ for } e = 1$$</p>
    <p>The parameter $e \\geq 0$ captures social concern for equity:</p>
    <ul>
      <li>$e = 0$: no concern for distribution ($A = 0$ always)</li>
      <li>$e = 1$: logarithmic utility; moderate equity concern</li>
      <li>$e \\to \\infty$: extreme Rawlsian concern — only the welfare of the poorest matters</li>
    </ul>
    <p>Higher $e \\Rightarrow$ more concave utility $\\Rightarrow$ transfers to the poor have larger welfare effects $\\Rightarrow$ higher $A$ for the same distribution.</p>
  `},

  {id: 10, title: "Complete Dissipation: Mixed Strategy Derivation", html: `
    <h2>Deterministic Rent-Seeking Game: Derivation</h2>
    <p>Prize $= V$. Two competitors burn money; highest amount burned wins.</p>
    <h3>No pure-strategy equilibrium</h3>
    <p>If player 1 burns $B^*$, player 2 burns $B^* + \\varepsilon$ and wins $V$. This is profitable for any $B^* < V$. But $B = V$ gives $EP = \\frac{1}{2}V - V = -\\frac{1}{2}V < 0$. So no pure-strategy equilibrium exists.</p>
    <h3>Mixed-strategy equilibrium</h3>
    <p>The equilibrium strategy is to draw each burn amount from a uniform distribution over $[0, V]$:</p>
    <p>$$f(B) = \\frac{1}{V} \\text{ (density)}, \\quad F(B) = \\frac{B}{V} \\text{ (CDF)}$$</p>
    <p>Verification: if opponent uses $f(B) = \\frac{1}{V}$, burning $B$ gives:</p>
    <p>$$EP = F(B) \\cdot V - B = \\frac{B}{V} \\cdot V - B = B - B = 0$$</p>
    <p>Each player is indifferent over all amounts — confirming this is an equilibrium.</p>
    <h3>Total dissipation</h3>
    <p>Expected burn per player $= \\int_0^V B \\cdot \\frac{1}{V} \, dB = \\frac{V}{2}$. For two players: <strong>total $= V$</strong>.</p>
    <p>The result does not depend on the number of competitors (only that there are $\\geq 2$).</p>
  `},

  {id: 11, title: "Partial Dissipation: Nash Equilibrium Derivation", html: `
    <h2>Probabilistic Rent-Seeking: Nash Equilibrium</h2>
    <p>Prize $= V$. $n$ players. Probability of winning = own share of expenditure:</p>
    <p>$$\\text{Prob}_i = \\frac{B_i}{B_i + \\sum_{j \\neq i} B_j}$$</p>
    <h3>Expected payoff</h3>
    <p>$$EP_i = \\frac{B_i}{B_i + B_{-i}} \\cdot V - B_i$$</p>
    <h3>First-order condition</h3>
    <p>Differentiating w.r.t. $B_i$ and setting $= 0$:</p>
    <p>$$\\frac{B_{-i}}{(B_i + B_{-i})^2} \\cdot V = 1$$</p>
    <h3>Symmetric equilibrium</h3>
    <p>In the symmetric Nash equilibrium, $B_i = B^*$ for all $i$, so $B_{-i} = (n-1)B^*$:</p>
    <p>$$\\frac{(n-1)B^*}{(nB^*)^2} \\cdot V = 1 \\implies B^* = \\frac{n-1}{n^2} \\cdot V$$</p>
    <h3>Total dissipation</h3>
    <p>$$n \\cdot B^* = \\frac{n-1}{n} \\cdot V$$</p>
    <p>This is less than $V$ (partial dissipation). As $n \\to \\infty$, total dissipation $\\to V$.</p>
    <p>Each player's expected payoff: $EP = \\frac{V}{n^2} > 0$. The winner gains; all others lose.</p>
  `},

  {id: 12, title: "Lobbying and Tariffs: The Tariff Model", html: `
    <h2>Tariff Lobbying Model</h2>
    <p>Small open economy; domestic firm lobbies for tariff $t$ on imports.</p>
    <h3>Setup</h3>
    <p>Cost function: $C(y_1) = \\frac{y_1^2}{2}$. World price $= 1$, so price with tariff $= 1 + t$.</p>
    <p>Profit-maximizing output: $y_1(t) = 1 + t$ (since $MC = y_1 = \\text{price}$).</p>
    <h3>Profit</h3>
    <p>$$\\pi_1(t) = (1+t)y_1 - C(y_1) = (1+t)^2 - \\frac{(1+t)^2}{2} = \\frac{(1+t)^2}{2}$$</p>
    <h3>Rent from tariff</h3>
    <p>The additional profit from the tariff (versus $t=0$):</p>
    <p>$$\\pi_1(t) - \\pi_1(0) = \\frac{(1+t)^2}{2} - \\frac{1}{2} = \\frac{2t + t^2}{2}$$</p>
    <h3>Complete dissipation of tariff rent</h3>
    <p>By the Complete Dissipation Theorem, resources spent lobbying for the tariff $= \\frac{2t+t^2}{2}$.</p>
    <p>These resources are withdrawn from other productive activities at a faster rate than the output gain $y_1(t) = 1+t$. Total output therefore falls at the rate of $t^2$ (the tariff squared).</p>
    <p><em>Policy implication:</em> The social cost of a tariff is not just the standard deadweight loss, but also includes all resources wasted in rent-seeking to obtain the tariff.</p>
  `},

  {id: 13, title: "Crawford-Sobel Model: Formal Derivation", html: `
    <h2>Crawford-Sobel Model: Two-State Case</h2>
    <p>States: $q_l < q_h$. Policy-maker (PM) assigns equal probability to each state; lobbyist (L) knows the true state.</p>
    <h3>Payoff functions</h3>
    <p>PM welfare: $W(p,q) = -(p-q)^2 \\implies$ optimal policy $p^* = q$</p>
    <p>Lobbyist payoff: $U(p,q) = -(p-q-\\Delta)^2 \\implies$ lobbyist prefers $p = q + \\Delta$</p>
    <h3>Uninformed PM's default policy</h3>
    <p>$$p^e = \\frac{q_l + q_h}{2}$$</p>
    <h3>Incentive to misreport</h3>
    <p>If state is $q_l$, lobbyist could report $q_h$ to induce PM to choose $p^e = \\frac{q_l+q_h}{2}$ instead of $q_l$. Lobbyist prefers this if the policy outcome $(q_h)$ is closer to their ideal $(q_l+\\Delta)$ than the truthful outcome $(q_l)$.</p>
    <h3>Truthfulness condition</h3>
    <p>L reports truthfully iff ideal policy in low state $\\leq$ midpoint $\\leq$ ideal policy in high state:</p>
    <p>$$q_l + \\Delta \\leq \\frac{q_l + q_h}{2}$$</p>
    <p>Rearranging: $\\Delta \\leq \\frac{q_h - q_l}{2}$</p>
    <p>Lobbying is informative iff the preference divergence is at most half the distance between states.</p>
    <h3>Many states</h3>
    <p>With more states, neighboring states are closer together. The condition $\\Delta \\leq \\frac{q_{i+1} - q_i}{2}$ becomes harder to satisfy. As the number of states $\\to \\infty$, full revelation cannot be sustained for any $\\Delta > 0$.</p>
  `},

  {id: 14, title: "Single-Product Club: Full Optimization", html: `
    <h2>Single-Product Club: Optimal Provision and Membership</h2>
    <p>Utility: $U(x, G, n)$ where $x$ = private good, $G$ = club good, $n$ = membership.</p>
    <p>Budget: $x + \\frac{C(G)}{n} = M \\implies x = M - \\frac{C(G)}{n}$</p>
    <h3>Optimization problem</h3>
    <p>$\\max \; U\!\\left(M - \\frac{C(G)}{n},\, G,\, n\\right)$ over $\{G, n\}$</p>
    <h3>First-order condition (i): Optimal provision</h3>
    <p>$\\frac{\\partial}{\\partial G}$: $U_x \\cdot \\left(-\\frac{C_G}{n}\\right) + U_G = 0 \\implies$ <strong>$n \\cdot \\frac{U_G}{U_x} = C_G$</strong></p>
    <p>This is the Samuelson rule: the sum of MRS equals the marginal cost of the club good.</p>
    <h3>First-order condition (ii): Optimal membership</h3>
    <p>$\\frac{\\partial}{\\partial n}$: $U_x \\cdot \\frac{C(G)}{n^2} + U_n = 0 \\implies$ <strong>$\\frac{U_n}{U_x} = -\\frac{C(G)}{n^2}$</strong></p>
    <p>The marginal disutility of congestion ($\\frac{U_n}{U_x} < 0$ since $U_n \\leq 0$) equals the benefit from cost sharing ($\\frac{C(G)}{n^2}$ — the reduction in each member's share when one more member joins).</p>
    <h3>Interpretation</h3>
    <ul>
      <li>Condition (i) determines the efficient quantity of the club good</li>
      <li>Condition (ii) determines the efficient number of members</li>
      <li>Membership fees that cover $C(G)$ ensure the club breaks even</li>
      <li>Joining reveals preferences — no preference revelation problem</li>
    </ul>
  `},

  {id: 15, title: "Local Public Goods: Formal Model and Equilibria", html: `
    <h2>Local Public Goods: Formal Setup</h2>
    <p>Population $H$ allocates between two localities. In a locality with population $h$:</p>
    <ul>
      <li>Income: $M(h)$ with $M'(h) < 0$ (fixed resource dilution)</li>
      <li>Cost per person: $\\frac{G}{h}$</li>
    </ul>
    <p>Utility: $U = U\!\\left(M(h) - \\frac{G}{h},\, G\\right)$</p>
    <h3>Optimal provision (Samuelson rule)</h3>
    <p>Each locality optimizes over $G$ given $h$:</p>
    <p>$$h \\cdot \\frac{U_G}{U_x} = 1$$</p>
    <h3>Equilibrium condition</h3>
    <p>No consumer has an incentive to move: utility $U(h)$ is equal across localities at the margin.</p>
    <h3>Stability of equilibria</h3>
    <p>Multiple equilibria typically exist. If $U(h)$ first rises then falls (efficient size $h^* < H/2$):</p>
    <ul>
      <li>Stable equilibria at $h=0$, $h=H$ (corner solutions — often inefficient)</li>
      <li>Interior stable equilibrium at $h^*$ may also exist</li>
      <li>Unstable equilibria separate the basins of attraction</li>
    </ul>
    <h3>Why free mobility fails efficiency</h3>
    <p>When a consumer moves, they impose externalities on both the locality they leave (reducing population) and the one they join (increasing population). These non-market linkages — not accounted for in individual decisions — cause the equilibrium to be inefficient.</p>
    <p>The Tiebout hypothesis argues that with many communities and consumers, these small-number problems vanish and efficiency is restored.</p>
  `},

  {id: 16, title: "Gini & Atkinson: Schritt-für-Schritt Berechnung", html: `
    <h2>Gini & Atkinson: Numerische Berechnung</h2>
    <p>Dieses Dokument erklärt beide Indexe vollständig an konkreten Zahlenbeispielen — so wie es in der Midterm-Prüfung verlangt wird.</p>

    <hr>

    <h2>Teil 1: Der Gini-Index</h2>

    <h3>Die zwei äquivalenten Formeln</h3>
    <p><strong>Formel 1 — Minimumsumme (Standard):</strong></p>
    <p>$$G = 1 - \\frac{1}{H^2 \\mu} \\sum_{i=1}^{H} \\sum_{j=1}^{H} \\min\\{M^i, M^j\\}$$</p>
    <p>Dabei ist $\\mu$ das Durchschnittseinkommen und $(M^i, M^j)$ ein <em>geordnetes</em> Paar — d.h. $(M^i, M^j) \\neq (M^j, M^i)$, also alle $H^2$ Kombinationen zählen.</p>

    <p><strong>Formel 2 — Zählmethode (einfacher zu rechnen):</strong></p>
    <p>$$G = 1 - \\frac{1}{H^2 \\mu} \\sum_{i=1}^{H} 2\\!\\left(H - i + \\tfrac{1}{2}\\right) M^i$$</p>
    <p>Das ergibt für $H$ Einkommen die Koeffizienten $(2H-1),\\, (2H-3),\\, \\ldots,\\, 3,\\, 1$ für $M^1 \\leq M^2 \\leq \\ldots \\leq M^H$.</p>

    <h3>Warum haben die Koeffizienten diese Form?</h3>
    <p>$M^i$ ist das Minimum in folgenden Paaren:</p>
    <ul>
      <li>allen $(M^i, M^j)$ mit $j \\geq i$ — das sind $H - i + 1$ Paare</li>
      <li>allen $(M^j, M^i)$ mit $j > i$ — das sind $H - i$ Paare</li>
      <li>dem Paar $(M^i, M^i)$ — einmal gezählt</li>
    </ul>
    <p>Insgesamt wird $M^i$ also $2(H - i + \\tfrac{1}{2})$-mal gezählt.</p>
    <p><em>Beispiel H = 4, i = 3:</em> Koeffizient $= 2(4 - 3 + \\tfrac{1}{2}) = 2 \\cdot 1{,}5 = 3$. Für $M^4$ (das höchste): $2(4-4+\\tfrac{1}{2}) = 1$. ✓</p>

    <hr>

    <h3>Gerechnetes Beispiel a): Einkommen {3, 5, 10}</h3>
    <p><strong>Schritt 1:</strong> Einkommen aufsteigend ordnen: $M^1 = 3,\\; M^2 = 5,\\; M^3 = 10$</p>
    <p><strong>Schritt 2:</strong> Mittelwert berechnen: $\\mu = \\dfrac{3 + 5 + 10}{3} = 6$</p>
    <p><strong>Schritt 3:</strong> Koeffizienten für $H = 3$ bestimmen:</p>
    <ul>
      <li>$i=1$: $2(3 - 1 + \\tfrac{1}{2}) = 2 \\cdot 2{,}5 = 5$</li>
      <li>$i=2$: $2(3 - 2 + \\tfrac{1}{2}) = 2 \\cdot 1{,}5 = 3$</li>
      <li>$i=3$: $2(3 - 3 + \\tfrac{1}{2}) = 2 \\cdot 0{,}5 = 1$</li>
    </ul>
    <p><strong>Schritt 4:</strong> Gewichtete Summe berechnen:</p>
    <p>$$(5 \\times 3) + (3 \\times 5) + (1 \\times 10) = 15 + 15 + 10 = 40$$</p>
    <p><strong>Schritt 5:</strong> Gini berechnen:</p>
    <p>$$G = 1 - \\frac{40}{3^2 \\times 6} = 1 - \\frac{40}{54} \\approx 0{,}26$$</p>

    <hr>

    <h3>Gerechnetes Beispiel b): Transfer → Einkommen {3, 6, 9}</h3>
    <p>1 Einheit wird von Haushalt 3 auf Haushalt 2 übertragen: $10 \\to 9$, $5 \\to 6$. Der Mittelwert bleibt $\\mu = 6$.</p>
    <p><strong>Koeffizienten</strong> gleich wie oben: 5, 3, 1.</p>
    <p><strong>Gewichtete Summe:</strong></p>
    <p>$$(5 \\times 3) + (3 \\times 6) + (1 \\times 9) = 15 + 18 + 9 = 42$$</p>
    <p><strong>Neuer Gini:</strong></p>
    <p>$$G' = 1 - \\frac{42}{54} \\approx 0{,}22 < 0{,}26$$</p>
    <p>Der Gini sinkt. Das illustriert das <strong>Pigou-Dalton-Prinzip</strong>: Eine Einkommensübertragung vom Reichen zum Ärmeren (ohne Rangwechsel) reduziert die Ungleichheit.</p>

    <hr>

    <h2>Teil 2: Der Atkinson-Index</h2>

    <h3>Überblick über die drei Schritte</h3>
    <ol>
      <li>Gesamtwohlfahrt $W$ berechnen</li>
      <li>Äquivalentes Gleichverteilungseinkommen $M^{EDE}$ bestimmen</li>
      <li>Atkinson-Index berechnen: $A = 1 - \\dfrac{M^{EDE}}{\\mu}$</li>
    </ol>

    <h3>Gerechnetes Beispiel: Einkommen {1, 3, 6, 9, 11}, $\\varepsilon = \\tfrac{1}{2}$</h3>

    <p><strong>Schritt 1: Nutzenfunktion aufschreiben</strong></p>
    <p>$$U(M) = \\frac{M^{1-\\varepsilon}}{1-\\varepsilon} = \\frac{M^{1/2}}{1/2} = 2\\sqrt{M}$$</p>

    <p><strong>Schritt 2: Mittelwert berechnen</strong></p>
    <p>$$\\mu = \\frac{1 + 3 + 6 + 9 + 11}{5} = \\frac{30}{5} = 6$$</p>

    <p><strong>Schritt 3: Gesamtwohlfahrt $W$ berechnen</strong></p>
    <p>$$W = \\sum_{h=1}^{H} U(M^h) = 2\\sqrt{1} + 2\\sqrt{3} + 2\\sqrt{6} + 2\\sqrt{9} + 2\\sqrt{11}$$</p>
    <p>$$= 2(1{,}000) + 2(1{,}732) + 2(2{,}449) + 2(3{,}000) + 2(3{,}317)$$</p>
    <p>$$= 2{,}000 + 3{,}464 + 4{,}899 + 6{,}000 + 6{,}633 = 22{,}99$$</p>

    <p><strong>Schritt 4: $M^{EDE}$ aus der Gleichung $W = H \\cdot U(M^{EDE})$ lösen</strong></p>
    <p>$$22{,}99 = 5 \\cdot 2\\sqrt{M^{EDE}} = 10\\sqrt{M^{EDE}}$$</p>
    <p>$$\\sqrt{M^{EDE}} = \\frac{22{,}99}{10} = 2{,}30$$</p>
    <p>$$M^{EDE} = (2{,}30)^2 = 5{,}29$$</p>
    <p><em>Intuition:</em> $M^{EDE} = 5{,}29 < \\mu = 6$, weil die Nutzenfunktion konkav ist — eine gleichmäßige Verteilung zu 5,29 erzeugt dieselbe Wohlfahrt wie die ungleiche Verteilung mit Durchschnitt 6.</p>

    <p><strong>Schritt 5: Atkinson-Index berechnen</strong></p>
    <p>$$A = 1 - \\frac{M^{EDE}}{\\mu} = 1 - \\frac{5{,}29}{6} \\approx 0{,}12$$</p>
    <p>Ein Wert von $A = 0{,}12$ bedeutet: Die Gesellschaft würde auf 12% des mittleren Einkommens verzichten, wenn dafür vollständige Gleichheit herrschte.</p>

    <hr>

    <h3>Zusammenfassung: Vorgehen bei der Prüfung</h3>
    <table>
      <thead><tr><th>Index</th><th>Formel</th><th>Wichtigste Schritte</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Gini</strong></td>
          <td>$1 - \\frac{\\sum 2(H-i+\\frac{1}{2})M^i}{H^2 \\mu}$</td>
          <td>Einkommen ordnen → Koeffizienten 2H-1, 2H-3, … → gewichtete Summe → einsetzen</td>
        </tr>
        <tr>
          <td><strong>Atkinson</strong></td>
          <td>$1 - \\frac{M^{EDE}}{\\mu}$</td>
          <td>$U(M)$ aufschreiben → $W$ berechnen → $M^{EDE}$ lösen → $A$ berechnen</td>
        </tr>
      </tbody>
    </table>
  `},

  ],

  kk: [
    /* ID 1 — Income Definitions and Equivalence Scales */
    {id:1, question:"How does Simons (1938) define personal income?", answer:"The sum of (1) value of consumption and (2) change in value of store of wealth.", category:"Inequality"},
    {id:1, question:"What is the Hicks (1939) income definition?", answer:"The maximum value one can consume in a week and expect to be as well-off at the end as at the beginning.", category:"Inequality"},
    {id:1, question:"What is the Rowntree equivalence scale ratio?", answer:"$60 for a single person is equivalent to $100 for a couple.", category:"Inequality"},
    {id:1, question:"What is the underlying hypothesis of the Engel scale?", answer:"The expenditure share of food is proportional to welfare.", category:"Inequality"},
    {id:1, question:"How does the 'Adult Good' scale work?", answer:"It adjusts income for children by keeping the consumption of goods used only by adults constant.", category:"Inequality"},

    /* ID 2 — Inequality Measures */
    {id:2, question:"Define the Range (R) as an inequality measure.", answer:"$R = (M_H - M_1) / (H\\bar{M})$; it measures the gap between extreme incomes relative to the mean.", category:"Inequality"},
    {id:2, question:"What is the main weakness of the Relative Mean Deviation (D)?", answer:"It is insensitive to transfers between households on the same side of the mean.", category:"Inequality"},
    {id:2, question:"State the Pigou-Dalton Principle of Transfers.", answer:"Inequality must decrease if income is transferred from a rich to a poor household without changing their rank.", category:"Inequality"},
    {id:2, question:"What are the axes of a Lorenz Curve?", answer:"Proportion of population (x-axis) vs. proportion of total income (y-axis).", category:"Inequality"},
    {id:2, question:"What is the geometric interpretation of the Gini coefficient?", answer:"It is twice the area between the Lorenz curve and the 45-degree diagonal.", category:"Inequality"},
    {id:2, question:"Why is the Gini coefficient described as 'linear'?", answer:"The response to a transfer depends only on rank positions $i$ and $j$, not on absolute income levels.", category:"Inequality"},
    {id:2, question:"What does Atkinson's Theorem (14.2) state?", answer:"If Lorenz curves don't cross, every symmetric and concave welfare function prefers the distribution closer to the diagonal.", category:"Inequality"},
    {id:2, question:"Define Equally Distributed Equivalent Income (MEDE).", answer:"The income level which, if held by everyone, yields the same total utility as the current distribution.", category:"Inequality"},
    {id:2, question:"What does the Atkinson parameter 'e' represent?", answer:"Social concern for equity; a higher 'e' makes the utility function more concave.", category:"Inequality"},
    {id:2, question:"How is the Atkinson measure (A) calculated?", answer:"$A = 1 - \\frac{\\text{MEDE}}{\\bar{M}}$.", category:"Inequality"},
    {id:2, question:"What does market inequality measure according to the OECD study?", answer:"Inequality levels before the tax-transfer system (taxes and transfers) are applied.", category:"Inequality"},
    {id:2, question:"Why control for 'under age 60' in inequality studies?", answer:"To remove the effects of early retirement and focus on labor market inequality.", category:"Inequality"},

    /* ID 3 — Poverty and Opportunity */
    {id:3, question:"Absolute vs. Relative Poverty?", answer:"Absolute: fixed minimum consumption. Relative: defined by the standards of a specific society and time.", category:"Poverty"},
    {id:3, question:"Define the Headcount Ratio (E).", answer:"$E = q/H$, where $q$ is the number of poor and $H$ is the total population.", category:"Poverty"},
    {id:3, question:"What is the Aggregate Poverty Gap (V)?", answer:"The sum of all income gaps ($g_h = z - M_h$) for those below the poverty line.", category:"Poverty"},
    {id:3, question:"Limitation of the Income Gap Ratio (I)?", answer:"It can show increased poverty if a transfer raises a poor household out of poverty.", category:"Poverty"},
    {id:3, question:"What components does the Sen Measure combine?", answer:"Headcount ratio, income shortfall (gap ratio), and the Gini coefficient of the poor.", category:"Poverty"},
    {id:3, question:"What is 'Subgroup Consistency'?", answer:"A measure is consistent if aggregate poverty rises when poverty in one subgroup increases.", category:"Poverty"},
    {id:3, question:"What is the FGT $P_\\alpha$ measure when $\\alpha = 1$?", answer:"The product of the headcount ratio and the income gap ratio ($E \\times I$).", category:"Poverty"},
    {id:3, question:"Equality of Opportunity: Compensating for 'Circumstances'?", answer:"Inequality from factors beyond individual control (race, background) should be compensated.", category:"Equity"},
    {id:3, question:"How is Inequality of Opportunity measured?", answer:"Via first or second-order stochastic dominance of outcome distributions based on circumstances.", category:"Equity"},
    {id:3, question:"Definition of Intergenerational Mobility?", answer:"A lack of correlation between the status (earnings/education) of parents and children.", category:"Equity"},
    {id:3, question:"What is the '1 - correlation' measure?", answer:"A measure of intergenerational mobility.", category:"Equity"},
    {id:3, question:"Use of Transition Matrices in mobility?", answer:"To estimate mobility at specific points in the income distribution (e.g., quintiles).", category:"Equity"},

    /* ID 4 — Rent-Seeking Games */
    {id:4, question:"Innovation Rent vs. Situation Rent?", answer:"Innovation: consumers benefit from new products. Situation: consumers suffer from restricted alternatives.", category:"Rent-Seeking"},
    {id:4, question:"Profit-seeking vs. Rent-seeking (resources)?", answer:"Profit-seeking is productive and beneficial; Rent-seeking is an unproductive expenditure to capture wealth.", category:"Rent-Seeking"},
    {id:4, question:"Equilibrium in Deterministic RS games?", answer:"Only exists in mixed strategies; players play each value with probability $\\frac{1}{V}$.", category:"Rent-Seeking"},
    {id:4, question:"The Complete Dissipation Theorem?", answer:"In a deterministic game with 2+ players, total resources expended exactly equal the prize value $V$.", category:"Rent-Seeking"},
    {id:4, question:"What is the symmetric expenditure in a Probabilistic game?", answer:"$B^* = \\frac{n-1}{n^2} \\cdot V$.", category:"Rent-Seeking"},
    {id:4, question:"The Partial Dissipation Theorem?", answer:"In a probabilistic game, resources expended are a fraction $\\frac{n-1}{n}$ of the prize $V$.", category:"Rent-Seeking"},
    {id:4, question:"Why is the social cost of monopoly $\\pi + d$?", answer:"Standard loss ($d$) plus the monopoly profit ($\\pi$) wasted in rent-seeking to get the monopoly.", category:"Rent-Seeking"},
    {id:4, question:"Lobbying and the PPF?", answer:"Lobbying shifts the Production Possibility Frontier inward as labor is diverted from production.", category:"Rent-Seeking"},
    {id:4, question:"Equilibrium output with successful tariff lobbying?", answer:"Falls at the rate of the tariff squared ($\\tau^2$).", category:"Rent-Seeking"},

    /* ID 5 — Informative Lobbying */
    {id:5, question:"Informative Lobbying: Preference Divergence ($\\Delta$)?", answer:"Honest reports require $\\Delta$ to be small enough so the lobbyist doesn't benefit from lying.", category:"Rent-Seeking"},
    {id:5, question:"Truth-telling condition for lobbyist (2 states)?", answer:"$\\Delta \\leq \\frac{q_h - q_l}{2}$.", category:"Rent-Seeking"},
    {id:5, question:"What is 'Partial Revelation'?", answer:"Partitioning states into reports (Low/High) when truth-telling is impossible for every state.", category:"Rent-Seeking"},
    {id:5, question:"How can Rent-Seeking be controlled?", answer:"Transparency, registering lobbyists, limiting campaign budgets, and non-discriminatory policies.", category:"Rent-Seeking"},
    {id:5, question:"Why might a policy-maker ignore a lobbyist?", answer:"When $\\Delta$ is too large, the lobbyist always reports the high state, making the report not credible.", category:"Rent-Seeking"},

    /* ID 6 — Club Goods */
    {id:6, question:"Definition 7.1: Club Good?", answer:"A good that is nonrivalrous or partly rivalrous but where exclusion is possible.", category:"Club Goods"},
    {id:6, question:"How do clubs reveal consumer preferences?", answer:"Through the consumer's choice to join (revealed preference).", category:"Club Goods"},
    {id:6, question:"The Buchanan Model tradeoff?", answer:"Increasing membership spreads costs but increases congestion facilities.", category:"Club Goods"},
    {id:6, question:"Club Provision Condition (MRS)?", answer:"$n \\cdot MRS(G, x) = MC(G)$.", category:"Club Goods"},
    {id:6, question:"Club Membership Condition?", answer:"$MRS(n, x) = -\\frac{C(G)}{n^2}$ (marginal utility cost = cost sharing benefit).", category:"Club Goods"},
    {id:6, question:"Clubs and the Economy: Congestion case?", answer:"Efficient if optimal membership is small relative to population (limiting case).", category:"Club Goods"},
    {id:6, question:"The problem with 'Large Clubs'?", answer:"Allocation problems; some consumers excluded or clubs have inefficient membership.", category:"Club Goods"},
    {id:6, question:"Strategic consideration in clubs (Fees)?", answer:"Small clubs may offer low fees to attract members; efficient clubs may charge more.", category:"Club Goods"},
    {id:6, question:"Clubs and Monopoly Markets analogy?", answer:"Small groups can affect their utility by forming efficiently sized clubs.", category:"Club Goods"},
    {id:6, question:"Internal vs. Economy-wide Efficiency?", answer:"Clubs always reach internal efficiency, but not always economy-wide efficiency.", category:"Club Goods"},
    {id:6, question:"Role of James Buchanan (1965)?", answer:"Originator of the theory of clubs.", category:"Club Goods"},

    /* ID 7 — Local Public Goods / Tiebout */
    {id:7, question:"Definition 7.2: Local Public Good?", answer:"A good whose benefits are restricted to a specific geographical area.", category:"Local Public Goods"},
    {id:7, question:"LPG: Cost per person?", answer:"$G/h$, where $h$ is the locality population.", category:"Local Public Goods"},
    {id:7, question:"Why do population flows fail efficiency in LPG?", answer:"Non-market linkages: one person's move affects both localities' welfare.", category:"Local Public Goods"},
    {id:7, question:"The Tiebout Hypothesis core claim?", answer:"Consumers 'vote with their feet' among communities to reveal preferences and reach efficiency.", category:"Local Public Goods"},
    {id:7, question:"Tiebout's view on the LPG externality?", answer:"It is a small-numbers issue that a large market of communities can solve.", category:"Local Public Goods"},
    {id:7, question:"Tiebout: Housing Market Requirement?", answer:"No frictions in housing markets.", category:"Local Public Goods"},
    {id:7, question:"Tiebout: Income Source Requirement?", answer:"Incomes from rents or replicated employment opportunities across communities.", category:"Local Public Goods"},
    {id:7, question:"Oates (1969) empirical test?", answer:"Higher public good provision leads to higher house prices (capitalization).", category:"Local Public Goods"},
    {id:7, question:"Gramlich and Rubinfeld (1982) test?", answer:"Preference sorting: demand variation within locations is less than variation across locations.", category:"Local Public Goods"},
    {id:7, question:"Equilibrium condition in LPG?", answer:"No incentive for any consumer to move between localities.", category:"Local Public Goods"},
    {id:7, question:"Samuelson rule for Local Public Goods?", answer:"$h \\cdot \\frac{U_G}{U_x} = 1$.", category:"Local Public Goods"},

    /* ID 8 — Gini: exact formula */
    {id:8, question:"Write the exact formula for the Gini coefficient.", answer:"$G = 1 - \\frac{1}{H^2 \\bar{M}} \\sum_i \\sum_j \\min\\{M_i, M_j\\}$. Alternatively: $G = 1 - \\frac{1}{H^2 \\bar{M}} \\cdot ([2H-1]M_1 + [2H-3]M_2 + \\ldots + M_H)$.", category:"Inequality"},
    {id:8, question:"How does the Gini respond to a transfer of $\\Gamma$ from household $i$ to richer household $j$?", answer:"$\\Delta G = \\frac{2}{H^2 \\bar{M}} \\cdot (j-i) \\cdot \\Gamma$. The response depends only on the rank difference $(j-i)$, not on income levels — hence the Gini is 'linear'.", category:"Inequality"},
    {id:8, question:"State Atkinson's Theorem (14.2) on Lorenz curves and welfare functions.", answer:"If two equal-mean distributions have non-crossing Lorenz curves, every symmetric and concave welfare function assigns higher welfare to the distribution with the Lorenz curve closer to the diagonal.", category:"Inequality"},

    /* ID 9 — Atkinson measure */
    {id:9, question:"Define MEDE and derive the Atkinson inequality measure A.", answer:"MEDE: income $M^{EDE}$ s.t. $\\sum U(M_h) = H \\cdot U(M^{EDE})$. Since $U$ is concave, $M^{EDE} < \\bar{M}$. Atkinson measure: $A = 1 - M^{EDE}/\\bar{M} \\in [0,1]$.", category:"Inequality"},
    {id:9, question:"What utility parameterization does Atkinson use and what does parameter e represent?", answer:"$U(M) = M^{1-e}/(1-e)$ for $e \\neq 1$; $U(M) = \\log(M)$ for $e=1$. Parameter $e \\geq 0$ measures social concern for equity: higher $e$ → more concave utility → more weight on the poor.", category:"Inequality"},
    {id:9, question:"What happens to the Atkinson measure as e → ∞?", answer:"The measure approaches a Rawlsian criterion — only the welfare of the poorest household matters. $A \\to 1 - M_{\\min}/\\bar{M}$.", category:"Inequality"},

    /* ID 10 — Complete Dissipation derivation */
    {id:10, question:"Derive the mixed-strategy equilibrium in the deterministic rent-seeking game.", answer:"No pure-strategy equilibrium exists. Equilibrium: $f(B) = 1/V$ uniform over $[0,V]$. Then $EP = F(B) \\cdot V - B = B - B = 0$. Expected burn per player $= V/2$, total $= V$. Resources wasted equal prize value.", category:"Rent-Seeking"},
    {id:10, question:"Why is there no pure-strategy equilibrium in the deterministic game?", answer:"For any $B^* < V$, player 2 burns $B^* + \\varepsilon$ and wins $V$ profitably. But $B=V$ gives $EP = \\frac{1}{2}V - V < 0$. Hence no pure strategy works — only mixed strategy equilibrium exists.", category:"Rent-Seeking"},

    /* ID 11 — Partial Dissipation derivation */
    {id:11, question:"Derive the symmetric Nash equilibrium expenditure $B^*$ in the probabilistic rent-seeking game.", answer:"FOC: $\\frac{B_{-i}}{(B_i+B_{-i})^2} \\cdot V = 1$. Symmetric equilibrium: $B_{-i}=(n-1)B^*$, so $\\frac{(n-1)B^*}{(nB^*)^2} \\cdot V = 1 \\implies B^* = \\frac{n-1}{n^2} \\cdot V$.", category:"Rent-Seeking"},
    {id:11, question:"What is each player's expected payoff in the probabilistic equilibrium?", answer:"$EP = V/n^2 > 0$. The winner obtains a surplus; all others make a loss. Total expected expenditure $= \\frac{n-1}{n} \\cdot V < V$ (partial dissipation).", category:"Rent-Seeking"},

    /* ID 12 — Tariff lobbying */
    {id:12, question:"In the tariff lobbying model with $C(y)=y^2/2$ and world price $=1+t$, what is the firm's profit and the rent from the tariff?", answer:"Output: $y_1=1+t$. Profit: $\\pi_1(t)=(1+t)^2/2$. Rent from tariff: $\\pi_1(t)-\\pi_1(0) = (2t+t^2)/2$. By Complete Dissipation, this rent is fully wasted in lobbying.", category:"Rent-Seeking"},
    {id:12, question:"Why does output fall at the rate of $t^2$ in the tariff lobbying model?", answer:"Lobbying resources grow faster than the output gain. Resources wasted $= (2t+t^2)/2$ while output gain $= t$. Net effect on total output is $-t^2/2$, i.e., output falls at the rate of $t^2$.", category:"Rent-Seeking"},

    /* ID 13 — Crawford-Sobel derivation */
    {id:13, question:"Derive the truthfulness condition $\\Delta \\leq (q_h - q_l)/2$ in the Crawford-Sobel model.", answer:"States $q_l < q_h$. L reports truthfully in low state iff $q_l + \\Delta \\leq (q_l+q_h)/2$ (lobbyist's ideal in low state $\\leq$ PM's midpoint policy). Rearranging: $\\Delta \\leq (q_h-q_l)/2$.", category:"Rent-Seeking"},
    {id:13, question:"What happens when $\\Delta > (q_h-q_l)/2$ in the Crawford-Sobel model?", answer:"The lobbyist always reports $q_h$ regardless of the true state. The policy-maker recognizes this, ignores the report, and implements $p^e = (q_l+q_h)/2$ — which is wrong in both states.", category:"Rent-Seeking"},

    /* ID 14 — Club optimization */
    {id:14, question:"Derive the two optimization conditions for a single-product club.", answer:"Max $U(M-C(G)/n, G, n)$. FOC(G): $n \\cdot (U_G/U_x) = C_G$ (Samuelson rule). FOC(n): $U_n/U_x = -C(G)/n^2$ (marginal congestion cost = marginal cost-sharing benefit).", category:"Club Goods"},
    {id:14, question:"Interpret the club membership condition $U_n/U_x = -C(G)/n^2$.", answer:"Left side: MRS of congestion (negative since $U_n \\leq 0$) — the disutility of one more member. Right side: reduction in each member's cost share from adding one more member. Optimal membership equates these.", category:"Club Goods"},

    /* ID 15 — Local public goods formal model */
    {id:15, question:"Write the utility function for a local public goods model and state the local Samuelson rule.", answer:"$U = U(M(h) - G/h,\\, G)$ where $M(h)$ is income decreasing in population $h$. Optimal provision: $h \\cdot U_G/U_x = 1$ (sum of MRS equals marginal cost $= 1$).", category:"Local Public Goods"},
    {id:15, question:"Why does free mobility between localities generally fail to achieve efficiency?", answer:"A consumer's move imposes externalities on both localities (positive to the one they leave, negative to the one they join). These non-market linkages are not internalized in individual location decisions.", category:"Local Public Goods"},
  ],

  lt: [
    {id:1, category:"Inequality", question:"Explain the two main income definitions.", answer:"Simons (1938) focuses on the sum of {{consumption}} and wealth change. Hicks (1939) focuses on the maximum value one can consume to remain equally {{well-off}} at the end of the week."},

    {id:2, category:"Inequality", question:"How do statistical measures quantify inequality?", answer:"The {{Range}} only uses extreme incomes. The {{Gini coefficient}} equals twice the area under the {{Lorenz curve}}. The {{Atkinson}} measure uses {{MEDE}} and parameter {{e}} to reflect equity concerns."},

    {id:3, category:"Poverty", question:"How do advanced poverty measures function?", answer:"The {{Sen}} measure combines headcount and gap ratios. For {{subgroup consistency}}, economists use the {{FGT}} class of measures (P-alpha)."},

    {id:4, category:"Rent-Seeking", question:"What are the theorems of dissipated rents?", answer:"The {{Complete Dissipation}} theorem applies to {{deterministic}} games (total waste = V). The {{Partial Dissipation}} theorem applies to {{probabilistic}} games (total waste = (n-1)/n * V)."},

    {id:5, category:"Lobbying", question:"When is lobbying credible?", answer:"Reports are honest if divergence {{Δ}} is small. If there are many states, the lobbyist uses {{partial revelation}} by {{partitioning}} states into groups."},

    {id:6, category:"Club Goods", question:"How is efficient club size reached?", answer:"Efficiency balances {{cost sharing}} against {{congestion}}. Internal efficiency follows the {{Samuelson}} rule variant: n * {{MRS}} = {{MC}}."},

    {id:7, category:"Tiebout", question:"What is the Tiebout mechanism?", answer:"Consumers {{vote with their feet}} among communities. This reveals {{preferences}} and achieves efficiency if there are no frictions in {{housing markets}} or employment."}
  ],

  mc: [
    {id:1, category:"Income Definitions", question:"According to Simons (1938), personal income is defined as the sum of consumption and...", options:["...the change in the value of the store of wealth.", "...transfer payments received from the government.", "...the maximum sustainable consumption level.", "...gross wages minus income taxes."], correct:0},
    {id:1, category:"Income Definitions", question:"How does the Hicks (1939) income definition differ from Simons?", options:["It is forward-looking and welfare-based, not backward-looking.", "It treats capital gains as income only when realised.", "It focuses on household consumption rather than individual income.", "It is identical to the standard tax-system definition."], correct:0},
    {id:2, category:"Inequality", question:"The Gini coefficient is derived from which graphical tool?", options:["The Lorenz curve", "The Laffer curve", "The Phillips curve", "The Engel curve"], correct:0},
    {id:2, category:"Inequality", question:"A Gini coefficient of 0 indicates...", options:["Perfect equality — everyone has the same income.", "Maximum inequality — one person has all income.", "The median equals the mean income.", "There is no poverty in the population."], correct:0},
    {id:3, category:"Poverty", question:"Which poverty concept asks whether individuals have a fair chance to succeed regardless of background?", options:["Equality of opportunity", "Absolute poverty", "Relative poverty", "Capability approach"], correct:0},
    {id:4, category:"Rent-Seeking", question:"The Complete Dissipation theorem (Tullock) applies to which type of contest?", options:["Deterministic contests — total waste equals the prize value V.", "Probabilistic contests — total waste equals (n-1)/n · V.", "Cooperative lobbying — no waste occurs.", "Monopoly markets — waste is partial and bounded."], correct:0},
    {id:4, category:"Rent-Seeking", question:"In a probabilistic rent-seeking contest with n players, total dissipation equals...", options:["(n-1)/n · V", "V/n", "V", "n · V"], correct:0},
    {id:5, category:"Lobbying", question:"In the Crawford–Sobel model, when is a lobbyist's report credible?", options:["When the divergence Δ between lobbyist and policymaker is small.", "When the lobbyist has a legally binding contract.", "When the number of states of the world is exactly two.", "When the policymaker cannot verify the report."], correct:0},
    {id:6, category:"Club Goods", question:"Which condition characterises the efficient provision rule for club goods (Samuelson variant)?", options:["n · MRS = MC", "MRS = MC / n", "n · MRS = n · MC", "MRS = 0"], correct:0},
    {id:7, category:"Tiebout", question:"What is the key mechanism in Tiebout's model of local public goods?", options:["Households reveal preferences by choosing among communities ('voting with their feet').", "Central government uses Pigouvian taxes to internalise spillovers.", "Clubs use entry fees to exclude non-members.", "Majority voting determines the local public good level."], correct:0},
  ]
}
);
