const data = [
    {
        "Год": 1953.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 1802.22,
        "Объем добычи (тысяч тонн)": 8226.0,
        "Затраты на исследования (млн руб)": 184.87,
        "Затраты на экобез (млн руб)": 11.23,
        "Уровень занятости (человек)": 1649.0,
        "Инвестиции и финансирование (млн руб)": 131.86,
        "Стоимость 1 акции (руб)": 90.4,
        "Дивиденды на акцию (%)": 2.59,
        "Общая сумма выплат акционерам (млн руб)": 18.73
    },
    {
        "Год": 1954.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 4397.59,
        "Объем добычи (тысяч тонн)": 2963.0,
        "Затраты на исследования (млн руб)": 106.36,
        "Затраты на экобез (млн руб)": 33.21,
        "Уровень занятости (человек)": 4681.0,
        "Инвестиции и финансирование (млн руб)": 383.1,
        "Стоимость 1 акции (руб)": 97.65,
        "Дивиденды на акцию (%)": 4.68,
        "Общая сумма выплат акционерам (млн руб)": 36.56
    },
    {
        "Год": 1955.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 2071.11,
        "Объем добычи (тысяч тонн)": 5725.0,
        "Затраты на исследования (млн руб)": 80.74,
        "Затраты на экобез (млн руб)": 39.54,
        "Уровень занятости (человек)": 2258.0,
        "Инвестиции и финансирование (млн руб)": 453.72,
        "Стоимость 1 акции (руб)": 101.23,
        "Дивиденды на акцию (%)": 6.88,
        "Общая сумма выплат акционерам (млн руб)": 27.86
    },
    {
        "Год": 1956.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 3949.09,
        "Объем добычи (тысяч тонн)": 7417.0,
        "Затраты на исследования (млн руб)": 16.14,
        "Затраты на экобез (млн руб)": 23.63,
        "Уровень занятости (человек)": 602.0,
        "Инвестиции и финансирование (млн руб)": 261.09,
        "Стоимость 1 акции (руб)": 96.69,
        "Дивиденды на акцию (%)": 6.37,
        "Общая сумма выплат акционерам (млн руб)": 6.16
    },
    {
        "Год": 1957.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 2299.1,
        "Объем добычи (тысяч тонн)": 3523.0,
        "Затраты на исследования (млн руб)": 58.93,
        "Затраты на экобез (млн руб)": 27.86,
        "Уровень занятости (человек)": 847.0,
        "Инвестиции и финансирование (млн руб)": 277.86,
        "Стоимость 1 акции (руб)": 93.48,
        "Дивиденды на акцию (%)": 3.72,
        "Общая сумма выплат акционерам (млн руб)": 34.77
    },
    {
        "Год": 1958.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 1196.13,
        "Объем добычи (тысяч тонн)": 1302.0,
        "Затраты на исследования (млн руб)": 165.48,
        "Затраты на экобез (млн руб)": 46.33,
        "Уровень занятости (человек)": 1843.0,
        "Инвестиции и финансирование (млн руб)": 295.66,
        "Стоимость 1 акции (руб)": 87.35,
        "Дивиденды на акцию (%)": 7.71,
        "Общая сумма выплат акционерам (млн руб)": 40.41
    },
    {
        "Год": 1959.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 3441.85,
        "Объем добычи (тысяч тонн)": 8438.0,
        "Затраты на исследования (млн руб)": 242.67,
        "Затраты на экобез (млн руб)": 22.76,
        "Уровень занятости (человек)": 1132.0,
        "Инвестиции и финансирование (млн руб)": 235.42,
        "Стоимость 1 акции (руб)": 99.66,
        "Дивиденды на акцию (%)": 5.57,
        "Общая сумма выплат акционерам (млн руб)": 33.31
    },
    {
        "Год": 1960.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 732.78,
        "Объем добычи (тысяч тонн)": 4115.0,
        "Затраты на исследования (млн руб)": 10.12,
        "Затраты на экобез (млн руб)": 32.99,
        "Уровень занятости (человек)": 4346.0,
        "Инвестиции и финансирование (млн руб)": 317.02,
        "Стоимость 1 акции (руб)": 100.46,
        "Дивиденды на акцию (%)": 8.77,
        "Общая сумма выплат акционерам (млн руб)": 35.24
    },
    {
        "Год": 1961.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 1631.84,
        "Объем добычи (тысяч тонн)": 5809.0,
        "Затраты на исследования (млн руб)": 213.63,
        "Затраты на экобез (млн руб)": 43.96,
        "Уровень занятости (человек)": 2751.0,
        "Инвестиции и финансирование (млн руб)": 411.7,
        "Стоимость 1 акции (руб)": 95.86,
        "Дивиденды на акцию (%)": 3.41,
        "Общая сумма выплат акционерам (млн руб)": 32.69
    },
    {
        "Год": 1962.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 716.14,
        "Объем добычи (тысяч тонн)": 9732.0,
        "Затраты на исследования (млн руб)": 204.72,
        "Затраты на экобез (млн руб)": 45.19,
        "Уровень занятости (человек)": 2306.0,
        "Инвестиции и финансирование (млн руб)": 197.15,
        "Стоимость 1 акции (руб)": 94.07,
        "Дивиденды на акцию (%)": 2.59,
        "Общая сумма выплат акционерам (млн руб)": 4.87
    },
    {
        "Год": 1963.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 2267.06,
        "Объем добычи (тысяч тонн)": 6697.0,
        "Затраты на исследования (млн руб)": 16.21,
        "Затраты на экобез (млн руб)": 36.3,
        "Уровень занятости (человек)": 2947.0,
        "Инвестиции и финансирование (млн руб)": 454.17,
        "Стоимость 1 акции (руб)": 90.79,
        "Дивиденды на акцию (%)": 5.47,
        "Общая сумма выплат акционерам (млн руб)": 29.8
    },
    {
        "Год": 1964.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 1376.51,
        "Объем добычи (тысяч тонн)": 3244.0,
        "Затраты на исследования (млн руб)": 109.95,
        "Затраты на экобез (млн руб)": 32.61,
        "Уровень занятости (человек)": 3490.0,
        "Инвестиции и финансирование (млн руб)": 301.16,
        "Стоимость 1 акции (руб)": 89.74,
        "Дивиденды на акцию (%)": 6.64,
        "Общая сумма выплат акционерам (млн руб)": 59.59
    },
    {
        "Год": 1965.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 3362.24,
        "Объем добычи (тысяч тонн)": 1103.0,
        "Затраты на исследования (млн руб)": 125.07,
        "Затраты на экобез (млн руб)": 17.73,
        "Уровень занятости (человек)": 4200.0,
        "Инвестиции и финансирование (млн руб)": 134.7,
        "Стоимость 1 акции (руб)": 97.13,
        "Дивиденды на акцию (%)": 5.87,
        "Общая сумма выплат акционерам (млн руб)": 39.91
    },
    {
        "Год": 1966.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 2371.28,
        "Объем добычи (тысяч тонн)": 6813.0,
        "Затраты на исследования (млн руб)": 216.43,
        "Затраты на экобез (млн руб)": 29.62,
        "Уровень занятости (человек)": 3967.0,
        "Инвестиции и финансирование (млн руб)": 178.19,
        "Стоимость 1 акции (руб)": 101.31,
        "Дивиденды на акцию (%)": 6.52,
        "Общая сумма выплат акционерам (млн руб)": 6.61
    },
    {
        "Год": 1967.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 2942.69,
        "Объем добычи (тысяч тонн)": 5935.0,
        "Затраты на исследования (млн руб)": 127.15,
        "Затраты на экобез (млн руб)": 22.6,
        "Уровень занятости (человек)": 1479.0,
        "Инвестиции и финансирование (млн руб)": 352.55,
        "Стоимость 1 акции (руб)": 96.83,
        "Дивиденды на акцию (%)": 2.85,
        "Общая сумма выплат акционерам (млн руб)": 13.8
    },
    {
        "Год": 1968.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 4276.3,
        "Объем добычи (тысяч тонн)": 9403.0,
        "Затраты на исследования (млн руб)": 121.03,
        "Затраты на экобез (млн руб)": 29.6,
        "Уровень занятости (человек)": 1710.0,
        "Инвестиции и финансирование (млн руб)": 127.55,
        "Стоимость 1 акции (руб)": 105.28,
        "Дивиденды на акцию (%)": 9.67,
        "Общая сумма выплат акционерам (млн руб)": 61.08
    },
    {
        "Год": 1969.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 2530.77,
        "Объем добычи (тысяч тонн)": 3164.0,
        "Затраты на исследования (млн руб)": 85.56,
        "Затраты на экобез (млн руб)": 34.18,
        "Уровень занятости (человек)": 4266.0,
        "Инвестиции и финансирование (млн руб)": 183.99,
        "Стоимость 1 акции (руб)": 104.97,
        "Дивиденды на акцию (%)": 7.59,
        "Общая сумма выплат акционерам (млн руб)": 63.74
    },
    {
        "Год": 1970.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 1527.4,
        "Объем добычи (тысяч тонн)": 2988.0,
        "Затраты на исследования (млн руб)": 26.5,
        "Затраты на экобез (млн руб)": 48.85,
        "Уровень занятости (человек)": 1094.0,
        "Инвестиции и финансирование (млн руб)": 409.97,
        "Стоимость 1 акции (руб)": 119.29,
        "Дивиденды на акцию (%)": 9.44,
        "Общая сумма выплат акционерам (млн руб)": 33.78
    },
    {
        "Год": 1971.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 696.17,
        "Объем добычи (тысяч тонн)": 7366.0,
        "Затраты на исследования (млн руб)": 127.64,
        "Затраты на экобез (млн руб)": 46.84,
        "Уровень занятости (человек)": 4776.0,
        "Инвестиции и финансирование (млн руб)": 465.49,
        "Стоимость 1 акции (руб)": 113.73,
        "Дивиденды на акцию (%)": 4.39,
        "Общая сумма выплат акционерам (млн руб)": 29.96
    },
    {
        "Год": 1972.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 3806.43,
        "Объем добычи (тысяч тонн)": 3627.0,
        "Затраты на исследования (млн руб)": 131.47,
        "Затраты на экобез (млн руб)": 18.96,
        "Уровень занятости (человек)": 3414.0,
        "Инвестиции и финансирование (млн руб)": 268.52,
        "Стоимость 1 акции (руб)": 119.15,
        "Дивиденды на акцию (%)": 5.29,
        "Общая сумма выплат акционерам (млн руб)": 12.61
    },
    {
        "Год": 1973.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 900.61,
        "Объем добычи (тысяч тонн)": 5735.0,
        "Затраты на исследования (млн руб)": 26.42,
        "Затраты на экобез (млн руб)": 38.1,
        "Уровень занятости (человек)": 4791.0,
        "Инвестиции и финансирование (млн руб)": 427.97,
        "Стоимость 1 акции (руб)": 114.99,
        "Дивиденды на акцию (%)": 9.14,
        "Общая сумма выплат акционерам (млн руб)": 21.02
    },
    {
        "Год": 1974.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 2443.06,
        "Объем добычи (тысяч тонн)": 8219.0,
        "Затраты на исследования (млн руб)": 33.86,
        "Затраты на экобез (млн руб)": 21.44,
        "Уровень занятости (человек)": 1031.0,
        "Инвестиции и финансирование (млн руб)": 430.26,
        "Стоимость 1 акции (руб)": 109.6,
        "Дивиденды на акцию (%)": 4.44,
        "Общая сумма выплат акционерам (млн руб)": 9.73
    },
    {
        "Год": 1975.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 2244.11,
        "Объем добычи (тысяч тонн)": 8000.0,
        "Затраты на исследования (млн руб)": 129.02,
        "Затраты на экобез (млн руб)": 13.27,
        "Уровень занятости (человек)": 947.0,
        "Инвестиции и финансирование (млн руб)": 129.16,
        "Стоимость 1 акции (руб)": 107.78,
        "Дивиденды на акцию (%)": 5.55,
        "Общая сумма выплат акционерам (млн руб)": 29.91
    },
    {
        "Год": 1976.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 824.85,
        "Объем добычи (тысяч тонн)": 7624.0,
        "Затраты на исследования (млн руб)": 232.22,
        "Затраты на экобез (млн руб)": 20.04,
        "Уровень занятости (человек)": 1119.0,
        "Инвестиции и финансирование (млн руб)": 193.93,
        "Стоимость 1 акции (руб)": 113.4,
        "Дивиденды на акцию (%)": 5.55,
        "Общая сумма выплат акционерам (млн руб)": 12.59
    },
    {
        "Год": 1977.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 4712.91,
        "Объем добычи (тысяч тонн)": 6422.0,
        "Затраты на исследования (млн руб)": 39.32,
        "Затраты на экобез (млн руб)": 38.85,
        "Уровень занятости (человек)": 3570.0,
        "Инвестиции и финансирование (млн руб)": 424.69,
        "Стоимость 1 акции (руб)": 117.48,
        "Дивиденды на акцию (%)": 7.01,
        "Общая сумма выплат акционерам (млн руб)": 82.35
    },
    {
        "Год": 1978.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 4898.18,
        "Объем добычи (тысяч тонн)": 9243.0,
        "Затраты на исследования (млн руб)": 40.74,
        "Затраты на экобез (млн руб)": 13.85,
        "Уровень занятости (человек)": 3322.0,
        "Инвестиции и финансирование (млн руб)": 296.15,
        "Стоимость 1 акции (руб)": 115.43,
        "Дивиденды на акцию (%)": 6.89,
        "Общая сумма выплат акционерам (млн руб)": 47.72
    },
    {
        "Год": 1979.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 1200.86,
        "Объем добычи (тысяч тонн)": 8007.0,
        "Затраты на исследования (млн руб)": 28.68,
        "Затраты на экобез (млн руб)": 30.39,
        "Уровень занятости (человек)": 3002.0,
        "Инвестиции и финансирование (млн руб)": 94.91,
        "Стоимость 1 акции (руб)": 120.99,
        "Дивиденды на акцию (%)": 3.24,
        "Общая сумма выплат акционерам (млн руб)": 15.68
    },
    {
        "Год": 1980.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 3478.13,
        "Объем добычи (тысяч тонн)": 7831.0,
        "Затраты на исследования (млн руб)": 133.76,
        "Затраты на экобез (млн руб)": 31.39,
        "Уровень занятости (человек)": 4117.0,
        "Инвестиции и финансирование (млн руб)": 324.34,
        "Стоимость 1 акции (руб)": 124.04,
        "Дивиденды на акцию (%)": 4.81,
        "Общая сумма выплат акционерам (млн руб)": 5.97
    },
    {
        "Год": 1981.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 3914.15,
        "Объем добычи (тысяч тонн)": 7298.0,
        "Затраты на исследования (млн руб)": 34.93,
        "Затраты на экобез (млн руб)": 13.46,
        "Уровень занятости (человек)": 3117.0,
        "Инвестиции и финансирование (млн руб)": 380.4,
        "Стоимость 1 акции (руб)": 137.6,
        "Дивиденды на акцию (%)": 6.24,
        "Общая сумма выплат акционерам (млн руб)": 68.69
    },
    {
        "Год": 1982.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 4466.15,
        "Объем добычи (тысяч тонн)": 1122.0,
        "Затраты на исследования (млн руб)": 152.5,
        "Затраты на экобез (млн руб)": 31.35,
        "Уровень занятости (человек)": 3264.0,
        "Инвестиции и финансирование (млн руб)": 334.43,
        "Стоимость 1 акции (руб)": 128.47,
        "Дивиденды на акцию (%)": 3.07,
        "Общая сумма выплат акционерам (млн руб)": 7.89
    },
    {
        "Год": 1983.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 2367.21,
        "Объем добычи (тысяч тонн)": 2788.0,
        "Затраты на исследования (млн руб)": 33.19,
        "Затраты на экобез (млн руб)": 36.97,
        "Уровень занятости (человек)": 966.0,
        "Инвестиции и финансирование (млн руб)": 403.72,
        "Стоимость 1 акции (руб)": 123.55,
        "Дивиденды на акцию (%)": 3.2,
        "Общая сумма выплат акционерам (млн руб)": 19.77
    },
    {
        "Год": 1984.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 1800.33,
        "Объем добычи (тысяч тонн)": 9086.0,
        "Затраты на исследования (млн руб)": 215.2,
        "Затраты на экобез (млн руб)": 43.29,
        "Уровень занятости (человек)": 2847.0,
        "Инвестиции и финансирование (млн руб)": 149.85,
        "Стоимость 1 акции (руб)": 114.89,
        "Дивиденды на акцию (%)": 8.03,
        "Общая сумма выплат акционерам (млн руб)": 46.13
    },
    {
        "Год": 1985.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 3349.11,
        "Объем добычи (тысяч тонн)": 3358.0,
        "Затраты на исследования (млн руб)": 231.91,
        "Затраты на экобез (млн руб)": 34.63,
        "Уровень занятости (человек)": 1005.0,
        "Инвестиции и финансирование (млн руб)": 147.23,
        "Стоимость 1 акции (руб)": 113.61,
        "Дивиденды на акцию (%)": 7.3,
        "Общая сумма выплат акционерам (млн руб)": 74.64
    },
    {
        "Год": 1986.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 4709.16,
        "Объем добычи (тысяч тонн)": 1027.0,
        "Затраты на исследования (млн руб)": 179.87,
        "Затраты на экобез (млн руб)": 19.31,
        "Уровень занятости (человек)": 1072.0,
        "Инвестиции и финансирование (млн руб)": 436.91,
        "Стоимость 1 акции (руб)": 108.7,
        "Дивиденды на акцию (%)": 5.9,
        "Общая сумма выплат акционерам (млн руб)": 12.83
    },
    {
        "Год": 1987.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 4276.69,
        "Объем добычи (тысяч тонн)": 7154.0,
        "Затраты на исследования (млн руб)": 22.18,
        "Затраты на экобез (млн руб)": 33.73,
        "Уровень занятости (человек)": 1186.0,
        "Инвестиции и финансирование (млн руб)": 79.14,
        "Стоимость 1 акции (руб)": 124.18,
        "Дивиденды на акцию (%)": 5.25,
        "Общая сумма выплат акционерам (млн руб)": 65.19
    },
    {
        "Год": 1988.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 3572.13,
        "Объем добычи (тысяч тонн)": 3799.0,
        "Затраты на исследования (млн руб)": 86.72,
        "Затраты на экобез (млн руб)": 48.74,
        "Уровень занятости (человек)": 509.0,
        "Инвестиции и финансирование (млн руб)": 273.47,
        "Стоимость 1 акции (руб)": 121.78,
        "Дивиденды на акцию (%)": 4.31,
        "Общая сумма выплат акционерам (млн руб)": 26.24
    },
    {
        "Год": 1989.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 1444.78,
        "Объем добычи (тысяч тонн)": 6379.0,
        "Затраты на исследования (млн руб)": 118.67,
        "Затраты на экобез (млн руб)": 41.24,
        "Уровень занятости (человек)": 3849.0,
        "Инвестиции и финансирование (млн руб)": 300.84,
        "Стоимость 1 акции (руб)": 134.28,
        "Дивиденды на акцию (%)": 9.23,
        "Общая сумма выплат акционерам (млн руб)": 12.39
    },
    {
        "Год": 1990.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 1472.41,
        "Объем добычи (тысяч тонн)": 9773.0,
        "Затраты на исследования (млн руб)": 241.65,
        "Затраты на экобез (млн руб)": 21.99,
        "Уровень занятости (человек)": 3279.0,
        "Инвестиции и финансирование (млн руб)": 127.61,
        "Стоимость 1 акции (руб)": 147.46,
        "Дивиденды на акцию (%)": 6.89,
        "Общая сумма выплат акционерам (млн руб)": 60.96
    },
    {
        "Год": 1991.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 2087.61,
        "Объем добычи (тысяч тонн)": 8485.0,
        "Затраты на исследования (млн руб)": 95.56,
        "Затраты на экобез (млн руб)": 25.84,
        "Уровень занятости (человек)": 2840.0,
        "Инвестиции и финансирование (млн руб)": 61.57,
        "Стоимость 1 акции (руб)": 139.26,
        "Дивиденды на акцию (%)": 2.16,
        "Общая сумма выплат акционерам (млн руб)": 30.08
    },
    {
        "Год": 1992.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 809.55,
        "Объем добычи (тысяч тонн)": 4974.0,
        "Затраты на исследования (млн руб)": 213.11,
        "Затраты на экобез (млн руб)": 20.75,
        "Уровень занятости (человек)": 2259.0,
        "Инвестиции и финансирование (млн руб)": 341.42,
        "Стоимость 1 акции (руб)": 132.69,
        "Дивиденды на акцию (%)": 3.34,
        "Общая сумма выплат акционерам (млн руб)": 4.43
    },
    {
        "Год": 1993.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 870.8,
        "Объем добычи (тысяч тонн)": 4020.0,
        "Затраты на исследования (млн руб)": 135.83,
        "Затраты на экобез (млн руб)": 15.66,
        "Уровень занятости (человек)": 3590.0,
        "Инвестиции и финансирование (млн руб)": 328.04,
        "Стоимость 1 акции (руб)": 123.43,
        "Дивиденды на акцию (%)": 4.06,
        "Общая сумма выплат акционерам (млн руб)": 50.11
    },
    {
        "Год": 1994.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 2915.97,
        "Объем добычи (тысяч тонн)": 2373.0,
        "Затраты на исследования (млн руб)": 37.91,
        "Затраты на экобез (млн руб)": 23.03,
        "Уровень занятости (человек)": 2340.0,
        "Инвестиции и финансирование (млн руб)": 167.54,
        "Стоимость 1 акции (руб)": 129.23,
        "Дивиденды на акцию (%)": 3.15,
        "Общая сумма выплат акционерам (млн руб)": 20.35
    },
    {
        "Год": 1995.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 1371.32,
        "Объем добычи (тысяч тонн)": 6521.0,
        "Затраты на исследования (млн руб)": 200.23,
        "Затраты на экобез (млн руб)": 42.08,
        "Уровень занятости (человек)": 1360.0,
        "Инвестиции и финансирование (млн руб)": 234.29,
        "Стоимость 1 акции (руб)": 142.91,
        "Дивиденды на акцию (%)": 7.78,
        "Общая сумма выплат акционерам (млн руб)": 100.07
    },
    {
        "Год": 1996.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 2106.38,
        "Объем добычи (тысяч тонн)": 9662.0,
        "Затраты на исследования (млн руб)": 223.74,
        "Затраты на экобез (млн руб)": 31.41,
        "Уровень занятости (человек)": 1435.0,
        "Инвестиции и финансирование (млн руб)": 98.76,
        "Стоимость 1 акции (руб)": 136.03,
        "Дивиденды на акцию (%)": 5.77,
        "Общая сумма выплат акционерам (млн руб)": 47.09
    },
    {
        "Год": 1997.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 3569.06,
        "Объем добычи (тысяч тонн)": 3749.0,
        "Затраты на исследования (млн руб)": 82.54,
        "Затраты на экобез (млн руб)": 31.41,
        "Уровень занятости (человек)": 3348.0,
        "Инвестиции и финансирование (млн руб)": 60.57,
        "Стоимость 1 акции (руб)": 134.41,
        "Дивиденды на акцию (%)": 9.84,
        "Общая сумма выплат акционерам (млн руб)": 132.26
    },
    {
        "Год": 1998.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 1271.68,
        "Объем добычи (тысяч тонн)": 4142.0,
        "Затраты на исследования (млн руб)": 19.97,
        "Затраты на экобез (млн руб)": 48.52,
        "Уровень занятости (человек)": 2355.0,
        "Инвестиции и финансирование (млн руб)": 476.7,
        "Стоимость 1 акции (руб)": 154.5,
        "Дивиденды на акцию (%)": 4.06,
        "Общая сумма выплат акционерам (млн руб)": 62.73
    },
    {
        "Год": 1999.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 1108.82,
        "Объем добычи (тысяч тонн)": 4049.0,
        "Затраты на исследования (млн руб)": 113.71,
        "Затраты на экобез (млн руб)": 35.05,
        "Уровень занятости (человек)": 1008.0,
        "Инвестиции и финансирование (млн руб)": 228.82,
        "Стоимость 1 акции (руб)": 145.4,
        "Дивиденды на акцию (%)": 8.71,
        "Общая сумма выплат акционерам (млн руб)": 63.32
    },
    {
        "Год": 2000.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 906.19,
        "Объем добычи (тысяч тонн)": 6005.0,
        "Затраты на исследования (млн руб)": 225.34,
        "Затраты на экобез (млн руб)": 18.06,
        "Уровень занятости (человек)": 1079.0,
        "Инвестиции и финансирование (млн руб)": 257.1,
        "Стоимость 1 акции (руб)": 154.09,
        "Дивиденды на акцию (%)": 7.81,
        "Общая сумма выплат акционерам (млн руб)": 60.17
    },
    {
        "Год": 2001.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 4627.69,
        "Объем добычи (тысяч тонн)": 9805.0,
        "Затраты на исследования (млн руб)": 169.33,
        "Затраты на экобез (млн руб)": 22.98,
        "Уровень занятости (человек)": 4690.0,
        "Инвестиции и финансирование (млн руб)": 323.56,
        "Стоимость 1 акции (руб)": 146.49,
        "Дивиденды на акцию (%)": 2.4,
        "Общая сумма выплат акционерам (млн руб)": 14.06
    },
    {
        "Год": 2002.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 4038.41,
        "Объем добычи (тысяч тонн)": 5927.0,
        "Затраты на исследования (млн руб)": 169.63,
        "Затраты на экобез (млн руб)": 12.11,
        "Уровень занятости (человек)": 1243.0,
        "Инвестиции и финансирование (млн руб)": 188.51,
        "Стоимость 1 акции (руб)": 151.45,
        "Дивиденды на акцию (%)": 8.55,
        "Общая сумма выплат акционерам (млн руб)": 12.95
    },
    {
        "Год": 2003.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 751.67,
        "Объем добычи (тысяч тонн)": 1777.0,
        "Затраты на исследования (млн руб)": 248.5,
        "Затраты на экобез (млн руб)": 49.94,
        "Уровень занятости (человек)": 3088.0,
        "Инвестиции и финансирование (млн руб)": 427.61,
        "Стоимость 1 акции (руб)": 155.19,
        "Дивиденды на акцию (%)": 5.51,
        "Общая сумма выплат акционерам (млн руб)": 76.96
    },
    {
        "Год": 2004.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 3865.88,
        "Объем добычи (тысяч тонн)": 7344.0,
        "Затраты на исследования (млн руб)": 138.58,
        "Затраты на экобез (млн руб)": 41.19,
        "Уровень занятости (человек)": 2661.0,
        "Инвестиции и финансирование (млн руб)": 437.16,
        "Стоимость 1 акции (руб)": 167.76,
        "Дивиденды на акцию (%)": 9.1,
        "Общая сумма выплат акционерам (млн руб)": 137.4
    },
    {
        "Год": 2005.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 3597.0,
        "Объем добычи (тысяч тонн)": 2213.0,
        "Затраты на исследования (млн руб)": 23.11,
        "Затраты на экобез (млн руб)": 32.81,
        "Уровень занятости (человек)": 4817.0,
        "Инвестиции и финансирование (млн руб)": 341.79,
        "Стоимость 1 акции (руб)": 156.11,
        "Дивиденды на акцию (%)": 4.95,
        "Общая сумма выплат акционерам (млн руб)": 61.82
    },
    {
        "Год": 2006.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 2437.24,
        "Объем добычи (тысяч тонн)": 7426.0,
        "Затраты на исследования (млн руб)": 246.52,
        "Затраты на экобез (млн руб)": 49.88,
        "Уровень занятости (человек)": 2881.0,
        "Инвестиции и финансирование (млн руб)": 418.72,
        "Стоимость 1 акции (руб)": 171.25,
        "Дивиденды на акцию (%)": 9.13,
        "Общая сумма выплат акционерам (млн руб)": 125.08
    },
    {
        "Год": 2007.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 2888.59,
        "Объем добычи (тысяч тонн)": 7602.0,
        "Затраты на исследования (млн руб)": 12.64,
        "Затраты на экобез (млн руб)": 36.98,
        "Уровень занятости (человек)": 4479.0,
        "Инвестиции и финансирование (млн руб)": 392.92,
        "Стоимость 1 акции (руб)": 184.58,
        "Дивиденды на акцию (%)": 3.75,
        "Общая сумма выплат акционерам (млн руб)": 6.92
    },
    {
        "Год": 2008.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 1589.76,
        "Объем добычи (тысяч тонн)": 5408.0,
        "Затраты на исследования (млн руб)": 117.95,
        "Затраты на экобез (млн руб)": 22.09,
        "Уровень занятости (человек)": 4764.0,
        "Инвестиции и финансирование (млн руб)": 145.71,
        "Стоимость 1 акции (руб)": 171.92,
        "Дивиденды на акцию (%)": 9.96,
        "Общая сумма выплат акционерам (млн руб)": 85.62
    },
    {
        "Год": 2009.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 1291.41,
        "Объем добычи (тысяч тонн)": 9143.0,
        "Затраты на исследования (млн руб)": 10.38,
        "Затраты на экобез (млн руб)": 26.8,
        "Уровень занятости (человек)": 3584.0,
        "Инвестиции и финансирование (млн руб)": 86.86,
        "Стоимость 1 акции (руб)": 178.72,
        "Дивиденды на акцию (%)": 6.0,
        "Общая сумма выплат акционерам (млн руб)": 107.23
    },
    {
        "Год": 2010.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 2403.85,
        "Объем добычи (тысяч тонн)": 8605.0,
        "Затраты на исследования (млн руб)": 39.34,
        "Затраты на экобез (млн руб)": 44.02,
        "Уровень занятости (человек)": 4137.0,
        "Инвестиции и финансирование (млн руб)": 354.71,
        "Стоимость 1 акции (руб)": 201.21,
        "Дивиденды на акцию (%)": 4.8,
        "Общая сумма выплат акционерам (млн руб)": 19.32
    },
    {
        "Год": 2011.0,
        "Нефтяной регион": "Татарстан",
        "Доходность (млн руб)": 2455.12,
        "Объем добычи (тысяч тонн)": 9325.0,
        "Затраты на исследования (млн руб)": 27.79,
        "Затраты на экобез (млн руб)": 47.71,
        "Уровень занятости (человек)": 2505.0,
        "Инвестиции и финансирование (млн руб)": 116.15,
        "Стоимость 1 акции (руб)": 226.73,
        "Дивиденды на акцию (%)": 4.06,
        "Общая сумма выплат акционерам (млн руб)": 46.03
    },
    {
        "Год": 2012.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 728.0,
        "Объем добычи (тысяч тонн)": 4626.0,
        "Затраты на исследования (млн руб)": 28.27,
        "Затраты на экобез (млн руб)": 39.27,
        "Уровень занятости (человек)": 4047.0,
        "Инвестиции и финансирование (млн руб)": 313.05,
        "Стоимость 1 акции (руб)": 241.3,
        "Дивиденды на акцию (%)": 9.3,
        "Общая сумма выплат акционерам (млн руб)": 134.65
    },
    {
        "Год": 2013.0,
        "Нефтяной регион": "Тюменская обл.",
        "Доходность (млн руб)": 3944.7,
        "Объем добычи (тысяч тонн)": 7803.0,
        "Затраты на исследования (млн руб)": 48.16,
        "Затраты на экобез (млн руб)": 17.11,
        "Уровень занятости (человек)": 1699.0,
        "Инвестиции и финансирование (млн руб)": 129.64,
        "Стоимость 1 акции (руб)": 267.65,
        "Дивиденды на акцию (%)": 9.57,
        "Общая сумма выплат акционерам (млн руб)": 128.07
    },
    {
        "Год": 2014.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 4016.84,
        "Объем добычи (тысяч тонн)": 9953.0,
        "Затраты на исследования (млн руб)": 160.29,
        "Затраты на экобез (млн руб)": 17.61,
        "Уровень занятости (человек)": 2606.0,
        "Инвестиции и финансирование (млн руб)": 118.66,
        "Стоимость 1 акции (руб)": 299.25,
        "Дивиденды на акцию (%)": 9.02,
        "Общая сумма выплат акционерам (млн руб)": 215.94
    },
    {
        "Год": 2015.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 3562.87,
        "Объем добычи (тысяч тонн)": 2653.0,
        "Затраты на исследования (млн руб)": 242.5,
        "Затраты на экобез (млн руб)": 19.77,
        "Уровень занятости (человек)": 1525.0,
        "Инвестиции и финансирование (млн руб)": 297.49,
        "Стоимость 1 акции (руб)": 287.97,
        "Дивиденды на акцию (%)": 5.6,
        "Общая сумма выплат акционерам (млн руб)": 161.26
    },
    {
        "Год": 2016.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 1753.02,
        "Объем добычи (тысяч тонн)": 4453.0,
        "Затраты на исследования (млн руб)": 36.59,
        "Затраты на экобез (млн руб)": 42.29,
        "Уровень занятости (человек)": 4409.0,
        "Инвестиции и финансирование (млн руб)": 336.88,
        "Стоимость 1 акции (руб)": 299.99,
        "Дивиденды на акцию (%)": 6.72,
        "Общая сумма выплат акционерам (млн руб)": 161.27
    },
    {
        "Год": 2017.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 4844.15,
        "Объем добычи (тысяч тонн)": 3589.0,
        "Затраты на исследования (млн руб)": 119.41,
        "Затраты на экобез (млн руб)": 18.24,
        "Уровень занятости (человек)": 2807.0,
        "Инвестиции и финансирование (млн руб)": 285.92,
        "Стоимость 1 акции (руб)": 292.96,
        "Дивиденды на акцию (%)": 4.73,
        "Общая сумма выплат акционерам (млн руб)": 41.57
    },
    {
        "Год": 2018.0,
        "Нефтяной регион": "ХМАО Югра",
        "Доходность (млн руб)": 3148.7,
        "Объем добычи (тысяч тонн)": 8217.0,
        "Затраты на исследования (млн руб)": 149.59,
        "Затраты на экобез (млн руб)": 39.55,
        "Уровень занятости (человек)": 4228.0,
        "Инвестиции и финансирование (млн руб)": 292.08,
        "Стоимость 1 акции (руб)": 298.33,
        "Дивиденды на акцию (%)": 7.12,
        "Общая сумма выплат акционерам (млн руб)": 212.41
    },
    {
        "Год": 2019.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 4850.88,
        "Объем добычи (тысяч тонн)": 4370.0,
        "Затраты на исследования (млн руб)": 80.75,
        "Затраты на экобез (млн руб)": 42.27,
        "Уровень занятости (человек)": 3391.0,
        "Инвестиции и финансирование (млн руб)": 191.59,
        "Стоимость 1 акции (руб)": 338.02,
        "Дивиденды на акцию (%)": 4.16,
        "Общая сумма выплат акционерам (млн руб)": 84.37
    },
    {
        "Год": 2020.0,
        "Нефтяной регион": "Томская обл.",
        "Доходность (млн руб)": 4064.7,
        "Объем добычи (тысяч тонн)": 7556.0,
        "Затраты на исследования (млн руб)": 237.77,
        "Затраты на экобез (млн руб)": 21.72,
        "Уровень занятости (человек)": 4591.0,
        "Инвестиции и финансирование (млн руб)": 391.12,
        "Стоимость 1 акции (руб)": 345.04,
        "Дивиденды на акцию (%)": 5.0,
        "Общая сумма выплат акционерам (млн руб)": 120.76
    },
    {
        "Год": 2021.0,
        "Нефтяной регион": "Ямальский АО",
        "Доходность (млн руб)": 3626.53,
        "Объем добычи (тысяч тонн)": 3391.0,
        "Затраты на исследования (млн руб)": 127.71,
        "Затраты на экобез (млн руб)": 18.48,
        "Уровень занятости (человек)": 3450.0,
        "Инвестиции и финансирование (млн руб)": 253.28,
        "Стоимость 1 акции (руб)": 337.08,
        "Дивиденды на акцию (%)": 3.87,
        "Общая сумма выплат акционерам (млн руб)": 13.04
    },
    {
        "Год": 2022.0,
        "Нефтяной регион": "Башкортостан",
        "Доходность (млн руб)": 1678.55,
        "Объем добычи (тысяч тонн)": 2797.0,
        "Затраты на исследования (млн руб)": 71.73,
        "Затраты на экобез (млн руб)": 32.52,
        "Уровень занятости (человек)": 2629.0,
        "Инвестиции и финансирование (млн руб)": 453.24,
        "Стоимость 1 акции (руб)": 382.05,
        "Дивиденды на акцию (%)": 7.38,
        "Общая сумма выплат акционерам (млн руб)": 84.59
    },
    {
        "Год": 2023.0,
        "Нефтяной регион": "Омская обл.",
        "Доходность (млн руб)": 1951.68,
        "Объем добычи (тысяч тонн)": 4929.0,
        "Затраты на исследования (млн руб)": 45.73,
        "Затраты на экобез (млн руб)": 33.31,
        "Уровень занятости (человек)": 1480.0,
        "Инвестиции и финансирование (млн руб)": 69.11,
        "Стоимость 1 акции (руб)": 364.52,
        "Дивиденды на акцию (%)": 7.7,
        "Общая сумма выплат акционерам (млн руб)": 84.2
    }
]