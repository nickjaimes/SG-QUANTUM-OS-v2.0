//
//  Item.swift
//  SG AI BAND
//
//  Created by USER on 2025/10/21.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
