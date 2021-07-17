/* eslint-disable camelcase */
interface i18nObject {
    [key: string]: string | i18nObject;
}
const ja_JP: i18nObject = {
    lang: {
        "zh-CN": "中国語（簡体字） - 简体中文",
        "en-US": "英語 - English",
        "ja-JP": "日本語",
    },
    "12hoursystem": "12小时制",
    "24hoursystem": "24小时制",
    info: {
        home: "メインページ",
        weatheroverview: "天気概要",
        area: "エリア",
        before: "前に",
        now: "今の時",
        succeedSightseeingCountInfomation: "完了した状況の統計",
        activeGroupCount: "現在完了している",
        totalCount: "合計が完了しました",
        soonToComplete: "すぐに完成できます",
        fewHoursToComplete: "数時間に完成できます",
        moreTimeToComplete: "多くの時間を待ち",
        longTimeToComplete: "長い時間を要する",
        completed: "完了しました",
        startFrom: "開始時間",
        localTime: "現地時間",
        isStillWaiting: "（天候は条件を満たしていますが、まだ始まっていません）",
        veryLongTimeToComplete: "122日後（地球時間）",
        endingAt: "終了時刻",
        lessThan: "（{m}分未満）",
        additionalInfo: "探索笔记的时间段终点为本页标记的终点的前一分钟，例如若本页面所标记的时间段为ET 18:00 - ET 5:00，那么实际的时间段终点为ET 4:59，请注意。",
    },
    sightseeingActGuide: "探索笔记具体完成办法",
    sightseeingActGuideSeeHere: "参见此处。",
    sightseeingClickIntroduction: "点击下方未完成的条目可以标记该探索笔记为已完成，点击已完成的可以标记为未完成。",
    weatherRegardedAsTheSameWeather: "由于版本更新，“碧空”和“晴朗”、“小雨”和“暴雨”、“小雪”和“暴雪”现在被视为是一样的天气。本指南已经适配相关改动。",
    introdution: {
        text: "本指南将会计算艾欧泽亚大陆上的天气情况以匹配将来符合天气和时间条件从而能够完成的探索笔记。<br>本指南将会在有新的探索笔记可以完成时通过浏览器右下角通知的形式告知您，您可以点击该通知来直接地返回到该页面。（需要您的浏览器支持通知功能）",
        button: "我知道了",
    },
    notification: {
        welcome: {
            title: "本页面将以通知形式……",
            body: "……告知新出现的可完成的探索笔记（通知将在15s后自动关闭，点击通知可以让你回到本页面）",
        },
        availableSoonTitle: "将有新的探索笔记可完成 | 将有{n}项探索笔记可完成",
        availableNowTitle: "有新的探索笔记可以完成！ | 有{n}项探索笔记可以完成！",
    },
    area: {
        LimsaLominsa: "リムサ・ロミンサ",
        LimsaLominsaUpper: "リムサ・ロミンサ：上甲板層",
        LimsaLominsaLower: "リムサ・ロミンサ：下甲板層",
        MiddleLa: "中央ラノシア",
        LowerLa: "低地ラノシア",
        EasternLa: "東ラノシア",
        WesternLa: "西ラノシア",
        UpperLa: "高地ラノシア",
        OuterLa: "外地ラノシア",
        Mist: "ミスト・ヴィレッジ",
        Wolves: "ウルヴズジェイル係船場",
        Gridania: "グリダニア",
        OldGridania: "グリダニア：旧市街",
        NewGridania: "グリダニア：新市街",
        CentralShroud: "黒衣森：中央森林",
        EastShroud: "黒衣森：東部森林",
        SouthShroud: "黒衣森：南部森林",
        NorthShroud: "黒衣森：北部森林",
        TheLavenderBeds: "ラベンダーベッド",
        Uldah: "ウルダハ",
        UldahThal: "ウルダハ：ザル回廊",
        WesternThanalan: "西ザナラーン",
        CentralThanalan: "中央ザナラーン",
        EasternThanalan: "東ザナラーン",
        SouthernThanalan: "南ザナラーン",
        NorthernThanalan: "北ザナラーン",
        TheGoblet: "ゴブレットビュート",
        MorDhona: "モードゥナ",
        Ishgard: "イシュガルド",
        CoerthasCentral: "クルザス中央高地",
        CoerthasWestern: "クルザス西部高地",
        TheSeaofClouds: "アバラシア雲海",
        AzysLla: "アジス・ラー",
        DravanianForelands: "高地ドラヴァニア",
        DravanianHinterlands: "低地ドラヴァニア",
        ChurningMists: "ドラヴァニア雲海",
        Idyllshire: "イディルシャイア",
        RhalgrsReach: "ラールガーズリーチ",
        TheFringes: "ギラバニア辺境地帯",
        ThePeaks: "ギラバニア山岳地帯",
        TheLochs: "ギラバニア湖畔地帯",
        Kugane: "クガネ",
        Shirogane: "シロガネ",
        RubySea: "紅玉海",
        Yanxia: "ヤンサ",
        AzimSteppe: "アジムステップ",
        EurekaAnemos: "エウレカ・アネモス帯",
        EurekaPagos: "エウレカ・パゴス帯",
        EurekaPyros: "エウレカ・ピューロス帯",
        EurekaHydatos: "エウレカ・ヒュダトス帯",
        TheCrystarium: "クリスタリウム",
        Eulmore: "ユールモア",
        Lakeland: "レイクランド",
        Kholusia: "コルシア島",
        AmhAraeng: "アム・アレーン",
        IlMheg: "イル・メグ",
        TheRaktikaGreatwood: "ラケティカ大森林",
        TheTempest: "テンペスト",
        LyheMheg: "リェー・メグ",
        TheBozjanSouthernFront: "南方ボズヤ戦線",
        TheFeastingGrounds: "ウルヴズジェイル演習場",
        SealRock: "シールロック",
        TheFieldsofGlory: "フィールド・オブ・グローリー",
        OnsalHakair: "オンサル・ハカイル",
    },
    weather: {
        ClearSkies: "快晴",
        FairSkies: "晴れ",
        Clouds: "曇り",
        Fog: "霧",
        Wind: "風",
        Gales: "暴風",
        Rain: "雨",
        Showers: "暴雨",
        Thunder: "雷",
        EurekaPagosThunder: "暴雷",
        Thunderstorms: "雷雨",
        DustStorms: "砂塵",
        HeatWaves: "灼熱波",
        Snow: "雪",
        Blizzards: "吹雪",
        Gloom: "妖霧",
        UmbralWind: "霊風",
        UmbralStatic: "放電",
    },
    action: {
        Lookout: "見わたす",
        Pray: "祈る",
        Sit: "座る",
        Salute: "敬礼する",
        Comfort: "なぐさめる",
        Point: "指さす",
        Psych: "活を入れる",
    },
};
export default ja_JP;
