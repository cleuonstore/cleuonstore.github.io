$(document).ready(function () {
    // Data JSON yang digabungkan dan diperbarui untuk semua template
    const templateData = [

        {
            "nama": "web-02",
            "kategori": "",
            "gambar": "_screens/web-02.jpeg"
        },
        {
            "nama": "web-03",
            "kategori": "",
            "gambar": "_screens/web-03.jpeg"
        },
        {
            "nama": "web-04",
            "kategori": "",
            "gambar": "_screens/web-04.jpeg"
        },
        {
            "nama": "web-05",
            "kategori": "",
            "gambar": "_screens/web-05.jpeg"
        },
        {
            "nama": "web-06",
            "kategori": "",
            "gambar": "_screens/web-06.jpeg"
        },
        {
            "nama": "web-07",
            "kategori": "",
            "gambar": "_screens/web-07.jpeg"
        },
        {
            "nama": "web-08",
            "kategori": "",
            "gambar": "_screens/web-08.jpeg"
        },
        {
            "nama": "web-09",
            "kategori": "",
            "gambar": "_screens/web-09.jpeg"
        },
        {
            "nama": "web-10",
            "kategori": "",
            "gambar": "_screens/web-10.jpeg"
        },
        {
            "nama": "web-100",
            "kategori": "",
            "gambar": "_screens/web-100.jpeg"
        },
        {
            "nama": "web-101",
            "kategori": "",
            "gambar": "_screens/web-101.jpeg"
        },
        {
            "nama": "web-102",
            "kategori": "",
            "gambar": "_screens/web-102.jpeg"
        },
        {
            "nama": "web-103",
            "kategori": "",
            "gambar": "_screens/web-103.jpeg"
        },
        {
            "nama": "web-104",
            "kategori": "",
            "gambar": "_screens/web-104.jpeg"
        },
        {
            "nama": "web-105",
            "kategori": "",
            "gambar": "_screens/web-105.jpeg"
        },
        {
            "nama": "web-106",
            "kategori": "",
            "gambar": "_screens/web-106.jpeg"
        },
        {
            "nama": "web-107",
            "kategori": "",
            "gambar": "_screens/web-107.jpeg"
        },
        {
            "nama": "web-108",
            "kategori": "",
            "gambar": "_screens/web-108.jpeg"
        },
        {
            "nama": "web-109",
            "kategori": "",
            "gambar": "_screens/web-109.jpeg"
        },
        {
            "nama": "web-11",
            "kategori": "",
            "gambar": "_screens/web-11.jpeg"
        },
        {
            "nama": "web-110",
            "kategori": "",
            "gambar": "_screens/web-110.jpeg"
        },
        {
            "nama": "web-111",
            "kategori": "",
            "gambar": "_screens/web-111.jpeg"
        },
        {
            "nama": "web-112",
            "kategori": "",
            "gambar": "_screens/web-112.jpeg"
        },
        {
            "nama": "web-113",
            "kategori": "",
            "gambar": "_screens/web-113.jpeg"
        },
        {
            "nama": "web-114",
            "kategori": "",
            "gambar": "_screens/web-114.jpeg"
        },
        {
            "nama": "web-115",
            "kategori": "",
            "gambar": "_screens/web-115.jpeg"
        },
        {
            "nama": "web-116",
            "kategori": "",
            "gambar": "_screens/web-116.jpeg"
        },
        {
            "nama": "web-117",
            "kategori": "",
            "gambar": "_screens/web-117.jpeg"
        },
        {
            "nama": "web-118",
            "kategori": "",
            "gambar": "_screens/web-118.jpeg"
        },
        {
            "nama": "web-119",
            "kategori": "",
            "gambar": "_screens/web-119.jpeg"
        },
        {
            "nama": "web-12",
            "kategori": "",
            "gambar": "_screens/web-12.jpeg"
        },
        {
            "nama": "web-120",
            "kategori": "",
            "gambar": "_screens/web-120.jpeg"
        },
        {
            "nama": "web-121",
            "kategori": "",
            "gambar": "_screens/web-121.jpeg"
        },
        {
            "nama": "web-122",
            "kategori": "",
            "gambar": "_screens/web-122.jpeg"
        },
        {
            "nama": "web-123",
            "kategori": "",
            "gambar": "_screens/web-123.jpeg"
        },
        {
            "nama": "web-124",
            "kategori": "",
            "gambar": "_screens/web-124.jpeg"
        },
        {
            "nama": "web-125",
            "kategori": "",
            "gambar": "_screens/web-125.jpeg"
        },
        {
            "nama": "web-126",
            "kategori": "",
            "gambar": "_screens/web-126.jpeg"
        },
        {
            "nama": "web-127",
            "kategori": "",
            "gambar": "_screens/web-127.jpeg"
        },
        {
            "nama": "web-128",
            "kategori": "",
            "gambar": "_screens/web-128.jpeg"
        },
        {
            "nama": "web-129",
            "kategori": "",
            "gambar": "_screens/web-129.jpeg"
        },
        {
            "nama": "web-13",
            "kategori": "",
            "gambar": "_screens/web-13.jpeg"
        },
        {
            "nama": "web-130",
            "kategori": "",
            "gambar": "_screens/web-130.jpeg"
        },
        {
            "nama": "web-131",
            "kategori": "",
            "gambar": "_screens/web-131.jpeg"
        },
        {
            "nama": "web-132",
            "kategori": "",
            "gambar": "_screens/web-132.jpeg"
        },
        {
            "nama": "web-133",
            "kategori": "",
            "gambar": "_screens/web-133.jpeg"
        },
        {
            "nama": "web-134",
            "kategori": "",
            "gambar": "_screens/web-134.jpeg"
        },
        {
            "nama": "web-135",
            "kategori": "",
            "gambar": "_screens/web-135.jpeg"
        },
        {
            "nama": "web-136",
            "kategori": "",
            "gambar": "_screens/web-136.jpeg"
        },
        {
            "nama": "web-137",
            "kategori": "",
            "gambar": "_screens/web-137.jpeg"
        },
        {
            "nama": "web-138",
            "kategori": "",
            "gambar": "_screens/web-138.jpeg"
        },
        {
            "nama": "web-139",
            "kategori": "",
            "gambar": "_screens/web-139.jpeg"
        },
        {
            "nama": "web-14",
            "kategori": "",
            "gambar": "_screens/web-14.jpeg"
        },
        {
            "nama": "web-140",
            "kategori": "",
            "gambar": "_screens/web-140.jpeg"
        },
        {
            "nama": "web-141",
            "kategori": "",
            "gambar": "_screens/web-141.jpeg"
        },
        {
            "nama": "web-142",
            "kategori": "",
            "gambar": "_screens/web-142.jpeg"
        },
        {
            "nama": "web-143",
            "kategori": "",
            "gambar": "_screens/web-143.jpeg"
        },
        {
            "nama": "web-144",
            "kategori": "",
            "gambar": "_screens/web-144.jpeg"
        },
        {
            "nama": "web-145",
            "kategori": "",
            "gambar": "_screens/web-145.jpeg"
        },
        {
            "nama": "web-146",
            "kategori": "",
            "gambar": "_screens/web-146.jpeg"
        },
        {
            "nama": "web-147",
            "kategori": "",
            "gambar": "_screens/web-147.jpeg"
        },
        {
            "nama": "web-148",
            "kategori": "",
            "gambar": "_screens/web-148.jpeg"
        },
        {
            "nama": "web-149",
            "kategori": "",
            "gambar": "_screens/web-149.jpeg"
        },
        {
            "nama": "web-15",
            "kategori": "",
            "gambar": "_screens/web-15.jpeg"
        },
        {
            "nama": "web-150",
            "kategori": "",
            "gambar": "_screens/web-150.jpeg"
        },
        {
            "nama": "web-151",
            "kategori": "",
            "gambar": "_screens/web-151.jpeg"
        },
        {
            "nama": "web-152",
            "kategori": "",
            "gambar": "_screens/web-152.jpeg"
        },
        {
            "nama": "web-153",
            "kategori": "",
            "gambar": "_screens/web-153.jpeg"
        },
        {
            "nama": "web-154",
            "kategori": "",
            "gambar": "_screens/web-154.jpeg"
        },
        {
            "nama": "web-155",
            "kategori": "",
            "gambar": "_screens/web-155.jpeg"
        },
        {
            "nama": "web-156",
            "kategori": "",
            "gambar": "_screens/web-156.jpeg"
        },
        {
            "nama": "web-157",
            "kategori": "",
            "gambar": "_screens/web-157.jpeg"
        },
        {
            "nama": "web-158",
            "kategori": "",
            "gambar": "_screens/web-158.jpeg"
        },
        {
            "nama": "web-159",
            "kategori": "",
            "gambar": "_screens/web-159.jpeg"
        },
        {
            "nama": "web-16",
            "kategori": "",
            "gambar": "_screens/web-16.jpeg"
        },
        {
            "nama": "web-160",
            "kategori": "",
            "gambar": "_screens/web-160.jpeg"
        },
        {
            "nama": "web-161",
            "kategori": "",
            "gambar": "_screens/web-161.jpeg"
        },
        {
            "nama": "web-162",
            "kategori": "",
            "gambar": "_screens/web-162.jpeg"
        },
        {
            "nama": "web-163",
            "kategori": "",
            "gambar": "_screens/web-163.jpeg"
        },
        {
            "nama": "web-164",
            "kategori": "",
            "gambar": "_screens/web-164.jpeg"
        },
        {
            "nama": "web-165",
            "kategori": "",
            "gambar": "_screens/web-165.jpeg"
        },
        {
            "nama": "web-166",
            "kategori": "",
            "gambar": "_screens/web-166.jpeg"
        },
        {
            "nama": "web-167",
            "kategori": "",
            "gambar": "_screens/web-167.jpeg"
        },
        {
            "nama": "web-168",
            "kategori": "",
            "gambar": "_screens/web-168.jpeg"
        },
        {
            "nama": "web-169",
            "kategori": "",
            "gambar": "_screens/web-169.jpeg"
        },
        {
            "nama": "web-17",
            "kategori": "",
            "gambar": "_screens/web-17.jpeg"
        },
        {
            "nama": "web-170",
            "kategori": "",
            "gambar": "_screens/web-170.jpeg"
        },
        {
            "nama": "web-171",
            "kategori": "",
            "gambar": "_screens/web-171.jpeg"
        },
        {
            "nama": "web-172",
            "kategori": "",
            "gambar": "_screens/web-172.jpeg"
        },
        {
            "nama": "web-173",
            "kategori": "",
            "gambar": "_screens/web-173.jpeg"
        },
        {
            "nama": "web-174",
            "kategori": "",
            "gambar": "_screens/web-174.jpeg"
        },
        {
            "nama": "web-175",
            "kategori": "",
            "gambar": "_screens/web-175.jpeg"
        },
        {
            "nama": "web-176",
            "kategori": "",
            "gambar": "_screens/web-176.jpeg"
        },
        {
            "nama": "web-177",
            "kategori": "",
            "gambar": "_screens/web-177.jpeg"
        },
        {
            "nama": "web-178",
            "kategori": "",
            "gambar": "_screens/web-178.jpeg"
        },
        {
            "nama": "web-179",
            "kategori": "",
            "gambar": "_screens/web-179.jpeg"
        },
        {
            "nama": "web-18",
            "kategori": "",
            "gambar": "_screens/web-18.jpeg"
        },
        {
            "nama": "web-180",
            "kategori": "",
            "gambar": "_screens/web-180.jpeg"
        },
        {
            "nama": "web-181",
            "kategori": "",
            "gambar": "_screens/web-181.jpeg"
        },
        {
            "nama": "web-182",
            "kategori": "",
            "gambar": "_screens/web-182.jpeg"
        },
        {
            "nama": "web-183",
            "kategori": "",
            "gambar": "_screens/web-183.jpeg"
        },
        {
            "nama": "web-184",
            "kategori": "",
            "gambar": "_screens/web-184.jpeg"
        },
        {
            "nama": "web-185",
            "kategori": "",
            "gambar": "_screens/web-185.jpeg"
        },
        {
            "nama": "web-186",
            "kategori": "",
            "gambar": "_screens/web-186.jpeg"
        },
        {
            "nama": "web-187",
            "kategori": "",
            "gambar": "_screens/web-187.jpeg"
        },
        {
            "nama": "web-188",
            "kategori": "",
            "gambar": "_screens/web-188.jpeg"
        },
        {
            "nama": "web-189",
            "kategori": "",
            "gambar": "_screens/web-189.jpeg"
        },
        {
            "nama": "web-19",
            "kategori": "",
            "gambar": "_screens/web-19.jpeg"
        },
        {
            "nama": "web-190",
            "kategori": "",
            "gambar": "_screens/web-190.jpeg"
        },
        {
            "nama": "web-191",
            "kategori": "",
            "gambar": "_screens/web-191.jpeg"
        },
        {
            "nama": "web-192",
            "kategori": "",
            "gambar": "_screens/web-192.jpeg"
        },
        {
            "nama": "web-193",
            "kategori": "",
            "gambar": "_screens/web-193.jpeg"
        },
        {
            "nama": "web-194",
            "kategori": "",
            "gambar": "_screens/web-194.jpeg"
        },
        {
            "nama": "web-195",
            "kategori": "",
            "gambar": "_screens/web-195.jpeg"
        },
        {
            "nama": "web-196",
            "kategori": "",
            "gambar": "_screens/web-196.jpeg"
        },
        {
            "nama": "web-197",
            "kategori": "",
            "gambar": "_screens/web-197.jpeg"
        },
        {
            "nama": "web-198",
            "kategori": "",
            "gambar": "_screens/web-198.jpeg"
        },
        {
            "nama": "web-199",
            "kategori": "",
            "gambar": "_screens/web-199.jpeg"
        },
        {
            "nama": "web-20",
            "kategori": "",
            "gambar": "_screens/web-20.jpeg"
        },
        {
            "nama": "web-200",
            "kategori": "",
            "gambar": "_screens/web-200.jpeg"
        },
        {
            "nama": "web-201",
            "kategori": "",
            "gambar": "_screens/web-201.jpeg"
        },
        {
            "nama": "web-202",
            "kategori": "",
            "gambar": "_screens/web-202.jpeg"
        },
        {
            "nama": "web-203",
            "kategori": "",
            "gambar": "_screens/web-203.jpeg"
        },
        {
            "nama": "web-204",
            "kategori": "",
            "gambar": "_screens/web-204.jpeg"
        },
        {
            "nama": "web-205",
            "kategori": "",
            "gambar": "_screens/web-205.jpeg"
        },
        {
            "nama": "web-206",
            "kategori": "",
            "gambar": "_screens/web-206.jpeg"
        },
        {
            "nama": "web-207",
            "kategori": "",
            "gambar": "_screens/web-207.jpeg"
        },
        {
            "nama": "web-208",
            "kategori": "",
            "gambar": "_screens/web-208.jpeg"
        },
        {
            "nama": "web-209",
            "kategori": "",
            "gambar": "_screens/web-209.jpeg"
        },
        {
            "nama": "web-21",
            "kategori": "",
            "gambar": "_screens/web-21.jpeg"
        },
        {
            "nama": "web-210",
            "kategori": "",
            "gambar": "_screens/web-210.jpeg"
        },
        {
            "nama": "web-211",
            "kategori": "",
            "gambar": "_screens/web-211.jpeg"
        },
        {
            "nama": "web-212",
            "kategori": "",
            "gambar": "_screens/web-212.jpeg"
        },
        {
            "nama": "web-213",
            "kategori": "",
            "gambar": "_screens/web-213.jpeg"
        },
        {
            "nama": "web-214",
            "kategori": "",
            "gambar": "_screens/web-214.jpeg"
        },
        {
            "nama": "web-215",
            "kategori": "",
            "gambar": "_screens/web-215.jpeg"
        },
        {
            "nama": "web-216",
            "kategori": "",
            "gambar": "_screens/web-216.jpeg"
        },
        {
            "nama": "web-217",
            "kategori": "",
            "gambar": "_screens/web-217.jpeg"
        },
        {
            "nama": "web-218",
            "kategori": "",
            "gambar": "_screens/web-218.jpeg"
        },
        {
            "nama": "web-219",
            "kategori": "",
            "gambar": "_screens/web-219.jpeg"
        },
        {
            "nama": "web-22",
            "kategori": "",
            "gambar": "_screens/web-22.jpeg"
        },
        {
            "nama": "web-220",
            "kategori": "",
            "gambar": "_screens/web-220.jpeg"
        },
        {
            "nama": "web-221",
            "kategori": "",
            "gambar": "_screens/web-221.jpeg"
        },
        {
            "nama": "web-222",
            "kategori": "",
            "gambar": "_screens/web-222.jpeg"
        },
        {
            "nama": "web-223",
            "kategori": "",
            "gambar": "_screens/web-223.jpeg"
        },
        {
            "nama": "web-224",
            "kategori": "",
            "gambar": "_screens/web-224.jpeg"
        },
        {
            "nama": "web-225",
            "kategori": "",
            "gambar": "_screens/web-225.jpeg"
        },
        {
            "nama": "web-226",
            "kategori": "",
            "gambar": "_screens/web-226.jpeg"
        },
        {
            "nama": "web-227",
            "kategori": "",
            "gambar": "_screens/web-227.jpeg"
        },
        {
            "nama": "web-228",
            "kategori": "",
            "gambar": "_screens/web-228.jpeg"
        },
        {
            "nama": "web-229",
            "kategori": "",
            "gambar": "_screens/web-229.jpeg"
        },
        {
            "nama": "web-23",
            "kategori": "",
            "gambar": "_screens/web-23.jpeg"
        },
        {
            "nama": "web-230",
            "kategori": "",
            "gambar": "_screens/web-230.jpeg"
        },
        {
            "nama": "web-231",
            "kategori": "",
            "gambar": "_screens/web-231.jpeg"
        },
        {
            "nama": "web-232",
            "kategori": "",
            "gambar": "_screens/web-232.jpeg"
        },
        {
            "nama": "web-233",
            "kategori": "",
            "gambar": "_screens/web-233.jpeg"
        },
        {
            "nama": "web-234",
            "kategori": "",
            "gambar": "_screens/web-234.jpeg"
        },
        {
            "nama": "web-235",
            "kategori": "",
            "gambar": "_screens/web-235.jpeg"
        },
        {
            "nama": "web-236",
            "kategori": "",
            "gambar": "_screens/web-236.jpeg"
        },
        {
            "nama": "web-237",
            "kategori": "",
            "gambar": "_screens/web-237.jpeg"
        },
        {
            "nama": "web-238",
            "kategori": "",
            "gambar": "_screens/web-238.jpeg"
        },
        {
            "nama": "web-239",
            "kategori": "",
            "gambar": "_screens/web-239.jpeg"
        },
        {
            "nama": "web-24",
            "kategori": "",
            "gambar": "_screens/web-24.jpeg"
        },
        {
            "nama": "web-240",
            "kategori": "",
            "gambar": "_screens/web-240.jpeg"
        },
        {
            "nama": "web-241",
            "kategori": "",
            "gambar": "_screens/web-241.jpeg"
        },
        {
            "nama": "web-242",
            "kategori": "",
            "gambar": "_screens/web-242.jpeg"
        },
        {
            "nama": "web-243",
            "kategori": "",
            "gambar": "_screens/web-243.jpeg"
        },
        {
            "nama": "web-244",
            "kategori": "",
            "gambar": "_screens/web-244.jpeg"
        },
        {
            "nama": "web-245",
            "kategori": "",
            "gambar": "_screens/web-245.jpeg"
        },
        {
            "nama": "web-246",
            "kategori": "",
            "gambar": "_screens/web-246.jpeg"
        },
        {
            "nama": "web-247",
            "kategori": "",
            "gambar": "_screens/web-247.jpeg"
        },
        {
            "nama": "web-248",
            "kategori": "",
            "gambar": "_screens/web-248.jpeg"
        },
        {
            "nama": "web-249",
            "kategori": "",
            "gambar": "_screens/web-249.jpeg"
        },
        {
            "nama": "web-25",
            "kategori": "",
            "gambar": "_screens/web-25.jpeg"
        },
        {
            "nama": "web-250",
            "kategori": "",
            "gambar": "_screens/web-250.jpeg"
        },
        {
            "nama": "web-251",
            "kategori": "",
            "gambar": "_screens/web-251.jpeg"
        },
        {
            "nama": "web-252",
            "kategori": "",
            "gambar": "_screens/web-252.jpeg"
        },
        {
            "nama": "web-253",
            "kategori": "",
            "gambar": "_screens/web-253.jpeg"
        },
        {
            "nama": "web-254",
            "kategori": "",
            "gambar": "_screens/web-254.jpeg"
        },
        {
            "nama": "web-255",
            "kategori": "",
            "gambar": "_screens/web-255.jpeg"
        },
        {
            "nama": "web-256",
            "kategori": "",
            "gambar": "_screens/web-256.jpeg"
        },
        {
            "nama": "web-257",
            "kategori": "",
            "gambar": "_screens/web-257.jpeg"
        },
        {
            "nama": "web-258",
            "kategori": "",
            "gambar": "_screens/web-258.jpeg"
        },
        {
            "nama": "web-259",
            "kategori": "",
            "gambar": "_screens/web-259.jpeg"
        },
        {
            "nama": "web-26",
            "kategori": "",
            "gambar": "_screens/web-26.jpeg"
        },
        {
            "nama": "web-260",
            "kategori": "",
            "gambar": "_screens/web-260.jpeg"
        },
        {
            "nama": "web-261",
            "kategori": "",
            "gambar": "_screens/web-261.jpeg"
        },
        {
            "nama": "web-262",
            "kategori": "",
            "gambar": "_screens/web-262.jpeg"
        },
        {
            "nama": "web-263",
            "kategori": "",
            "gambar": "_screens/web-263.jpeg"
        },
        {
            "nama": "web-264",
            "kategori": "",
            "gambar": "_screens/web-264.jpeg"
        },
        {
            "nama": "web-265",
            "kategori": "",
            "gambar": "_screens/web-265.jpeg"
        },
        {
            "nama": "web-266",
            "kategori": "",
            "gambar": "_screens/web-266.jpeg"
        },
        {
            "nama": "web-267",
            "kategori": "",
            "gambar": "_screens/web-267.jpeg"
        },
        {
            "nama": "web-268",
            "kategori": "",
            "gambar": "_screens/web-268.jpeg"
        },
        {
            "nama": "web-269",
            "kategori": "",
            "gambar": "_screens/web-269.jpeg"
        },
        {
            "nama": "web-27",
            "kategori": "",
            "gambar": "_screens/web-27.jpeg"
        },
        {
            "nama": "web-270",
            "kategori": "",
            "gambar": "_screens/web-270.jpeg"
        },
        {
            "nama": "web-271",
            "kategori": "",
            "gambar": "_screens/web-271.jpeg"
        },
        {
            "nama": "web-272",
            "kategori": "",
            "gambar": "_screens/web-272.jpeg"
        },
        {
            "nama": "web-273",
            "kategori": "",
            "gambar": "_screens/web-273.jpeg"
        },
        {
            "nama": "web-274",
            "kategori": "",
            "gambar": "_screens/web-274.jpeg"
        },
        {
            "nama": "web-275",
            "kategori": "",
            "gambar": "_screens/web-275.jpeg"
        },
        {
            "nama": "web-276",
            "kategori": "",
            "gambar": "_screens/web-276.jpeg"
        },
        {
            "nama": "web-277",
            "kategori": "",
            "gambar": "_screens/web-277.jpeg"
        },
        {
            "nama": "web-278",
            "kategori": "",
            "gambar": "_screens/web-278.jpeg"
        },
        {
            "nama": "web-279",
            "kategori": "",
            "gambar": "_screens/web-279.jpeg"
        },
        {
            "nama": "web-28",
            "kategori": "",
            "gambar": "_screens/web-28.jpeg"
        },
        {
            "nama": "web-280",
            "kategori": "",
            "gambar": "_screens/web-280.jpeg"
        },
        {
            "nama": "web-281",
            "kategori": "",
            "gambar": "_screens/web-281.jpeg"
        },
        {
            "nama": "web-282",
            "kategori": "",
            "gambar": "_screens/web-282.jpeg"
        },
        {
            "nama": "web-283",
            "kategori": "",
            "gambar": "_screens/web-283.jpeg"
        },
        {
            "nama": "web-284",
            "kategori": "",
            "gambar": "_screens/web-284.jpeg"
        },
        {
            "nama": "web-285",
            "kategori": "",
            "gambar": "_screens/web-285.jpeg"
        },
        {
            "nama": "web-286",
            "kategori": "",
            "gambar": "_screens/web-286.jpeg"
        },
        {
            "nama": "web-287",
            "kategori": "",
            "gambar": "_screens/web-287.jpeg"
        },
        {
            "nama": "web-288",
            "kategori": "",
            "gambar": "_screens/web-288.jpeg"
        },
        {
            "nama": "web-289",
            "kategori": "",
            "gambar": "_screens/web-289.jpeg"
        },
        {
            "nama": "web-29",
            "kategori": "",
            "gambar": "_screens/web-29.jpeg"
        },
        {
            "nama": "web-290",
            "kategori": "",
            "gambar": "_screens/web-290.jpeg"
        },
        {
            "nama": "web-291",
            "kategori": "",
            "gambar": "_screens/web-291.jpeg"
        },
        {
            "nama": "web-292",
            "kategori": "",
            "gambar": "_screens/web-292.jpeg"
        },
        {
            "nama": "web-293",
            "kategori": "",
            "gambar": "_screens/web-293.jpeg"
        },
        {
            "nama": "web-294",
            "kategori": "",
            "gambar": "_screens/web-294.jpeg"
        },
        {
            "nama": "web-295",
            "kategori": "",
            "gambar": "_screens/web-295.jpeg"
        },
        {
            "nama": "web-296",
            "kategori": "",
            "gambar": "_screens/web-296.jpeg"
        },
        {
            "nama": "web-297",
            "kategori": "",
            "gambar": "_screens/web-297.jpeg"
        },
        {
            "nama": "web-298",
            "kategori": "",
            "gambar": "_screens/web-298.jpeg"
        },
        {
            "nama": "web-299",
            "kategori": "",
            "gambar": "_screens/web-299.jpeg"
        },
        {
            "nama": "web-30",
            "kategori": "",
            "gambar": "_screens/web-30.jpeg"
        },
        {
            "nama": "web-300",
            "kategori": "",
            "gambar": "_screens/web-300.jpeg"
        },
        {
            "nama": "web-301",
            "kategori": "",
            "gambar": "_screens/web-301.jpeg"
        },
        {
            "nama": "web-302",
            "kategori": "",
            "gambar": "_screens/web-302.jpeg"
        },
        {
            "nama": "web-303",
            "kategori": "",
            "gambar": "_screens/web-303.jpeg"
        },
        {
            "nama": "web-304",
            "kategori": "",
            "gambar": "_screens/web-304.jpeg"
        },
        {
            "nama": "web-305",
            "kategori": "",
            "gambar": "_screens/web-305.jpeg"
        },
        {
            "nama": "web-306",
            "kategori": "",
            "gambar": "_screens/web-306.jpeg"
        },
        {
            "nama": "web-307",
            "kategori": "",
            "gambar": "_screens/web-307.jpeg"
        },
        {
            "nama": "web-308",
            "kategori": "",
            "gambar": "_screens/web-308.jpeg"
        },
        {
            "nama": "web-309",
            "kategori": "",
            "gambar": "_screens/web-309.jpeg"
        },
        {
            "nama": "web-31",
            "kategori": "",
            "gambar": "_screens/web-31.jpeg"
        },
        {
            "nama": "web-310",
            "kategori": "",
            "gambar": "_screens/web-310.jpeg"
        },
        {
            "nama": "web-311",
            "kategori": "",
            "gambar": "_screens/web-311.jpeg"
        },
        {
            "nama": "web-312",
            "kategori": "",
            "gambar": "_screens/web-312.jpeg"
        },
        {
            "nama": "web-313",
            "kategori": "",
            "gambar": "_screens/web-313.jpeg"
        },
        {
            "nama": "web-314",
            "kategori": "",
            "gambar": "_screens/web-314.jpeg"
        },
        {
            "nama": "web-315",
            "kategori": "",
            "gambar": "_screens/web-315.jpeg"
        },
        {
            "nama": "web-316",
            "kategori": "",
            "gambar": "_screens/web-316.jpeg"
        },
        {
            "nama": "web-317",
            "kategori": "",
            "gambar": "_screens/web-317.jpeg"
        },
        {
            "nama": "web-318",
            "kategori": "",
            "gambar": "_screens/web-318.jpeg"
        },
        {
            "nama": "web-319",
            "kategori": "",
            "gambar": "_screens/web-319.jpeg"
        },
        {
            "nama": "web-32",
            "kategori": "",
            "gambar": "_screens/web-32.jpeg"
        },
        {
            "nama": "web-320",
            "kategori": "",
            "gambar": "_screens/web-320.jpeg"
        },
        {
            "nama": "web-321",
            "kategori": "",
            "gambar": "_screens/web-321.jpeg"
        },
        {
            "nama": "web-322",
            "kategori": "",
            "gambar": "_screens/web-322.jpeg"
        },
        {
            "nama": "web-323",
            "kategori": "",
            "gambar": "_screens/web-323.jpeg"
        },
        {
            "nama": "web-324",
            "kategori": "",
            "gambar": "_screens/web-324.jpeg"
        },
        {
            "nama": "web-325",
            "kategori": "",
            "gambar": "_screens/web-325.jpeg"
        },
        {
            "nama": "web-326",
            "kategori": "",
            "gambar": "_screens/web-326.jpeg"
        },
        {
            "nama": "web-327",
            "kategori": "",
            "gambar": "_screens/web-327.jpeg"
        },
        {
            "nama": "web-328",
            "kategori": "",
            "gambar": "_screens/web-328.jpeg"
        },
        {
            "nama": "web-329",
            "kategori": "",
            "gambar": "_screens/web-329.jpeg"
        },
        {
            "nama": "web-330",
            "kategori": "",
            "gambar": "_screens/web-330.jpeg"
        },
        {
            "nama": "web-331",
            "kategori": "",
            "gambar": "_screens/web-331.jpeg"
        },
        {
            "nama": "web-332",
            "kategori": "",
            "gambar": "_screens/web-332.jpeg"
        },
        {
            "nama": "web-333",
            "kategori": "",
            "gambar": "_screens/web-333.jpeg"
        },
        {
            "nama": "web-334",
            "kategori": "",
            "gambar": "_screens/web-334.jpeg"
        },
        {
            "nama": "web-335",
            "kategori": "",
            "gambar": "_screens/web-335.jpeg"
        },
        {
            "nama": "web-336",
            "kategori": "",
            "gambar": "_screens/web-336.jpeg"
        },
        {
            "nama": "web-337",
            "kategori": "",
            "gambar": "_screens/web-337.jpeg"
        },
        {
            "nama": "web-338",
            "kategori": "",
            "gambar": "_screens/web-338.jpeg"
        },
        {
            "nama": "web-339",
            "kategori": "",
            "gambar": "_screens/web-339.jpeg"
        },
        {
            "nama": "web-34",
            "kategori": "",
            "gambar": "_screens/web-34.jpeg"
        },
        {
            "nama": "web-340",
            "kategori": "",
            "gambar": "_screens/web-340.jpeg"
        },
        {
            "nama": "web-341",
            "kategori": "",
            "gambar": "_screens/web-341.jpeg"
        },
        {
            "nama": "web-342",
            "kategori": "",
            "gambar": "_screens/web-342.jpeg"
        },
        {
            "nama": "web-343",
            "kategori": "",
            "gambar": "_screens/web-343.jpeg"
        },
        {
            "nama": "web-344",
            "kategori": "",
            "gambar": "_screens/web-344.jpeg"
        },
        {
            "nama": "web-345",
            "kategori": "",
            "gambar": "_screens/web-345.jpeg"
        },
        {
            "nama": "web-346",
            "kategori": "",
            "gambar": "_screens/web-346.jpeg"
        },
        {
            "nama": "web-347",
            "kategori": "",
            "gambar": "_screens/web-347.jpeg"
        },
        {
            "nama": "web-348",
            "kategori": "",
            "gambar": "_screens/web-348.jpeg"
        },
        {
            "nama": "web-349",
            "kategori": "",
            "gambar": "_screens/web-349.jpeg"
        },
        {
            "nama": "web-35",
            "kategori": "",
            "gambar": "_screens/web-35.jpeg"
        },
        {
            "nama": "web-350",
            "kategori": "",
            "gambar": "_screens/web-350.jpeg"
        },
        {
            "nama": "web-351",
            "kategori": "",
            "gambar": "_screens/web-351.jpeg"
        },
        {
            "nama": "web-352",
            "kategori": "",
            "gambar": "_screens/web-352.jpeg"
        },
        {
            "nama": "web-353",
            "kategori": "",
            "gambar": "_screens/web-353.jpeg"
        },
        {
            "nama": "web-354",
            "kategori": "",
            "gambar": "_screens/web-354.jpeg"
        },
        {
            "nama": "web-355",
            "kategori": "",
            "gambar": "_screens/web-355.jpeg"
        },
        {
            "nama": "web-356",
            "kategori": "",
            "gambar": "_screens/web-356.jpeg"
        },
        {
            "nama": "web-357",
            "kategori": "",
            "gambar": "_screens/web-357.jpeg"
        },
        {
            "nama": "web-358",
            "kategori": "",
            "gambar": "_screens/web-358.jpeg"
        },
        {
            "nama": "web-359",
            "kategori": "",
            "gambar": "_screens/web-359.jpeg"
        },
        {
            "nama": "web-36",
            "kategori": "",
            "gambar": "_screens/web-36.jpeg"
        },
        {
            "nama": "web-360",
            "kategori": "",
            "gambar": "_screens/web-360.jpeg"
        },
        {
            "nama": "web-361",
            "kategori": "",
            "gambar": "_screens/web-361.jpeg"
        },
        {
            "nama": "web-362",
            "kategori": "",
            "gambar": "_screens/web-362.jpeg"
        },
        {
            "nama": "web-363",
            "kategori": "",
            "gambar": "_screens/web-363.jpeg"
        },
        {
            "nama": "web-364",
            "kategori": "",
            "gambar": "_screens/web-364.jpeg"
        },
        {
            "nama": "web-365",
            "kategori": "",
            "gambar": "_screens/web-365.jpeg"
        },
        {
            "nama": "web-366",
            "kategori": "",
            "gambar": "_screens/web-366.jpeg"
        },
        {
            "nama": "web-367",
            "kategori": "",
            "gambar": "_screens/web-367.jpeg"
        },
        {
            "nama": "web-368",
            "kategori": "",
            "gambar": "_screens/web-368.jpeg"
        },
        {
            "nama": "web-369",
            "kategori": "",
            "gambar": "_screens/web-369.jpeg"
        },
        {
            "nama": "web-37",
            "kategori": "",
            "gambar": "_screens/web-37.jpeg"
        },
        {
            "nama": "web-370",
            "kategori": "",
            "gambar": "_screens/web-370.jpeg"
        },
        {
            "nama": "web-371",
            "kategori": "",
            "gambar": "_screens/web-371.jpeg"
        },
        {
            "nama": "web-372",
            "kategori": "",
            "gambar": "_screens/web-372.jpeg"
        },
        {
            "nama": "web-373",
            "kategori": "",
            "gambar": "_screens/web-373.jpeg"
        },
        {
            "nama": "web-374",
            "kategori": "",
            "gambar": "_screens/web-374.jpeg"
        },
        {
            "nama": "web-375",
            "kategori": "",
            "gambar": "_screens/web-375.jpeg"
        },
        {
            "nama": "web-376",
            "kategori": "",
            "gambar": "_screens/web-376.jpeg"
        },
        {
            "nama": "web-377",
            "kategori": "",
            "gambar": "_screens/web-377.jpeg"
        },
        {
            "nama": "web-378",
            "kategori": "",
            "gambar": "_screens/web-378.jpeg"
        },
        {
            "nama": "web-379",
            "kategori": "",
            "gambar": "_screens/web-379.jpeg"
        },
        {
            "nama": "web-38",
            "kategori": "",
            "gambar": "_screens/web-38.jpeg"
        },
        {
            "nama": "web-380",
            "kategori": "",
            "gambar": "_screens/web-380.jpeg"
        },
        {
            "nama": "web-381",
            "kategori": "",
            "gambar": "_screens/web-381.jpeg"
        },
        {
            "nama": "web-382",
            "kategori": "",
            "gambar": "_screens/web-382.jpeg"
        },
        {
            "nama": "web-383",
            "kategori": "",
            "gambar": "_screens/web-383.jpeg"
        },
        {
            "nama": "web-384",
            "kategori": "",
            "gambar": "_screens/web-384.jpeg"
        },
        {
            "nama": "web-385",
            "kategori": "",
            "gambar": "_screens/web-385.jpeg"
        },
        {
            "nama": "web-386",
            "kategori": "",
            "gambar": "_screens/web-386.jpeg"
        },
        {
            "nama": "web-387",
            "kategori": "",
            "gambar": "_screens/web-387.jpeg"
        },
        {
            "nama": "web-388",
            "kategori": "",
            "gambar": "_screens/web-388.jpeg"
        },
        {
            "nama": "web-389",
            "kategori": "",
            "gambar": "_screens/web-389.jpeg"
        },
        {
            "nama": "web-39",
            "kategori": "",
            "gambar": "_screens/web-39.jpeg"
        },
        {
            "nama": "web-390",
            "kategori": "",
            "gambar": "_screens/web-390.jpeg"
        },
        {
            "nama": "web-391",
            "kategori": "",
            "gambar": "_screens/web-391.jpeg"
        },
        {
            "nama": "web-392",
            "kategori": "",
            "gambar": "_screens/web-392.jpeg"
        },
        {
            "nama": "web-393",
            "kategori": "",
            "gambar": "_screens/web-393.jpeg"
        },
        {
            "nama": "web-394",
            "kategori": "",
            "gambar": "_screens/web-394.jpeg"
        },
        {
            "nama": "web-395",
            "kategori": "",
            "gambar": "_screens/web-395.jpeg"
        },
        {
            "nama": "web-396",
            "kategori": "",
            "gambar": "_screens/web-396.jpeg"
        },
        {
            "nama": "web-397",
            "kategori": "",
            "gambar": "_screens/web-397.jpeg"
        },
        {
            "nama": "web-398",
            "kategori": "",
            "gambar": "_screens/web-398.jpeg"
        },
        {
            "nama": "web-399",
            "kategori": "",
            "gambar": "_screens/web-399.jpeg"
        },
        {
            "nama": "web-40",
            "kategori": "",
            "gambar": "_screens/web-40.jpeg"
        },
        {
            "nama": "web-400",
            "kategori": "",
            "gambar": "_screens/web-400.jpeg"
        },
        {
            "nama": "web-401",
            "kategori": "",
            "gambar": "_screens/web-401.jpeg"
        },
        {
            "nama": "web-402",
            "kategori": "",
            "gambar": "_screens/web-402.jpeg"
        },
        {
            "nama": "web-403",
            "kategori": "",
            "gambar": "_screens/web-403.jpeg"
        },
        {
            "nama": "web-404",
            "kategori": "",
            "gambar": "_screens/web-404.jpeg"
        },
        {
            "nama": "web-405",
            "kategori": "",
            "gambar": "_screens/web-405.jpeg"
        },
        {
            "nama": "web-406",
            "kategori": "",
            "gambar": "_screens/web-406.jpeg"
        },
        {
            "nama": "web-407",
            "kategori": "",
            "gambar": "_screens/web-407.jpeg"
        },
        {
            "nama": "web-408",
            "kategori": "",
            "gambar": "_screens/web-408.jpeg"
        },
        {
            "nama": "web-409",
            "kategori": "",
            "gambar": "_screens/web-409.jpeg"
        },
        {
            "nama": "web-41",
            "kategori": "",
            "gambar": "_screens/web-41.jpeg"
        },
        {
            "nama": "web-410",
            "kategori": "",
            "gambar": "_screens/web-410.jpeg"
        },
        {
            "nama": "web-42",
            "kategori": "",
            "gambar": "_screens/web-42.jpeg"
        },
        {
            "nama": "web-43",
            "kategori": "",
            "gambar": "_screens/web-43.jpeg"
        },
        {
            "nama": "web-44",
            "kategori": "",
            "gambar": "_screens/web-44.jpeg"
        },
        {
            "nama": "web-45",
            "kategori": "",
            "gambar": "_screens/web-45.jpeg"
        },
        {
            "nama": "web-46",
            "kategori": "",
            "gambar": "_screens/web-46.jpeg"
        },
        {
            "nama": "web-47",
            "kategori": "",
            "gambar": "_screens/web-47.jpeg"
        },
        {
            "nama": "web-48",
            "kategori": "",
            "gambar": "_screens/web-48.jpeg"
        },
        {
            "nama": "web-49",
            "kategori": "",
            "gambar": "_screens/web-49.jpeg"
        },
        {
            "nama": "web-50",
            "kategori": "",
            "gambar": "_screens/web-50.jpeg"
        },
        {
            "nama": "web-51",
            "kategori": "",
            "gambar": "_screens/web-51.jpeg"
        },
        {
            "nama": "web-52",
            "kategori": "",
            "gambar": "_screens/web-52.jpeg"
        },
        {
            "nama": "web-53",
            "kategori": "",
            "gambar": "_screens/web-53.jpeg"
        },
        {
            "nama": "web-54",
            "kategori": "",
            "gambar": "_screens/web-54.jpeg"
        },
        {
            "nama": "web-55",
            "kategori": "",
            "gambar": "_screens/web-55.jpeg"
        },
        {
            "nama": "web-56",
            "kategori": "",
            "gambar": "_screens/web-56.jpeg"
        },
        {
            "nama": "web-57",
            "kategori": "",
            "gambar": "_screens/web-57.jpeg"
        },
        {
            "nama": "web-58",
            "kategori": "",
            "gambar": "_screens/web-58.jpeg"
        },
        {
            "nama": "web-59",
            "kategori": "",
            "gambar": "_screens/web-59.jpeg"
        },
        {
            "nama": "web-60",
            "kategori": "",
            "gambar": "_screens/web-60.jpeg"
        },
        {
            "nama": "web-61",
            "kategori": "",
            "gambar": "_screens/web-61.jpeg"
        },
        {
            "nama": "web-62",
            "kategori": "",
            "gambar": "_screens/web-62.jpeg"
        },
        {
            "nama": "web-63",
            "kategori": "",
            "gambar": "_screens/web-63.jpeg"
        },
        {
            "nama": "web-64",
            "kategori": "",
            "gambar": "_screens/web-64.jpeg"
        },
        {
            "nama": "web-65",
            "kategori": "",
            "gambar": "_screens/web-65.jpeg"
        },
        {
            "nama": "web-66",
            "kategori": "",
            "gambar": "_screens/web-66.jpeg"
        },
        {
            "nama": "web-67",
            "kategori": "",
            "gambar": "_screens/web-67.jpeg"
        },
        {
            "nama": "web-68",
            "kategori": "",
            "gambar": "_screens/web-68.jpeg"
        },
        {
            "nama": "web-69",
            "kategori": "",
            "gambar": "_screens/web-69.jpeg"
        },
        {
            "nama": "web-70",
            "kategori": "",
            "gambar": "_screens/web-70.jpeg"
        },
        {
            "nama": "web-71",
            "kategori": "",
            "gambar": "_screens/web-71.jpeg"
        },
        {
            "nama": "web-72",
            "kategori": "",
            "gambar": "_screens/web-72.jpeg"
        },
        {
            "nama": "web-73",
            "kategori": "",
            "gambar": "_screens/web-73.jpeg"
        },
        {
            "nama": "web-74",
            "kategori": "",
            "gambar": "_screens/web-74.jpeg"
        },
        {
            "nama": "web-75",
            "kategori": "",
            "gambar": "_screens/web-75.jpeg"
        },
        {
            "nama": "web-76",
            "kategori": "",
            "gambar": "_screens/web-76.jpeg"
        },
        {
            "nama": "web-77",
            "kategori": "",
            "gambar": "_screens/web-77.jpeg"
        },
        {
            "nama": "web-78",
            "kategori": "",
            "gambar": "_screens/web-78.jpeg"
        },
        {
            "nama": "web-79",
            "kategori": "",
            "gambar": "_screens/web-79.jpeg"
        },
        {
            "nama": "web-80",
            "kategori": "",
            "gambar": "_screens/web-80.jpeg"
        },
        {
            "nama": "web-81",
            "kategori": "",
            "gambar": "_screens/web-81.jpeg"
        },
        {
            "nama": "web-82",
            "kategori": "",
            "gambar": "_screens/web-82.jpeg"
        },
        {
            "nama": "web-83",
            "kategori": "",
            "gambar": "_screens/web-83.jpeg"
        },
        {
            "nama": "web-84",
            "kategori": "",
            "gambar": "_screens/web-84.jpeg"
        },
        {
            "nama": "web-85",
            "kategori": "",
            "gambar": "_screens/web-85.jpeg"
        },
        {
            "nama": "web-86",
            "kategori": "",
            "gambar": "_screens/web-86.jpeg"
        },
        {
            "nama": "web-87",
            "kategori": "",
            "gambar": "_screens/web-87.jpeg"
        },
        {
            "nama": "web-88",
            "kategori": "",
            "gambar": "_screens/web-88.jpeg"
        },
        {
            "nama": "web-89",
            "kategori": "",
            "gambar": "_screens/web-89.jpeg"
        },
        {
            "nama": "web-90",
            "kategori": "",
            "gambar": "_screens/web-90.jpeg"
        },
        {
            "nama": "web-91",
            "kategori": "",
            "gambar": "_screens/web-91.jpeg"
        },
        {
            "nama": "web-92",
            "kategori": "",
            "gambar": "_screens/web-92.jpeg"
        },
        {
            "nama": "web-93",
            "kategori": "",
            "gambar": "_screens/web-93.jpeg"
        },
        {
            "nama": "web-94",
            "kategori": "",
            "gambar": "_screens/web-94.jpeg"
        },
        {
            "nama": "web-95",
            "kategori": "",
            "gambar": "_screens/web-95.jpeg"
        },
        {
            "nama": "web-96",
            "kategori": "",
            "gambar": "_screens/web-96.jpeg"
        },
        {
            "nama": "web-97",
            "kategori": "",
            "gambar": "_screens/web-97.jpeg"
        },
        {
            "nama": "web-98",
            "kategori": "",
            "gambar": "_screens/web-98.jpeg"
        },
        {
            "nama": "web-99",
            "kategori": "",
            "gambar": "_screens/web-99.jpeg"
        }
    ];

    const gridContainer = $('#showcase-grid');
    const navContainer = $('.filter-nav');

    // Fungsi untuk membuat HTML satu kartu
    function createCard(item) {
        const name = item.nama;
        const imageName = item.gambar;
        const category = item.kategori;
        const fallbackImage = `https://placehold.co/600x400/1f2937/ffffff?text=${encodeURIComponent(name.replace(' ', '+'))}`;

        return `
                    <div class="p-4 card-wrapper">
                        <div class="card-item group rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
                            <a class="no-underline" href="#">
                                <div class="overflow-hidden">
                                    <img class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                                        src="${imageName}" 
                                        alt="${name}" 
                                        onerror="this.onerror=null;this.src='${fallbackImage}';" />
                                </div>
                                <div class="p-5 text-center">
                                    <h4 class="text-lg font-bold text-white mb-2 capitalize">${name}</h4>
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="text-sm text-gray-400 font-medium">${category}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                `;
    }

    // Fungsi untuk me-render grid berdasarkan data yang diberikan
    function renderGrid(data) {
        gridContainer.fadeOut(200, function () {
            $(this).empty(); // Kosongkan grid setelah fade out

            if (data.length === 0) {
                $(this).html('<p class="w-full text-center text-gray-400">Tidak ada template yang cocok.</p>').fadeIn(200);
                return;
            }

            // Tentukan jumlah kolom
            const numColumns = window.innerWidth >= 768 ? 3 : 1; // 3 kolom untuk desktop, 1 untuk mobile
            const columnsData = Array.from({ length: numColumns }, () => []);

            // Distribusikan item ke kolom-kolom untuk efek masonry
            data.forEach((item, index) => {
                columnsData[index % numColumns].push(item);
            });

            columnsData.forEach(columnItems => {
                const columnDiv = $('<div class="w-full md:w-1/3"></div>');
                let columnHtml = '';
                columnItems.forEach(item => {
                    columnHtml += createCard(item);
                });
                columnDiv.html(columnHtml);
                $(this).append(columnDiv);
            });

            $(this).fadeIn(200);
        });
    }

    // Generate Filter Navigation
    const categories = new Set(templateData.map(item => item.kategori));
    let navLinks = '<a class="nav-link active text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 cursor-pointer" href="#" data-filter="*">Semua</a>';
    const sortedCategories = Array.from(categories).filter(c => c).sort(); // Filter out empty categories

    sortedCategories.forEach(category => {
        navLinks += `<a class="nav-link text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer" href="#" data-filter="${category}">${category}</a>`;
    });
    navContainer.html(navLinks);

    // Bind filter click event
    navContainer.on('click', 'a', function (event) {
        event.preventDefault();
        const filterValue = $(this).attr('data-filter');

        if ($(this).hasClass('active')) {
            return;
        }

        navContainer.find('a').removeClass('active');
        $(this).addClass('active');

        const filteredData = filterValue === '*'
            ? templateData
            : templateData.filter(item => item.kategori === filterValue);

        renderGrid(filteredData);
    });

    // Re-render the grid on window resize
    $(window).on('resize', function () {
        renderGrid(templateData);
    });

    // Initial Render
    renderGrid(templateData);
});