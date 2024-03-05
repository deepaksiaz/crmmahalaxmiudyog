import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isVendors, setIsVendors] = useState(false);
  const [isEmployees, setIsEmployees] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isPurchaseChallan, setIsPurchaseChallan] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  //Calender
  const [isCalender, setCalender] = useState(false);

  // Apps
  const [isEmail, setEmail] = useState(false);
  const [isSubEmail, setSubEmail] = useState(false);
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isTasks, setIsTasks] = useState(false);
  const [isCRM, setIsCRM] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [isInvoices, setIsInvoices] = useState(false);
  const [isSupportTickets, setIsSupportTickets] = useState(false);
  const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
  const [isJobs, setIsJobs] = useState(false);
  const [isJobList, setIsJobList] = useState(false);
  const [isCandidateList, setIsCandidateList] = useState(false);

  // Authentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Pages
  const [isProfile, setIsProfile] = useState(false);
  const [isLanding, setIsLanding] = useState(false);

  // Charts
  const [isApex, setIsApex] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Vendors") {
      setIsVendors(false);
    }
    if (iscurrentState !== "Employees") {
      setIsEmployees(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "PurchaseChallan") {
      setIsPurchaseChallan(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isApps,
    isAuth,
    isVendors,
    isEmployees,
    isBaseUi,
    isPurchaseChallan,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
  ]);

  const menuItems = [
  
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "mdi mdi-speedometer",
      link: "/dashboard-job",
    }
    ,
    {
      label: "Input Master",
      isHeader: true,
    },
    {
      id: "rawmaterial",
      label: "Raw Material",
      icon: "bx bx-user-circle",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsAuth(!isAuth);
        setIscurrentState("Auth");
        updateIconSidebar(e);
      },
      stateVariables: isAuth,
      subItems: [
        {
          id: "addrawmaterial",
          label: "Add Raw Material",
          link: "/add-raw-material",
          parentId: "rawmaterial",
        },
        {
          id: "managerawmaterial",
          label: "Manage Raw Material",
          link: "/manage-raw-material",
          parentId: "rawmaterial",
        },
      ],
    },
    {
      id: "vendors",
      label: "Vendors",
      icon: "ri-user-shared-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsVendors(!isVendors);
        setIscurrentState("Vendors");
        updateIconSidebar(e);
      },
      stateVariables: isVendors,
      subItems: [
        {
          id: "addVendor",
          label: "Add Vendor",
          link: "/add-vendors",
          parentId: "vendors",
        },
        {
          id: "manageVendor",
          label: "Manage Vendor",
          link: "/manage-vendors",
          parentId: "vendors",
        },
      ],
    },
    {
      id: "employees",
      label: "Employees",
      icon: "ri-team-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsEmployees(!isEmployees);
        setIscurrentState("Employees");
        updateIconSidebar(e);
      },
      stateVariables: isEmployees,
      subItems: [
        {
          id: "addEmployee",
          label: "Add Employee",
          link: "/add-employees",
          parentId: "employees",
        },
        {
          id: "manageEmployee",
          label: "Manage Employee",
          link: "/manage-employees",
          parentId: "employees",
        },
      ],
    },
    {
      label: "Pre Production",
      isHeader: true,
    },
    {
      id: "purchaseChallan",
      label: "Purchase Challan",
      icon: "mdi mdi-layers-triple-outline",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsPurchaseChallan(!isPurchaseChallan);
        setIscurrentState("PurchaseChallan");
        updateIconSidebar(e);
      },
      stateVariables: isPurchaseChallan,
      subItems: [
        {
          id: "createChallan",
          label: "Create Challan",
          link: "/create-challan",
          parentId: "PurchaseChallan",
        },
        {
          id: "manageChallan",
          label: "Manage Challan",
          link: "/manage-challan",
          parentId: "PurchaseChallan",
        },
        {
          id: "challanPayment",
          label: "Challan Payment",
          link: "/challan-payment",
          parentId: "PurchaseChallan",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
